from ExternalAPI import YahooFinance, Finhub
from threading import Thread
from queue import Queue
from datetime import datetime
from firebase_admin import credentials, firestore, initialize_app
import Services.FirestoreService as FirestoreService

class StockDetailsService:
    def __init__(self):
        self.yahooFinance = YahooFinance.YahooFinance()
        self.yahooFinanceDataModification = YahooFinance.YahooFinanceDataModification()
        self.finhub = Finhub.Finhub()
        self.db = FirestoreService.FirestoreService().initFirestore()


    def getStockDetails(self, symbol):
        stockDetails = self.db.collection('stockData').where('symbol', '==', symbol).get()

        if stockDetails == []:
            print('fetching')
            stockDetails = self.__fetchStockDetails(symbol)
            self.db.collection('stockData').add(stockDetails) # save data into firestore
        else:
            stockDetails = stockDetails[0].to_dict() # change to dict fetch data from firestore, always should be just 1

        #stockNews = self.finhub.getNewsForSymbol(symbol)
        #stockDetails = {**stockDetails, **stockNews}

        return stockDetails



    def __fetchStockDetails(self, symbol):
        que = Queue()
        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put(self.__getStockMergedFundamentals(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getBalanceSheet(arg1)), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getIncomeStatement(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getCashFlow(arg1)), args=(que, symbol))
        t5 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getAnalystsInfo(arg1)), args=(que, symbol))
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()
        t6.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()
        t6.join()

        # get result from threads in random order
        res1 = que.get()
        res2 = que.get()
        res3 = que.get()
        res4 = que.get()
        res5 = que.get()
        res6 = que.get()

        # merge data into one dict
        merge = {**res1, **res2, **res3, **res4, **res5, **res6,  'symbol': symbol, 'fundamendalsLastUpdate': datetime.today(), 'overviewLastUpdate': datetime.today()}
        return merge

    def __getStockMergedFundamentals(self, symbol):
        que = Queue()

        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerSummary(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerInfo(arg1)), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerStat(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getAnalystsInfo(arg1)), args=(que, symbol))
        t5 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getBalanceSheet(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()

        # return value from threads and merge everything in one dict
        info = que.get()
        summary = que.get()
        analysis = que.get()
        stat = que.get()
        balanceSheet = que.get()

        # merge stuff
        merge = {**info, **summary, **analysis, **stat, **balanceSheet}
        return {'fundamentals': self.yahooFinanceDataModification.modifyCustomMakeDeepInfo(merge)}