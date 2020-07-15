import os
from private_data import enviroments
from requests import get

class Twelvedata:
    def __init__(self):
        self.TWELVE_DATA_SECRET_KEY = os.environ['TWELVE_DATA_SECRET_KEY']

    def searchSymbol(self, prefix):
        params = {'apikey': self.TWELVE_DATA_SECRET_KEY, 'symbol_search': prefix, 'outputsize': 8}
        return get('https://api.twelvedata.com/symbol_search', params=params).json()


