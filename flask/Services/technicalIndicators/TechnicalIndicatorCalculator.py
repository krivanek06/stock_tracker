from pandas_datareader import DataReader
from pandas import DataFrame, notnull

'''
    source:
        - EMA, SMA, MACF, RSI - https://www.youtube.com/watch?v=fJ3CfEwr39k&t=728s

'''


class TechnicalIndicatorCalculator:
    def __init__(self):
        pass

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
