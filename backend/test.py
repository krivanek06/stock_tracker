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

import websocket

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    ws.send('{"type":"subscribe","symbol":"AAPL"}')

if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://ws.finnhub.io?token=brsrc5vrh5r9dg9d77pg",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
