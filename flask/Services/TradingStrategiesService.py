import yfinance as yf
from datetime import datetime
from pandas import DataFrame, Grouper
from Utils.characterModificationUtil import force_round
from Services.technicalIndicators.TechnicalIndicatorCalculator import TechnicalIndicatorCalculator
from Services.FileManagerService import FileManagerService
from Utils.ThreadUtil import synchronized

from enum import Enum

# TODO delete later
'''
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.ticker as mticker
'''


class TradingStrategiesEnum(Enum):
    RED_WHITE_BLUE = 'RED_WHITE_BLUE'
    GREEN_LINE_BREAKOUT = 'GREEN_LINE_BREAKOUT'
    RESISTANCE_PIVOT_POINTS = 'RESISTANCE_PIVOT_POINTS'
    EXTENDED_MARKER_VERIFICATION = 'EXTENDED_MARKER_VERIFICATION'
    RISK_MANAGEMENT_CALCULATOR = 'RISK_MANAGEMENT_CALCULATOR'


class TradingStrategiesService(TechnicalIndicatorCalculator):
    def __init__(self):
        super().__init__()
        self.fileName = 'trading_strategies.json'

    def getStrategies(self):
        return FileManagerService().getJsonFile(self.fileName)

    def getDataForStrategy(self, symbol: str, strategy: str):
        series, period, interval = self._makeLocalCalculation(symbol, strategy)
        return {**series, 'period': period, 'interval': interval, 'strategy': strategy}

    @synchronized
    def _downloadData(self, symbol: str, period: str, interval: str) -> DataFrame:
        data = yf.download(tickers=symbol, period=period, interval=interval, auto_adjust=True)
        data.drop(data[data["Volume"] < 1000].index, inplace=True)  # dropping data before IPO
        data = self._changeNanToNone(data)  # replace NaN with null

        return data

    def _makeLocalCalculation(self, symbol: str, strategy: str):
        series, timestamp = [], []
        period, interval = None, None

        if strategy == TradingStrategiesEnum.RED_WHITE_BLUE.value:
            period, interval = '5y', '1d'
            data = self._downloadData(symbol, period, interval)
            series, timestamp = self._redWhiteBlue(data)
        elif strategy == TradingStrategiesEnum.RESISTANCE_PIVOT_POINTS.value:
            period, interval = '5y', '1d'
            data = self._downloadData(symbol, period, interval)
            series, timestamp = self._resistancePivotPoints(data)
        elif strategy == TradingStrategiesEnum.GREEN_LINE_BREAKOUT.value:
            period, interval = '5y', '1wk'
            data = self._downloadData(symbol, period, interval)
            series, timestamp = self._greenLineBreakout(data)
        elif strategy == TradingStrategiesEnum.EXTENDED_MARKER_VERIFICATION.value:
            period, interval = 'max', '1d'
            data = self._downloadData(symbol, period, interval)
            series, timestamp = self._extendedMarketVerification(data)
            # remove None values
            noneValues = len([x for x in series[0]['data'] if x is None])
            series[0]['data'] = series[0]['data'][noneValues:]
            timestamp = timestamp[noneValues:]
        elif strategy == TradingStrategiesEnum.RISK_MANAGEMENT_CALCULATOR.value:
            period, interval = '1y', '1d'
            data = self._downloadData(symbol, period, interval)
            series, timestamp = self._riskManagementCalculator(data)

        result = {
            'series': [{
                'name': s['name'],
                'data': [round(elem, 2) if isinstance(elem, float) else None for elem in s['data']]
            } for s in series],
            'timestamp': [t.timestamp() * 1000 for t in timestamp]  # miliseconds
        }
        return result, period, interval

    '''
        source > https://www.youtube.com/watch?v=Oq4BBZvuyec&list=PLPfme2mwsQ1FQhH1icKEfiYdLSUHE-Wo5&index=9
    '''

    def _riskManagementCalculator(self, data: DataFrame):
        AvgGain = 0.15  # Enter Your Average Gain %
        AvgLoss = 0.05  # Enter Your Average Loss %
        smaUsed = [50, 200]
        emaUsed = [21]

        close = data["Close"][-1]
        maxStop = close * (1 - AvgLoss)
        Target1R = round(close * (1 + AvgGain), 2)
        Target2R = round(close * (1 + (2 * AvgGain)), 2)
        Target3R = round(close * (1 + (3 * AvgGain)), 2)

        for sma in smaUsed:
            data[f'SMA_{sma}'] = self._SMA(data, sma)

        for ema in emaUsed:
            data[f'EMA_{ema}'] = self._EMA(data, ema)

        sma50 = force_round(data["SMA_50"][-1], 2)
        sma200 = force_round(data["SMA_200"][-1], 2)
        ema21 = force_round(data["EMA_21"][-1], 2)
        low5 = force_round(min(filter(lambda low: low is not None, data["Low"].tail(5))), 2)  # low may be None, filter out

        pf50 = round(((close / sma50) - 1) * 100, 2) if sma50 is not None else None
        pf200 = round(((close / sma200) - 1) * 100, 2) if sma200 is not None else None
        pf21 = round(((close / ema21) - 1) * 100, 2) if ema21 is not None else None
        pfl = round(((close / low5) - 1) * 100, 2) if low5 is not None else None

        '''
        print()
        print(" Price: " + str(round(close, 2)))
        print("21 EMA: " + str(ema21) + " | 50 SMA: " + str(sma50) + " | 200 SMA: " + str(sma200) + " | 5 day Low: " + str(low5))
        print("-------------------------------------------------")
        print("Max Stop: " + str(round(maxStop, 2)))
        print("Price Targets:")
        print("1R: " + str(Target1R))
        print("2R: " + str(Target2R))
        print("3R: " + str(Target3R))
        print("From 5 Day Low " + str(pfl) + "% -Within Max Stop: " + str(low5 > maxStop))
        print("From 21 day EMA " + str(pf21) + "% -Within Max Stop: " + str(data["EMA_21"][-1] > maxStop))
        print("From 50 day SMA " + str(pf50) + "% -Within Max Stop: " + str(data["SMA_50"][-1] > maxStop))
        print("From 200 Day SMA " + str(pf200) + "% - (Over 100% from 200 SMA): " + str(((close / data["SMA_200"][-1]) - 1) * 100 > 100))
        '''
        return [
                   {'name': 'Close', 'data': [close]},
                   {'name': 'Average loss', 'data': [AvgLoss]},
                   {'name': 'Low (5 days)', 'data': [low5]},
                   {'name': 'EMA (21 days)', 'data': [ema21]},
                   {'name': 'SMA (50 days)', 'data': [sma50]},
                   {'name': 'SMA (200 days)', 'data': [sma200]},
               ], []

    '''
        source > https://www.youtube.com/watch?v=iWN73tz07y0&list=PLPfme2mwsQ1FQhH1icKEfiYdLSUHE-Wo5&index=8
        description > 
            blue chart - historical % change from SMA
            chart - histogram, how far are we from moving average
        additional into >
            - do not forget to plot > mean, current for blue graph
    '''

    def _extendedMarketVerification(self, data: DataFrame):
        sma = 50
        data['SMA_50'] = super()._SMA(data, sma)
        data['PC'] = ((data["Close"] / data['SMA_50']) - 1) * 100
        '''
        mean = data["PC"].mean()
        stdev = data["PC"].std()
        current = data["PC"][-1]
        yday = data["PC"][-2]

        print('Current: ' + str(current))
        print("Mean: " + str(mean))

        fig, ax1 = plt.subplots()  # Create Plots
        bins = np.arange(-100, 100, 1)  # fixed bin size

        plt.xlim([data["PC"].min() - 5, data["PC"].max() + 5])

        plt.hist(data["PC"], bins=bins, alpha=0.85)  # plotting blue data
        plt.title('stock' + "-- % From " + str(sma) + " SMA Histogram since 1920")
        plt.xlabel('Percent from ' + str(sma) + ' SMA (bin size = 1)')
        plt.ylabel('Count')

        plt.axvline(x=mean, ymin=0, ymax=1, color='k', linestyle='--')
        plt.axvline(x=stdev + mean, ymin=0, ymax=1, color='gray', alpha=1, linestyle='--')
        plt.axvline(x=2 * stdev + mean, ymin=0, ymax=1, color='gray', alpha=.75, linestyle='--')
        plt.axvline(x=3 * stdev + mean, ymin=0, ymax=1, color='gray', alpha=.5, linestyle='--')
        plt.axvline(x=-stdev + mean, ymin=0, ymax=1, color='gray', alpha=1, linestyle='--')
        plt.axvline(x=-2 * stdev + mean, ymin=0, ymax=1, color='gray', alpha=.75, linestyle='--')
        plt.axvline(x=-3 * stdev + mean, ymin=0, ymax=1, color='gray', alpha=.5, linestyle='--')

        plt.axvline(x=current, ymin=0, ymax=1, color='r')
        plt.axvline(x=yday, ymin=0, ymax=1, color='blue')

        ax1.xaxis.set_major_locator(mticker.MaxNLocator(14))  # add more x axis labels

        print(data)

        fig2, ax2 = plt.subplots()  # Create Plots

        data['PC'].plot(label='close', color='k')  # plotting
        plt.title('AAPL' + "-- % From " + str(sma) + " Over last 100 days")
        plt.xlabel('Date')
        plt.ylabel('Percent from ' + str(sma) + ' EMA')
        ax2.xaxis.set_major_locator(mticker.MaxNLocator(8))  # add more x axis labels
        plt.axhline(y=10, xmin=0, xmax=1, color='r')

        plt.show()
        '''
        data = self._changeNanToNone(data)  # replace NaN with null
        return [{'name': 'Market verification', 'data': data['PC']}], data.index

    '''
        source > https://www.youtube.com/watch?v=Gdpaita5GcE&list=PLPfme2mwsQ1FQhH1icKEfiYdLSUHE-Wo5&index=6
        decsription > local maximum of 10 days
    '''

    def _resistancePivotPoints(self, data: DataFrame):
        pivots = []
        timestamps = []
        counter = 0

        Range = [0.0] * 10
        dateRange = [0] * 10

        for date in data.index:
            currentMax = max(Range, default=0)
            value = data['High'][date]  # sometimes may be object

            if not isinstance(value, float):
                continue

            Range = Range[1:] + [value]
            dateRange = dateRange[1:] + [date]

            counter = counter + 1 if currentMax == max(Range, default=0) else 0

            if counter == 5:
                pivots.append(currentMax)
                timestamps.append(dateRange[Range.index(currentMax)])
        return [{'name': 'Resistance pivots', 'data': pivots}], timestamps

    '''
            source > https://www.youtube.com/watch?v=m90HHpbHzlw&list=PLPfme2mwsQ1FQhH1icKEfiYdLSUHE-Wo5&index=5
            decsription > points of all time high resistance which was not reached for 3months +
            return > array of numbers which represents resistance
    '''

    def _greenLineBreakout(self, data: DataFrame):
        dfmonth = data.groupby(Grouper(freq="M"))["High"].max()
        lastGLV = 0
        currentDate = ""
        curentGLV = 0
        counter = 0
        now = datetime.now()
        greenLineValues = []
        greenLineValueTimestamps = []

        for index, value in dfmonth.items():
            if value > curentGLV:
                curentGLV = value
                currentDate = index
                counter = 0
            if value < curentGLV:
                counter = counter + 1

                if counter == 3 and ((index.month != now.month) or (index.year != now.year)):
                    if curentGLV != lastGLV:
                        greenLineValues.append(curentGLV)
                        greenLineValueTimestamps.append(currentDate)
                    lastGLV = curentGLV
                    counter = 0

        return [{'name': 'Green line breakout', 'data': greenLineValues}], greenLineValueTimestamps

    '''
        source > https://www.youtube.com/watch?v=eYK2SNygAog&list=PLPfme2mwsQ1FQhH1icKEfiYdLSUHE-Wo5&index=2
        decsription > comparing long term EMA's and short term EMS's
        return > 2D array with 12 int numbers
    '''

    def _redWhiteBlue(self, data: DataFrame):
        # emasUsed = [3, 5, 8, 10, 12, 15, 30, 35, 40, 45, 50, 60]
        emasUsed = [3, 5, 8, 10, 30, 40, 50, 60]

        result = [{'name': f'EMA_{p}', 'data': self._EMA(data, p)} for p in emasUsed]
        '''
        ax = result[0]['data'].plot()
        for i in range(len(result)):
            result[i]['data'].plot(ax=ax, x='Lat', y='Lon')
        # data['Close'].plot(ax=ax, x='Lat', y='Lon')
        plt.show()
        '''
        return result, data.index
