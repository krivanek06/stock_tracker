from queue import Queue
from threading import Thread

from ExternalAPI.FinancialModelingApi import FinancialModelingApi
from ExternalAPI.FinhubApi import FinhubApi
from ExternalAPI.YahooFinanceApi import YahooFinanceApi
from pytz import UTC

utc = UTC


class FundamentalServiceDataFetcher:
    def __init__(self):
        self.yRequester = YahooFinanceApi()
        self.finhub = FinhubApi()
        self.financialModeling = FinancialModelingApi()

    def fetchStockDetails(self, symbol):
        return self.__fetchStockDetails(symbol)

    def __getSectorPeers(self, symbol):
        searchedResult = self.financialModeling.getSectorPeers(symbol)  # 10 peers
        return [] if not searchedResult else self.financialModeling.getCompanyQuoteBatch(searchedResult[0]['peersList'])

    def __fetchStockDetails(self, symbol):
        # get result from threads into one dict
        merge = {}
        que = Queue()

        outlook = Thread(target=lambda q, arg1: q.put({'companyOutlook': self.financialModeling.getCompanyOutlook(arg1)}), args=(que, symbol))
        companyQuote = Thread(target=lambda q, arg1: q.put({'companyQuote': self.financialModeling.getCompanyQuoteBatch([arg1])}), args=(que, symbol))

        outlook.start()
        companyQuote.start()

        outlook.join()
        companyQuote.join()

        merge = self.__getMergeResult(que)

        # check if symbol is not stock then just return
        profile = merge.get('companyOutlook', {}).get('profile', {})
        if profile.get('isEtf') == True or profile.get('isFund') == True:
            return merge

        # Yahoo finance
        t4 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_company_data(arg1)), args=(que, symbol))

        # Financial modeling getMutualFundHolders
        t2 = Thread(target=lambda q, arg1: q.put({'mutualFundHolders': self.financialModeling.getMutualFundHolders(arg1)}), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put({'institutionalHolders': self.financialModeling.getInstitutionalHolders(arg1)}), args=(que, symbol))
        tAnalyst = Thread(target=lambda q, arg1: q.put({'analystEstimates': self.financialModeling.getAnalystEstimates(arg1)}), args=(que, symbol))
        tSocialSentiment = Thread(target=lambda q, arg1: q.put({'socialSentiment': self.financialModeling.getSocialSentiment(arg1)}), args=(que, symbol))
       
        tSector = Thread(target=lambda q, arg1: q.put({'sectorPeers': self.__getSectorPeers(arg1)}), args=(que, symbol))

        # Finhub
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))
        t11 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t2.start()
        t3.start()
        tSector.start()
        tAnalyst.start()
        tSocialSentiment.start()
        t4.start()
        t6.start()
        t7.start()
        t11.start()

        # wait threads to finish
        t2.join()
        t3.join()
        tSector.join()
        tAnalyst.join()
        tSocialSentiment.join()
        t4.join()
        t6.join()
        t7.join()
        t11.join()

        return self.__getMergeResult(que, merge)
    
    def __getMergeResult(self, que: Queue, merge = {}): 
        while not que.empty():
            try:
                merge = {**merge, **que.get()}
            except:
                pass
        return merge
