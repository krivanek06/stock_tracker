from datetime import datetime, timedelta
from os import environ

from dateutil.relativedelta import relativedelta
from dotenv import load_dotenv
from requests import get

load_dotenv()

class FinancialModelingApi:
    def __init__(self):
        self.API_KEY = environ.get('FINANCIAL_MODELING_API_KEY')
        self.url = 'https://financialmodelingprep.com/api'

    def _makeRequest(self, path: str, symbol: str, params: {} = {}, version='v3'):
        data = get(f'https://financialmodelingprep.com/api/{version}/{path}/{symbol}?apikey={self.API_KEY}', params=params)
        return data.json()

    def searchSymbolsByPrefix(self, prefix: str):
        return self._makeRequest('search', '', {'limit': 10, 'query': prefix})

    '''
           API calls for chart data
    '''

    def getHistoricalPrices(self, symbol: str, timeInterval: str):
        if timeInterval not in ['1min', '5min', '15min', '30min', '1h', '4h']:
            return []
        return self._makeRequest(f'historical-chart/{timeInterval}', symbol)

    def getHistoricalDailyPrices(self, symbol: str, timeInterval: str, isLine: bool = False):
        if timeInterval not in ['1y', '5y', 'all']:
            return []
        timeInterval = '100y' if timeInterval == 'all' else timeInterval
        timeInterval = timeInterval[:-1]  # remove 'y'
        end = datetime.today().strftime('%Y-%m-%d')
        start = (datetime.now() - relativedelta(years=int(timeInterval))).strftime('%Y-%m-%d')
        serietype = 'line' if isLine else ''
        return self._makeRequest('historical-price-full', symbol, {'from': start, 'to': end, 'serietype': serietype})

    def getHistoricalAllDailyPricesOnlyLines(self, symbol: str):
        return self._makeRequest('historical-price-full', symbol, {'serietype': 'line'})

    '''
           API calls for market
    '''

    # https://financialmodelingprep.com/developer/docs#Sectors-PE-Ratio
    def getSectorPE(self):
        today = datetime.today().strftime('%Y-%m-%d')
        return self._makeRequest('sector_price_earning_ratio', '', {'date': today, 'exchange': 'NYSE'}, 'v4')

    # https://financialmodelingprep.com/developer/docs#Sectors-PE-Ratio
    def geIndustriesPE(self):
        today = datetime.today().strftime('%Y-%m-%d')
        return self._makeRequest('industry_price_earning_ratio', '', {'date': today, 'exchange': 'NYSE'}, 'v4')

    '''
        API calls for calendar
    '''

    # https://financialmodelingprep.com/developer/docs#Earnings-Calendar
    def getCalendarEarningsLastMonth(self):
        end = datetime.today().replace(day=1) - timedelta(days=1)
        start = datetime.today().replace(day=1) - timedelta(days=end.day)
        return self._makeRequest('earning_calendar', '', {'from': start.strftime('%Y-%m-%d'), 'to': end.strftime('%Y-%m-%d')})

    # https://financialmodelingprep.com/developer/docs#IPO-Calendar
    def getCalendarIPOLastMonth(self):
        end = datetime.today().replace(day=1) - timedelta(days=1)
        start = datetime.today().replace(day=1) - timedelta(days=end.day)
        return self._makeRequest('ipo_calendar', '', {'from': start.strftime('%Y-%m-%d'), 'to': end.strftime('%Y-%m-%d')})

    # https://financialmodelingprep.com/developer/docs#Stock-News
    def getStockNews(self, symbols: [] = []):
        params = {'limit': 50, 'tickers': ','.join(symbols)} if len(symbols) > 0 else {'limit': 50}
        return self._makeRequest('stock_news', '', params)

    '''
        API calls for indexes
    '''

    # https://financialmodelingprep.com/developer/docs#List-of-S&P-500-companies
    def getSp500Companies(self):
        return self._makeRequest('sp500_constituent', '', {})

    # https://financialmodelingprep.com/developer/docs#List-of-Nasdaq-100-companies
    def getNasdaqCompanies(self):
        return self._makeRequest('nasdaq_constituent', '', {})

    # https://financialmodelingprep.com/developer/docs#Historical-Dow-Jones
    def getDowJonesCompanies(self):
        return self._makeRequest('dowjones_constituent', '', {})

    '''
        API calls for stock info
    '''

    def getSectorPeers(self, symbol):
        return self._makeRequest('stock_peers', '', {'symbol': symbol}, 'v4')

    def getMutualFundHolders(self, symbol):
        return self._makeRequest('mutual-fund-holder', symbol)

    # https://financialmodelingprep.com/developer/docs#Institutional-Holders
    def getInstitutionalHolders(self, symbol):
        return self._makeRequest('institutional-holder', symbol)

    # https://financialmodelingprep.com/developer/docs#Company-Outlook
    def getCompanyOutlook(self, symbol):
        return self._makeRequest('company-outlook', '', {'symbol': symbol}, 'v4')

    # https://financialmodelingprep.com/developer/docs#Stock-Insider-Trading
    def getInsiderTrading(self, symbol):
        return self._makeRequest('insider-trading', symbol, {'limit': 40}, 'v4')

    # https://financialmodelingprep.com/developer/docs#Company-Quote
    def getCompanyQuote(self, symbol):
        return self._makeRequest('quote', symbol)

    # https://financialmodelingprep.com/developer/docs#Company-Quote
    def getCompanyQuoteBatch(self, symbols: [str] = []):
        if not symbols:
            return []
        quotes = self._makeRequest('quote', ','.join(symbols))
        for quote in quotes:
            quote['image'] = f'https://financialmodelingprep.com/image-stock/{quote["symbol"]}.png'
        return quotes

    # https://financialmodelingprep.com/developer/docs#Key-Executives
    def getKeyExecutives(self, symbol):
        return self._makeRequest('key-executives', symbol)

    # https://financialmodelingprep.com/developer/docs#Company-Financial-Statements
    def getIncomeStatement(self, symbol, quarterly: bool):
        period = 'quarter' if quarterly else 'year'
        return self._makeRequest('income-statement', symbol, {'period': period, 'limit': 400})

    def getBalanceSheet(self, symbol, quarterly: bool):
        period = 'quarter' if quarterly else 'year'
        return self._makeRequest('balance-sheet-statement', symbol, {'period': period, 'limit': 400})
    
    def getAnalystEstimates(self, symbol): 
        return self._makeRequest('analyst-estimates', symbol, {'limit': 3})
    
    def getSocialSentiment(self, symbol): 
        sentimenArr = self._makeRequest('social-sentiment', '',  {'limit': 100, 'symbol': symbol},  'v4')
        if len(sentimenArr) == 0:
            return [] 
        
        result = {
            'date': sentimenArr[0].get('date', None),
            'symbol': sentimenArr[0].get('symbol', None)
        }
        # reduce arrays into mean value
        for key in sentimenArr[0].keys():
            if key in ['date', 'symbol']:
                continue
            result[key] = sum([data[key] if data[key] is not None else 0 for data in sentimenArr]) / 100
        return result


    def getCashFlow(self, symbol, quarterly: bool):
        period = 'quarter' if quarterly else 'year'
        return self._makeRequest('cash-flow-statement', symbol, {'period': period, 'limit': 400})

    # https://financialmodelingprep.com/developer/docs#Company-Financial-Statements
    def getCompanyFinancialRatios(self, symbol, multiple: bool = False):
        params = {'limit': 40, 'period': 'quarter'} if multiple else {}
        return self._makeRequest('ratios', symbol, params)

    # https://financialmodelingprep.com/developer/docs#Company-Enterprise-Value
    def getEnterpriseValues(self, symbol):
        return self._makeRequest('enterprise-values', symbol, {'period': 'quarter', 'limit': 100})

    # https://financialmodelingprep.com/developer/docs#Company-Key-Metrics
    def getCompanyKeyMetrics(self, symbol, quarterly: bool = False, multiple: bool = False):
        period = 'quarter' if quarterly else 'year'
        params = {'limit': 40, 'period': period} if multiple else {}
        return self._makeRequest('key-metrics', symbol, params)

    # https://financialmodelingprep.com/developer/docs#Earnings-Surprises
    def getEarningsSurprises(self, symbol):
        return self._makeRequest('earnings-surprises', symbol)
