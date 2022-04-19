#%%
import warnings
from cProfile import label
from datetime import datetime, timedelta
from inspect import trace
from math import sqrt
from turtle import color

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import statsmodels.api as sm
#import statsmodels.api as sm
import yfinance as yf
from pmdarima.arima import auto_arima, ndiffs
from sklearn.metrics import mean_absolute_error, mean_squared_error
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tools.sm_exceptions import (ConvergenceWarning,
                                             HessianInversionWarning,
                                             ValueWarning)
from statsmodels.tsa.arima.model import ARIMA, ARIMAResultsWrapper
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.stattools import adfuller
from tqdm import tqdm

#in practice do not supress these warnings, they carry important information about the status of your model
warnings.filterwarnings('ignore', category=ValueWarning)
warnings.filterwarnings('ignore', category=HessianInversionWarning)
warnings.filterwarnings('ignore', category=ConvergenceWarning)
plt.rcParams.update({'figure.figsize':(9,7), 'figure.dpi':120})


class TimeSeriesBase:
    def __init__(self, tickerSymbol: str) -> None: 
        self.tickerSymbol = tickerSymbol
        self.model = None
        self.confidence_intervals = None
        self._initProperties()

    
    def _initProperties(self, data = None):
        if data is None:
            df = self._getTicketPrices()
            data = df['Close']

        # prices
        self.forecastedClosedValues = []
        self.closedPrices = data
        breakpoint = int(len(self.closedPrices) * 0.8)
        self.traningData = self.closedPrices[:breakpoint]
        self.predictingData = self.closedPrices[(breakpoint-1):]
        self.figsize = (10, 6)

        # returns
        self.forecastedReturnValues = []
        self.closedReturns = self.closedPrices.pct_change().dropna()[:-1] # last value is 0
        breakpoint = int(len(self.closedReturns) * 0.8)
        self.traningReturn = self.closedReturns[:breakpoint]
        self.predicingReturns = self.closedReturns[(breakpoint-1):]

    
    def adFullerTest(self, useReturns = False) -> bool:
        prices = self.closedReturns if useReturns else self.closedPrices
        #print(self.closedReturns)
        dftest = adfuller(prices, autolag = 'AIC')
        print(f'ADF test for symbol {self.tickerSymbol}, using returns = {useReturns}')
        print("1. ADF : ",dftest[0])
        print("2. P-Value : ", dftest[1]) # if smaller then 0.05 then stationary
        print("3. Num Of Lags : ", dftest[2])
        print("4. Num Of Observations Used For ADF Regression:",      dftest[3])
        print("5. Critical Values :")
        for key, val in dftest[4].items():
            print("\t",key, ": ", val)
        return dftest[1] < 0.05

    # Accuracy metrics
    def forecast_accuracy(self):
        forecast = self.forecastedClosedValues
        actual = self.closedPrices

        mape = round(np.mean(np.abs(forecast - actual)/np.abs(actual)), 4)  # MAPE
        me = round(np.mean(forecast - actual), 4)             # ME
        mae = round(np.mean(np.abs(forecast - actual)), 4)    # MAE
        mpe = round(np.mean((forecast - actual)/actual), 4)   # MPE
        rmse = round(np.mean((forecast - actual)**2)**.5, 4)  # RMSE
        return({'mape':mape, 'me':me, 'mae': mae, 
                'mpe': mpe, 'rmse':rmse })
    
    # --------- PLOTS -----------
    def plotChart(self, data = None, title = '') -> None:
        if data is None:
            data = self.closedPrices
            title = 'Closing prices'

        plt.figure(figsize=self.figsize)
        plt.plot(data)
        plt.title(title)
        plt.show()
    
    def plotRollingMeanAndStandardDeviation(self):
        prices = self.closedPrices
        rolmean = prices.rolling(12).mean()
        rolstd = prices.rolling(12).std()
        
        plt.figure(figsize=self.figsize)
        plt.plot(prices, color='blue', label='Closing price')
        plt.plot(rolmean, color='orange', label='Rolling mean')
        plt.plot(rolstd, color='black', label='Rolling std')
        #plt.legend(title = 'Group')
        handles, labels = plt.gca().get_legend_handles_labels()
        by_label = dict(zip(labels, handles))
        plt.legend(by_label.values(), by_label.keys())
        plt.title('Rolling Mean and Standard deviation')
        plt.show()
    
    def plotAcf(self, useReturns = False):
        prices = self.closedReturns if useReturns else self.closedPrices
        plot_acf(prices)
        plt.show()
    
    def plotPacf(self, useReturns = False):
        prices = self.closedReturns if useReturns else self.closedPrices
        plot_pacf(prices)
        plt.show()
    
    def plotDecomposedSeasonal(self, prices = None): 
        if prices is None:
            prices = self.closedPrices
         # residuals ==> time series after the trend, and seasonal components are removed
        decomp = seasonal_decompose(prices, model='additive', period=1)
        fig = decomp.plot()
        fig.set_size_inches(self.figsize)
    
    def plotForecastedClosedValues(self): 
        # data is in percentage
        index_of_fc = self.predictingData.index
        fc_series = self.forecastedClosedValues 

        if self.confidence_intervals is not None:
            lower_series = pd.Series(self.confidence_intervals[:, 0], index=index_of_fc)
            upper_series = pd.Series(self.confidence_intervals[:, 1], index=index_of_fc)
        else:
            lower_series = upper_series = None
        
        # Plot
        print(f'training data: {len(self.traningData)}')
        print(f'predicting data: {len(self.predictingData)}')
        print(f'predicting data first 8: {[(lambda x : round(x,2))(x) for x in list(self.forecastedClosedValues[:8])]}')
        print(f'actual data first 8: {[(lambda x : round(x,2))(x) for x in list(self.predictingData[:8])]}')
        plt.plot(self.traningData, label='training')
        plt.plot(self.predictingData, label='actual')
        plt.plot(fc_series, label='forecast')
        plt.plot(fc_series, color='darkgreen')
        if lower_series is not None:
            plt.fill_between(lower_series.index, 
                            lower_series, 
                            upper_series, 
                            color='k', alpha=.15)
        plt.title(f'Forecast for: {self.tickerSymbol}, order = (1, 1, 0)')
        plt.xlabel('Time')
        plt.ylabel('Actual stock price')
        plt.legend(loc='upper left', fontsize=8)
        plt.show()
        plt.show()
    def _getTicketPrices(self):
        period1 = int(datetime(2018, 3, 18, 23, 59).timestamp())
        period2 = int(datetime(2022, 3, 18, 23, 59).timestamp())
        interval = '1d'
        query_string = f'https://query1.finance.yahoo.com/v7/finance/download/{tickerSymbol}?period1={period1}&period2={period2}&interval={interval}&events=history&includeAdjustedClose=true'

        df = pd.read_csv(query_string, parse_dates=True)
        df = df.dropna()
        # to avoid error => Only valid with DatetimeIndex, TimedeltaIndex or PeriodIndex, but got an instance of 'Index'
        df['Date'] = pd.to_datetime(df['Date'])
        df.set_index('Date', inplace = True)
        return df 


