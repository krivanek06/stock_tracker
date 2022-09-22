from os import environ

from dotenv import load_dotenv
from requests import get

load_dotenv()

class FinhubApi:
    def __init__(self):
        self.FINHUB_SECRET_KEY = environ.get('FINHUB_SECRET_KEY')


    def getRecomendationForSymbol(self, symbol):
        try:
            params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
            recommendation = get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:8]
            return  recommendation
        except Exception as e: 
            print(e)
            return []
