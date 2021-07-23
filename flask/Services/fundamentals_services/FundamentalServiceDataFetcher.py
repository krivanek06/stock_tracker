from threading import Thread
from queue import Queue
from pytz import UTC

from ExternalAPI.FinhubApi import FinhubApi
from ExternalAPI.YahooFinance import YahooFinanceRequesterApi
from ExternalAPI.FinancialModelingApi import FinancialModelingApi

utc = UTC


class FundamentalServiceDataFetcher:
    def __init__(self):
        self.yRequester = YahooFinanceRequesterApi.YahooFinanceRequesterApi()
        self.finhub = FinhubApi()
        self.financialModeling = FinancialModelingApi()

    def fetchStockNews(self, symbol: str):
        return self.financialModeling.getStockNews([symbol])

    def fetchStockDetails(self, symbol):
        return self.__fetchStockDetails(symbol)

    def __getSectorPeers(self, symbol):
        searchedResult = self.financialModeling.getSectorPeers(symbol)  # 10 peers
        return [] if not searchedResult else self.financialModeling.getCompanyQuoteBatch(searchedResult[0]['peersList'])

    def __fetchStockDetails(self, symbol):
        que = Queue()

        # Yahoo finance
        t4 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_company_data(arg1)), args=(que, symbol))

        # Financial modeling getMutualFundHolders
        t1 = Thread(target=lambda q, arg1: q.put({'companyOutlook': self.financialModeling.getCompanyOutlook(arg1)}), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put({'mutualFundHolders': self.financialModeling.getMutualFundHolders(arg1)}), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put({'institutionalHolders': self.financialModeling.getInstitutionalHolders(arg1)}), args=(que, symbol))
        tSector = Thread(target=lambda q, arg1: q.put({'sectorPeers': self.__getSectorPeers(arg1)}), args=(que, symbol))

        # Finhub
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))
        t11 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        tSector.start()
        t4.start()
        t6.start()
        t7.start()
        t11.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        tSector.join()
        t4.join()
        t6.join()
        t7.join()
        t11.join()

        # get result from threads into one dict
        merge = {}
        while not que.empty():
            merge = {**merge, **que.get()}
        return merge
