from datetime import datetime

import yfinance as yf

from Services.FileManagerService import FileManagerService
from ExternalAPI.AlphaVantageApi import AlphaVantageApi
from ExternalAPI.utils import getIntervalFromPeriod, getPastDatetimeFromPeriod
from Services.technicalIndicators.TechnicalIndicatorCalculator import TechnicalIndicatorCalculator


class TechnicalIndicatorsService(TechnicalIndicatorCalculator):
    def __init__(self):
        super().__init__()
        self.alphaVantageApi = AlphaVantageApi()
        self.fileName = 'technical_indicators.json'
        self.localIndicators = ['RSI', 'MACD', 'SMA', 'EMA']

    def getIndicators(self):
        return FileManagerService().getJsonFile(self.fileName)

    '''
        period - 1d, 5d, 1mo, 6mo, 1y, 5y
        data_aggregation - number of cycles to perform calculation
    '''

    def getDataForIndicator(self, symbol: str, indicator: str, period: str, data_aggregation: int):
        data_aggregation = 14 if data_aggregation is None else int(data_aggregation)
        indicator = indicator.upper()
        interval = getIntervalFromPeriod(period)
        end = datetime.now()
        start = getPastDatetimeFromPeriod(period)

        if indicator in self.localIndicators:
            series = self._makeLocalCalculation(symbol, indicator, period, interval[0], data_aggregation)
        else:
            series = self.alphaVantageApi.getData(symbol, indicator, interval[1], data_aggregation, start)

        return {
            'series': series,
            'start': start,
            'end': end,
            'indicator': indicator,
            'interval': interval[1],
            'data_aggregation': data_aggregation
        }

    def _makeLocalCalculation(self, symbol: str, indicator: str, period: str, interval: str, data_aggregation: int = 14):
        data = yf.download(tickers=symbol, period=period, interval=interval, auto_adjust=True)

        series = []
        if indicator == 'RSI':
            series = [{'name': 'Relative strength index (RSI)', 'data': self._RSI(data, data_aggregation)}]
        elif indicator == 'EMA':
            series = [{'name': 'Exponential moving average (EMA)', 'data': self._EMA(data, data_aggregation)}]
        elif indicator == 'SMA':
            series = [{'name': 'Simple moving average (SMA)', 'data': self._SMA(data, data_aggregation)}]  #
        elif indicator == 'MACD':
            MACD, signalLine = self._MACD(data)
            series = [{'name': 'Moving avg. conver./diver. (MACD) - MACD', 'data': MACD},
                      {'name': 'Moving avg. conver./diver. (MACD) - Signal line', 'data': signalLine}]

        # change Nan values
        series = [{'name': s['name'], 'data': self._changeNanToNone(round(s['data'], 2))} for s in series]

        result = {
            'series': series,
            'timestamp': []  # miliseconds
        }
        return result
