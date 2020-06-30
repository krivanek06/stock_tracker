import os
import enviroments
from requests import get
from datetime import datetime
from dateutil import relativedelta

class Finhub:
    def __init__(self):
        self.FINHUB_SECRET_KEY = os.environ['FINHUB_SECRET_KEY']

    def getIpoOneMonthCalendar(self):
        today = datetime.today()
        nextmonth = today + relativedelta.relativedelta(months=1)
        params = {'token': self.FINHUB_SECRET_KEY, 'from': today, 'to': nextmonth}
        return get('https://finnhub.io/api/v1/calendar/ipo', params=params).json()

    '''
    def getEarningsForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        return get('https://finnhub.io/api/v1/stock/earnings', params=params)
    '''

    def getEarningsCalendarForOneWeeks(self):
        today = datetime.today()
        nextTwoWeeks = today + relativedelta.relativedelta(weeks=1)

        today = today.strftime('%Y-%m-%d')
        nextTwoWeeks = nextTwoWeeks.strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'to': nextTwoWeeks, 'from': today}
        return get('https://finnhub.io/api/v1/calendar/earnings', params=params).json()


    def getRecomendationForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        return get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:10]

    def getNewsForSymbol(self, symbol):
        today = datetime.today()
        lastWeek = today - relativedelta.relativedelta(weeks=1)

        today = today.strftime('%Y-%m-%d')
        lastWeek = lastWeek.strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'from': lastWeek, 'to': today}
        return get('https://finnhub.io/api/v1/company-news', params=params).json()
