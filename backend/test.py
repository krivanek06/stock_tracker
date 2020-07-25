import websocket
import alpaca_trade_api as tradeapi
from requests import get
from yahoo_fin import stock_info as si
from ExternalAPI import EconomicNews, YahooFinance, Finhub, Twelvedata
from Services import StockDetailsService, FirestoreService
import requests
import time
from firebase_admin import firestore
from threading import Thread
import queue
from private_data import enviroments

from datetime import datetime
from queue import Queue
import threading
StockNews = EconomicNews.EconomicNews()
YahooFinanceGlobal = YahooFinance.YahooFinance()
Finhub = Finhub.Finhub()
Twelvedata = Twelvedata.Twelvedata()


stockDetailsService =  StockDetailsService.StockDetailsService()



myTime = time.time()


print('start')


res = get('https://finnhub.io/api/v1/stock/financials-reported?symbol=MSFT&metric=all&token=brsrc5vrh5r9dg9d77pg').json()['data'][0:25]
#res = get('https://finnhub.io/api/v1/stock/financials-reported?symbol=AAPL&token=brsrc5vrh5r9dg9d77pg').json()
#for r in res:
#    print(r)


r = stockDetailsService.getStockFinancialReport('MSFT', '2019')
print(r)

print(time.time() - myTime)






#res = get('https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=brsrc5vrh5r9dg9d77pg').json()
#for k,v in r.items(): #res['metric']
#    print(k, v)


