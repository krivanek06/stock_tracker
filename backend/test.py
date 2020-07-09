import websocket
import alpaca_trade_api as tradeapi
from requests import get
import yfinance as yf
from yahoo_fin import stock_info as si
from ExternalAPI import Finhub
import requests

#crypto = si.get_top_crypto()
#for k in crypto.keys():
#    print(crypto[k])


r = requests.get('https://finnhub.io/api/v1/news?category=general&token=brsrc5vrh5r9dg9d77pg').json()
for h in r:
    print(h)