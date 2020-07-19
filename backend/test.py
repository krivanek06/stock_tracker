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


StockNews = EconomicNews.EconomicNews()
YahooFinanceGlobal = YahooFinance.YahooFinance()
Finhub = Finhub.Finhub()
Twelvedata = Twelvedata.Twelvedata()


stockDetailsService =  StockDetailsService.StockDetailsService()



'''


res = db.collection('users').where('displayName' , '==','admin').get()
print(res)


'''


start_time = time.time()

db = FirestoreService.FirestoreService().initFirestore()

stockNewsArray = [news for news in db.collection('stockData').document('MSFT').collection('stockNews')
                .order_by('datetime', direction=firestore.firestore.Query.DESCENDING)
                .limit(10)
                .stream() ]
print(len(stockNewsArray))
for n in stockNewsArray:
    print(n.to_dict())


for doc in stockNewsArray:
    doc.reference.delete()

elapsed_time = time.time() - start_time
print(elapsed_time)