class ModelArima(TimeSeriesBase):
    def __init__(self, ticketSymbol: str) -> None:
        super().__init__(ticketSymbol)

    def performArima(self, order = None, debug = False, pathToCustomData = None, rememberHistory = False):
        if pathToCustomData is not None:
            df = pd.read_csv(pathToCustomData, names=['value'], header=0)
            self._initProperties(df)
        
        if order is not None:
            self.__performArimaWithCustomOrder(order, debug, rememberHistory)
        else:
            self.model = self.__getArimaModel(self.traningData, debug)
            self.__performArima(debug)
        
    
    def __performArimaWithCustomOrder(self, order, debug, rememberHistory):
        if rememberHistory:
            history = list(self.traningData)
            forecast = []
            for i in range(len(self.predictingData)):
                arima = ARIMA(history,order=order)
                fittedModel = arima.fit()
                data = fittedModel.forecast()[0]
                history.append(self.predictingData[i])
                forecast.append(data)
            self.forecastedClosedValues = pd.Series(forecast)
            self.forecastedClosedValues.index = self.predictingData.index
        else:
            arima = ARIMA(self.traningData,order=order)
            fittedModel = arima.fit()
            self.forecastedClosedValues = fittedModel.forecast(len(self.predictingData))  # 95% conf
            self.forecastedClosedValues.index = self.predictingData.index

        if debug:
            #print(fittedModel.summary())
            print(f'order = {order}')
            print(f'forecasted data first 4: {list(self.forecastedClosedValues[:4])}')
            print(f'forecasted data last 4: {list(self.forecastedClosedValues[-4:])}')


    def __performArima(self, debug = False):
        self.forecastedClosedValues, self.confidence_intervals = self.model.predict(n_periods=len(self.predictingData), h=365,  return_conf_int=True, dynamic=False)
        if debug:
            print(f'order = {self.model.order}')
            print(f'forecasted data first 4: {self.forecastedClosedValues[:4]}')
            print(f'forecasted data last 4: {self.forecastedClosedValues[-4:]}')
        self.forecastedClosedValues  = pd.Series(self.forecastedClosedValues, index=self.predictingData.index)

    
    def __getArimaModel(self, data, debug) -> ARIMA:
        diffs = self.__getNumberOfDiffs()
        print(f'Diffs: {diffs}')
        model = auto_arima(data, d=diffs, seasonal=False, stepwise=True,
                     start_p = 1, max_p = 6, start_q = 1, max_q = 6, m =1,
                     suppress_warnings=True, error_action="ignore",
                     max_order=None, trace=debug, D=0)
        return model
    
    def __getNumberOfDiffs(self) -> int:
        data = self.traningData
        kpss_diffs = ndiffs(data, alpha=0.05, test='kpss', max_d=6)
        adf_diffs = ndiffs(data, alpha=0.05, test='adf', max_d=6)
        n_diffs = max(adf_diffs, kpss_diffs)
        return n_diffs



        

tickerSymbol = 'AAPL' # GE

arima = ModelArima(tickerSymbol)
print(arima.closedPrices.head(5))
print('--------')

dataset = None
#dataset = 'https://raw.githubusercontent.com/selva86/datasets/master/wwwusage.csv'
#dataset = 'https://raw.githubusercontent.com/jbrownlee/Datasets/master/shampoo.csv'

arima.performArima(None, True, dataset, True)
arima.plotForecastedClosedValues()
#arima.adFullerTest()

#arima.adFullerTest(True)
#arima.adFullerTest(True)
#arima.plotRollingMeanAndStandardDeviation()
#arima.plotAcf(True)
#arima.plotPacf(True)

