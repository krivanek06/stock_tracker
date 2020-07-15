import os
from private_data import enviroments
from requests import get

# how to send only once reuest / hour for top gainers / loosers , etc. ?
'''
class FinancialModelling:
    def __init__(self):
        self.FINANCIAL_MODELING_SECRET_KEY = os.environ['FINANCIAL_MODELING_SECRET_KEY']

    def getMostGainer(self):
        params = {'apikey': self.FINANCIAL_MODELING_SECRET_KEY}
        return get('https://financialmodelingprep.com/api/v3/stock/gainers', params=params)

    def getMostLosers(self):
        params = {'apikey': self.FINANCIAL_MODELING_SECRET_KEY}
        return get('https://financialmodelingprep.com/api/v3/stock/losers', params=params)

    def getMostActive(self):
        params = {'apikey': self.FINANCIAL_MODELING_SECRET_KEY}
        return get('https://financialmodelingprep.com/api/v3/stock/actives', params=params)

    def getFollowingTwoWeeksEarningsCalendar(self):
        params = {'apikey': self.FINANCIAL_MODELING_SECRET_KEY}
        return get('https://financialmodelingprep.com/api/v3/earning_calendar', params=params )

    def searchSymbol(self, prefix):
        params = {'apikey': self.FINANCIAL_MODELING_SECRET_KEY, 'query': prefix, 'limit': 6}
        return get('https://financialmodelingprep.com/api/v3/search-ticker', params=params )
'''