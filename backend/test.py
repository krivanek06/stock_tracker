

import datetime
import yfinance as yf
import requests
from datetime import date, timedelta
from yahoo_fin import stock_info as si
import data_modification as data_modification
import stock_news as sn
import math

print('*********************') # ^DJI , ^GSPC


symbol = 'ONGC'
#balanceSheet = si.get_balance_sheet(symbol)


stocks = ['^GSPC', '^DJI']


print("starting...")

#print(si.get_top_crypto())
chart_data = yf.download(tickers='BTC-USD', period='1d', interval="1mo")
d = si.get_top_crypto()[0:1]
print(d.keys())
print(chart_data.keys())

chart_data = yf.download(tickers='UBER', period='1d', interval="1mo")
print(chart_data.keys())
#print(chart_data)
#topGainers = si.get_day_gainers()[0:10]
#topGainers['volume_change'] = data_modification.getPercentigeChangeInVolume(topGainers)
#data_modification.removeKeys(topGainers, ['Change', 'Market Cap', 'Avg Vol (3 month)', 'Volume'])

#print(topGainers)