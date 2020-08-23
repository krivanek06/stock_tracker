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

    def getStockYearlyFinancialReport(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        r = get('https://finnhub.io/api/v1/stock/financials-reported', params=params).json()['data'][0:7]
        return {'financialReports': r}

    def getStockMetrics(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        r = get('https://finnhub.io/api/v1/stock/metric',  params=params).json()['metric']
        return {'metric': r}

    def getRecomendationForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        recommendation = get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:8]
        return {'recommendation': recommendation}

    def getNewsForSymbol(self, symbol):
        today = datetime.today().strftime('%Y-%m-%d')
        lastWeek = (datetime.today() - relativedelta.relativedelta(weeks=1)).strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'from': lastWeek, 'to': today}
        newsArray = get('https://finnhub.io/api/v1/company-news', params=params).json()
        result = []
        for article in newsArray:
            # I want articles with images
            if not article['image']:
                continue
            if 'www' in article['source']:
                article['sourceName'] = article['source'].split('.')[1].capitalize() # if https://www.axb.com
            elif 'https' in article['source']:
                article['sourceName'] = article['source'].split('.')[0][8:].capitalize()  # if https://axb.com
            else:
                article['sourceName'] =  article['source'].capitalize()
            article['sourceName'] = article['sourceName'].replace('.com', '')

            result.append(article)
            if len(result) > 20:
                break

        return {'stockNews': result}
