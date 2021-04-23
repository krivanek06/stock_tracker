from threading import Thread
from queue import Queue
from pytz import UTC

from ExternalAPI import FinhubApi
from ExternalAPI.YahooFinance import YahooFinanceRequesterApi

utc = UTC


class FundamentalServiceDataFetcher:
    def __init__(self):
        self.yRequester = YahooFinanceRequesterApi.YahooFinanceRequesterApi()
        self.finhub = FinhubApi.FinhubApi()

    def fetchStockDetails(self, symbol):
        return self.__fetchStockDetails(symbol)

    def __fetchStockDetails(self, symbol):
        que = Queue()
        # declare threads
        t2 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_analysts_info(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_company_data(arg1)), args=(que, symbol))
        t8 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_financial_sheets(arg1)), args=(que, symbol))
        t10 = Thread(target=lambda q, arg1: q.put(self.finhub.getNewsForSymbol(arg1)), args=(que, symbol))
        t12 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_holders(arg1)), args=(que, symbol))

        # FINHUB
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))
        t11 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t2.start()
        t4.start()
        t6.start()
        t7.start()
        t8.start()
        t10.start()
        t11.start()
        t12.start()

        # wait threads to finish
        t2.join()
        t4.join()
        t6.join()
        t7.join()
        t8.join()
        t10.join()
        t11.join()
        t12.join()

        # get result from threads into one dict
        merge = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        return merge
