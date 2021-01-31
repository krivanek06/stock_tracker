from datetime import datetime
from private_data import enviroments
from dateutil.relativedelta import relativedelta
from firebase_admin import credentials, firestore, initialize_app, _apps as firestoreApps
from requests import get

from Services import FileManagerService


class Finhub:
    def __init__(self):
        self.FINHUB_SECRET_KEY = enviroments.FINHUB_SECRET_KEY
        self.__FOLDER = 'resource/other'
        self.SEARCH_US_EXCHANGE_FOLDER = 'us_exchange.json'

        self.fileManagerService = FileManagerService.FileManagerService()

        if not firestoreApps:
            cred = credentials.Certificate('private_data/firebase_key.json')
            default_app = initialize_app(cred)
        self.db = firestore.client()

    def getIpoOneMonthCalendar(self):
        today = datetime.today()
        nextmonth = today + relativedelta(months=1)
        params = {'token': self.FINHUB_SECRET_KEY, 'from': today, 'to': nextmonth}
        return get('https://finnhub.io/api/v1/calendar/ipo', params=params).json()

    def searchSymbol(self, symbolPrefix):
        exchangeUSLastModification = self.fileManagerService.getDocumentLastModification(self.SEARCH_US_EXCHANGE_FOLDER)
        exchangeUS = self.fileManagerService.getJsonFile(self.SEARCH_US_EXCHANGE_FOLDER)
        # update once per week
        if exchangeUSLastModification is None or exchangeUSLastModification[0] > 7:
            params = {'token': self.FINHUB_SECRET_KEY, 'exchange': 'US'}
            exchangeUS = get('https://finnhub.io/api/v1/stock/symbol', params=params).json()
            for data in exchangeUS:
                data['displayName'] = '[' + data['symbol'] + ']' + ' ' + data['description']
            self.fileManagerService.saveFile(self.SEARCH_US_EXCHANGE_FOLDER, exchangeUS)

        result = [k for k in exchangeUS if k['symbol'].startswith(symbolPrefix)][0:6]

        return result

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

    # TODO contains more data
    # TODO - add yearToDatePriceReturnDaily to summary
    def getStockMetrics(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        r = get('https://finnhub.io/api/v1/stock/metric', params=params).json()['metric']
        return {'metric': r}

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
