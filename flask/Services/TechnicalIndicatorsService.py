from datetime import datetime
from pandas_datareader import DataReader
from pandas import DataFrame, notnull
import yfinance as yf

from Services.FileManagerService import FileManagerService
from ExternalAPI.AlphaVantageApi import AlphaVantageApi
from ExternalAPI.utils import getIntervalFromPeriod, getPastDatetimeFromPeriod

'''
    source:
        - EMA, SMA, MACF, RSI - https://www.youtube.com/watch?v=fJ3CfEwr39k&t=728s

'''


class TechnicalIndicatorsService:
    def __init__(self):
        self.alphaVantageApi = AlphaVantageApi()
        self.indicatorsFileName = 'alpha_vantage_technical_indicators.json'
        self.localIndicators = ['RSI', 'MACD', 'SMA', 'EMA']

    def getIndicators(self):
        return FileManagerService().getJsonFile(self.indicatorsFileName)

    '''
        period - 1d, 5d, 1mo, 6mo, 1y, 5y
        data_aggregation - number of days to perform calculation
    '''

    def getData(self, symbol: str, indicator: str, period: str, data_aggregation):
        data_aggregation = 14 if data_aggregation is None else int(data_aggregation)
        indicator = indicator.upper()
        interval = getIntervalFromPeriod(period)
        end = datetime.now()
        start = getPastDatetimeFromPeriod(period)

        if indicator in self.localIndicators:
            series = self._makeLocalCalculation(symbol, indicator, period, interval[0], data_aggregation)
        else:
            series = self.alphaVantageApi.getData(symbol, indicator, interval[1], data_aggregation, start)

        return {'series': series, 'start': start, 'end': end, 'indicator': indicator, 'interval': interval[1],
                'data_aggregation': data_aggregation}

    def _makeLocalCalculation(self, symbol: str, indicator: str, period, interval: str, data_aggregation: int = 14):
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

    def _changeNanToNone(self, df: DataFrame):
        return df.where(notnull(df), None)

    def _SMA(self, data: DataReader, period: int, column: str = 'Close') -> [int]:
        return data[column].rolling(window=period).mean()

    def _EMA(self, data: DataReader, period: int, column: str = 'Close') -> [int]:
        return data[column].ewm(span=period, adjust=False).mean()

    def _MACD(self, data: DataReader, column: str = 'Close') -> ([int], [int]):
        period_long = 26
        period_short = 12
        period_signal = 9

        shortEma = self._EMA(data, period_short, column)
        longEma = self._EMA(data, period_long, column)

        data['MACD'] = shortEma - longEma
        signalLine = self._EMA(data, period_signal, 'MACD')

        return data['MACD'], signalLine

    def _RSI(self, data: DataReader, period: int) -> [int]:
        delta = data['Close'].diff(1)
        delta = delta[1:]

        up = delta.copy()
        down = delta.copy()
        up[up < 0] = 0
        down[down > 0] = 0
        data['up'] = up
        data['down'] = down

        avg_gain = self._SMA(data, period, 'up')
        avg_loss = abs(self._SMA(data, period, 'down'))

        relative_strength = avg_gain / avg_loss
        RSI = 100.0 - (100.0 / (1.0 + relative_strength))
        return RSI
