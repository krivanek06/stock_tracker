

import datetime
import yfinance as yf
import requests
from datetime import date, timedelta
from yahoo_fin import stock_info as si
import data_modification as data_modification
import stock_news as sn

import os
import json
from pathlib import Path
from time import sleep
import RepeatedTimer as rt
print('*********************') # ^DJI , ^GSPC


symbol = 'ONGC'
#balanceSheet = si.get_balance_sheet(symbol)


stocks = ['^GSPC', '^DJI']
#sn = StockNews(stocks) #wt_key='MY_WORLD_TRADING_DATA_KEY'
#print(sn.read_rss())
'''

business_news = requests.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c52ae2c816d4428b8187c4e5aa70a7a0')
wallStreet_news = requests.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=c52ae2c816d4428b8187c4e5aa70a7a0')
apple_news = requests.get('http://newsapi.org/v2/everything?q=apple&from=2020-06-07&to=2020-06-07&sortBy=popularity&apiKey=c52ae2c816d4428b8187c4e5aa70a7a0')

business_filename = "business_news.json"
wallStreet_filename = "wallStreet_news.json"
apple_filename = "apple_news.json"

location = 'resource/stock_news_data'

if not os.path.exists(location):
    os.makedirs(location)

#os.makedirs(os.path.dirname('/resource/stock_news_data/'), exist_ok=True)

with open(location + "/" + business_filename, "w+", encoding='utf-8') as f:
    json.dump(business_news.json(), f, ensure_ascii=False, indent=4)

with open(location + "/" + wallStreet_filename, "w+", encoding='utf-8') as f:
    json.dump(wallStreet_news.json(), f, ensure_ascii=False, indent=4)

with open(location + "/" + apple_filename, "w+", encoding='utf-8') as f:
    json.dump(apple_news.json(), f, ensure_ascii=False, indent=4)

'''
def hello(name):
    print("Hello " + name )

print("starting...")
#rt = rt.RepeatedTimer(1, hello, "World")  # it auto-starts, no need of rt.start()
#try:
#    sleep(5)  # your long-running job goes here...
#finally:
#    rt.stop()  # better in a try/finally block to make sure the program ends!


t = sn.StockNews()
print(t.getJsonDataFromFile())