from requests import get
from datetime import datetime
from calendar import timegm

from Utils.characterModificationUtil import force_float
import environments_keys


class AlphaVantageApi:
    def __init__(self):
        self.API_KEY = environments_keys.ALPHA_VANTAGE
        self.url = 'https://www.alphavantage.co/query'

    def getData(self, symbol: str, indicator: str, interval: str, period: int = 14, start: datetime = None):
        data = self._loadData(symbol, indicator, interval, period)
        result = self._parseData(data, indicator, interval)

        if start is not None:  # fetching more data than needed for 'start', delete older data
            result = self._deleteOlderData(result, start)
        return result

    def _loadData(self, symbol: str, indicator: str, interval: str, period: int):
        url = f'{self.url}?function={indicator}&symbol={symbol}&interval={interval}&time_period={period}&series_type=closed&apikey={self.API_KEY}'
        data = get(url).json()
        return data

    def _parseData(self, jsonData, indicator: str, interval: str):
        dataItems = list(jsonData[f'Technical Analysis: {indicator}'].items())[::-1]  # ('2021-04-20', {'MACD_Signal': '4.7382', ... })
        timestampFormat = "%Y-%m-%d" if interval in ['weekly', 'daily'] else "%Y-%m-%d %H:%M"

        result = {
            'series': [{
                'name': firstLineKey,
                'data': [force_float(dataItem[1][firstLineKey]) for dataItem in dataItems]
            } for firstLineKey in dataItems[0][1]],
            'timestamp': [timegm(datetime.strptime(dataItem[0], timestampFormat).utctimetuple()) * 1000 for dataItem in dataItems]  # miliseconds
        }
        return result

    def _deleteOlderData(self, result, start: datetime):
        oldestLimit = start.timestamp() * 1000
        limitIndex = [i for i, timestamp in enumerate(result['timestamp']) if timestamp >= oldestLimit][0]

        result = {
            'series': [{
                'name': s['name'],
                'data': s['data'][limitIndex:]
            } for s in result['series']],
            'timestamp': result['timestamp'][limitIndex:]
        }
        return result
