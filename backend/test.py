import websocket
import alpaca_trade_api as tradeapi
from requests import get
from yahoo_fin import stock_info as si
from ExternalAPI import StockNews, YahooFinance, Finhub, Twelvedata
from Services import StockDetailsService
import requests
import time
from threading import Thread
import queue
from private_data import enviroments

from datetime import datetime


StockNews = StockNews.StockNews()
YahooFinanceGlobal = YahooFinance.YahooFinance()
Finhub = Finhub.Finhub()
Twelvedata = Twelvedata.Twelvedata()


stockDetailsService =  StockDetailsService.StockDetailsService()



'''


res = db.collection('users').where('displayName' , '==','admin').get()
print(res)


'''
start_time = time.time()

symbol = 'MSFT'
res = YahooFinanceGlobal.getAnalystsInfo(symbol)

for r in res:
    print(r, res[r])

#db.collection('stockData').add(merge)



elapsed_time = time.time() - start_time
print(elapsed_time)