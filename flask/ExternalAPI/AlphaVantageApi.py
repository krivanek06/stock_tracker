from requests import get
from datetime import datetime
from calendar import timegm

from Services.FileManagerService import FileManagerService
from ExternalAPI.utils import force_float
import environments_keys


class AlphaVantageApi:
    def __init__(self):
        self.API_KEY = environments_keys.ALPHA_VANTAGE
        self.indicatorsFileName = 'alpha_vantage_technical_indicators.json'
        self.url = 'https://www.alphavantage.co/query'

    def getIndicators(self):
        return FileManagerService().getJsonFile(self.indicatorsFileName)

    def getData(self, symbol, indicator, interval):
        data = self._loadData(symbol, indicator, interval)
        result = self.parseData(data, indicator)
        return result

    def _loadData(self, symbol, indicator, interval):
        #file = FileManagerService()
        #data = file.getJsonFile(indicator)
        #if data is None:
        url = f'{self.url}?function={indicator}&symbol={symbol}&interval={interval}&time_period=14&series_type=closed&apikey={self.API_KEY}'
        data = get(url).json()
        #    file.saveFile(indicator, data)
        return data

    def parseData(self, jsonData, indicator):
        dataItems = list(jsonData[f'Technical Analysis: {indicator}'].items())[::-1]  # ('2021-04-20', {'MACD_Signal': '4.7382', 'MACD_Hist': '-0.5264'})

        result = {
            'series': [{
                'name': firstLineKey,
                'data': [force_float(dataItem[1][firstLineKey]) for dataItem in dataItems]
            } for firstLineKey in dataItems[0][1]],
            'timestamp': [timegm(datetime.strptime(dataItem[0], "%Y-%m-%d").utctimetuple()) * 1000 for dataItem in dataItems]  # miliseconds
        }
        return result
