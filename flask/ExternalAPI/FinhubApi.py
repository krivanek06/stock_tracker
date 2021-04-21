from datetime import datetime
import environments_keys
from dateutil.relativedelta import relativedelta
from requests import get


class FinhubApi:
    def __init__(self):
        self.FINHUB_SECRET_KEY = environments_keys.FINHUB_SECRET_KEY

    def getIpoOneMonthCalendar(self):
        today = datetime.today()
        nextmonth = today + relativedelta(months=1)
        params = {'token': self.FINHUB_SECRET_KEY, 'from': today, 'to': nextmonth}
        return get('https://finnhub.io/api/v1/calendar/ipo', params=params).json()

    def searchSymbol(self, symbolPrefix):
        params = {'token': self.FINHUB_SECRET_KEY, 'exchange': 'US'}
        exchangeUS = get('https://finnhub.io/api/v1/stock/symbol', params=params).json()
        return [k for k in exchangeUS if k['symbol'].startswith(symbolPrefix)][0:6]

    def searchAllSymbols(self):
        params = {'token': self.FINHUB_SECRET_KEY, 'exchange': 'US'}
        exchangeUS = get('https://finnhub.io/api/v1/stock/symbol', params=params).json()
        result = []
        for data in exchangeUS:
            data['displayName'] = '[' + data['symbol'] + ']' + ' ' + data['description']
            if data['type'] == 'Common Stock':
                result.append(data['symbol'])
        return result

    def getStockYearlyFinancialReport(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'freq': 'quarterly'}
        quarter = get('https://finnhub.io/api/v1/stock/financials-reported', params=params).json()['data'][0:4]

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'freq': 'annual'}
        year = get('https://finnhub.io/api/v1/stock/financials-reported', params=params).json()['data'][0:4]

        return {'financialReportsQuarterly': quarter, 'financialReportsYearly': year}

    def getStockMetrics(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        data = get('https://finnhub.io/api/v1/stock/metric', params=params).json()
        metric = data['series'].get('annual') if data.get('series') is not None else None
        return {'metric': data.get('metric'), 'historicalMetrics': metric}

    def getRecomendationForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        recommendation = get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:8]
        return {'recommendation': recommendation}

    def getNewsForSymbol(self, symbol):
        today = datetime.today().strftime('%Y-%m-%d')
        lastWeek = (datetime.today() - relativedelta(weeks=1)).strftime('%Y-%m-%d')

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'from': lastWeek, 'to': today}
        newsArray = get('https://finnhub.io/api/v1/company-news', params=params).json()
        result = []
        for article in newsArray:
            # I want articles with images
            if not article['image']:
                continue
            if 'www' in article['source']:
                article['sourceName'] = article['source'].split('.')[1].capitalize()  # if https://www.axb.com
            elif 'https' in article['source']:
                article['sourceName'] = article['source'].split('.')[0][8:].capitalize()  # if https://axb.com
            else:
                article['sourceName'] = article['source'].capitalize()
            article['sourceName'] = article['sourceName'].replace('.com', '')

            result.append(article)
            if len(result) > 8:
                break

        return {'stockNews': result}
