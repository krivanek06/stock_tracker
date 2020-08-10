import quandl
import os
from private_data import enviroments
from requests import get
from datetime import datetime
from queue import Queue
from threading import Thread

class Quandl:
    def __init__(self):
        quandl.ApiConfig.api_key = os.environ['QUANDL_SECRET_KEY']


    def getSP500Statistics(self):
        que = Queue()
        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put({'dividendYieldMonth': quandl.get('MULTPL/SP500_DIV_YIELD_MONTH')}), args=(que, None))
        t2 = Thread(target=lambda q, arg1: q.put({'peRatioMonth': quandl.get('MULTPL/SP500_PE_RATIO_MONTH')}), args=(que, None))
        t3 = Thread(target=lambda q, arg1: q.put({'earningsYieldMonth': quandl.get('MULTPL/SP500_EARNINGS_YIELD_MONTH')}), args=(que, None))
        t4 = Thread(target=lambda q, arg1: q.put({'priceToBookQrt': quandl.get('MULTPL/SP500_PBV_RATIO_QUARTER')}), args=(que, None))
        t5 = Thread(target=lambda q, arg1: q.put({'dividendPerMonth': quandl.get('MULTPL/SP500_DIV_MONTH')}), args=(que, None))
        t6 = Thread(target=lambda q, arg1: q.put({'salesGrowthQrt': quandl.get('MULTPL/SP500_SALES_GROWTH_QUARTER')}), args=(que, None))
        t7 = Thread(target=lambda q, arg1: q.put({'bookValueQrt': quandl.get('MULTPL/SP500_BVPS_QUARTER')}), args=(que, None))
        t8 = Thread(target=lambda q, arg1: q.put({'priceToSaleQrt': quandl.get('MULTPL/SP500_PSR_QUARTER')}), args=(que, None))

        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()
        t6.start()
        t7.start()
        t8.start()

        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()
        t6.join()
        t7.join()
        t8.join()

        result = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        formatedData = {''}
        datetimeIndex =

        for i in range(len(result['dividendYieldMonth'])):
            formatedData['dividendYieldMonth'] = result['dividendYieldMonth']['Value'][i]


        return result