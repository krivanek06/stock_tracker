import os
from private_data import enviroments
from requests import get
from datetime import datetime
from dateutil import relativedelta

class Finhub:
    def __init__(self):
        self.FINHUB_SECRET_KEY = os.environ['FINHUB_SECRET_KEY']

    '''
    def getIpoOneMonthCalendar(self):
        today = datetime.today()
        nextmonth = today + relativedelta.relativedelta(months=1)
        params = {'token': self.FINHUB_SECRET_KEY, 'from': today, 'to': nextmonth}
        return get('https://finnhub.io/api/v1/calendar/ipo', params=params).json()
    '''


    def getEarningsCalendarForOneWeeks(self):
        today = datetime.today()
        nextTwoWeeks = today + relativedelta.relativedelta(weeks=1)

        today = today.strftime('%Y-%m-%d')
        nextTwoWeeks = nextTwoWeeks.strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'to': nextTwoWeeks, 'from': today}
        req =  get('https://finnhub.io/api/v1/calendar/earnings', params=params).json()
        res = []
        for earnigns in req['earningsCalendar']:
            res.append({
                 'date': datetime.strptime(earnigns['date'], '%Y-%m-%d').strftime('%d.%m.%y'),
                 'symbol': earnigns['symbol']
                }
            )
        return res

    def getRecomendationForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        recommendation = get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:8]
        return {'recommendation': recommendation}

    def getNewsForSymbol(self, symbol):
        today = datetime.today()
        lastWeek = today - relativedelta.relativedelta(weeks=1)

        today = today.strftime('%Y-%m-%d')
        lastWeek = lastWeek.strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'from': lastWeek, 'to': today}
        return {'stockNews': get('https://finnhub.io/api/v1/company-news', params=params).json()}
