import datetime as dt
import re
from itertools import chain
from math import isnan, sqrt
from statistics import pstdev, stdev, variance
from typing import List

import numpy as np
import pandas as pd
import pandas_datareader as pdr
from dateutil.relativedelta import relativedelta
from ExternalAPI.FinancialModelingApi import FinancialModelingApi


class FundamentalServiceCalculator:
    def __init__(self):
        '''
            Caching stock yearly values,
            user when calculating user's portfolio volatility then multiple times
            same stock yearly data is fetched and process is slow
        '''
        self.stockYearlyValuesCache = {}
        self.financialApi = FinancialModelingApi()

    ''' 
            link > https://www.youtube.com/watch?v=0inqw9cCJnM&ab_channel=LearntoInvest
            equation > WACC = Wd * Rd * (1 - taxRate) + We * Re
    '''

    def calculateWACC(self, beta, data = None):
        try:
            if data is None:
                return None

            balanceSheet = data['companyOutlook']['financialsAnnual']['balance'][0]
            incomeStatement = data['companyOutlook']['financialsAnnual']['income'][0]

            Rd = round(abs(incomeStatement.get('interestExpense', 0) / balanceSheet['totalDebt']), 4)  # cost of debt
            taxRate = round(incomeStatement['incomeTaxExpense'] / incomeStatement['incomeBeforeTax'], 4)  # percent

            CAPM = self.calculateCAPM(beta)
            Re = 0.1 if CAPM is None else CAPM['result']  # cost of equity

            taxAdjustedCostOfDebt = Rd * (1 - taxRate)
            totalDebt = data['companyData']['financialData']['totalDebt']
            Wd = round(totalDebt / (totalDebt + data['summary']['marketCap']), 4)  # weight of debt
            We = round(1 - Wd, 4)  # weight of equity
            wacc = round(Wd * taxAdjustedCostOfDebt + We * Re, 4)
            return {'result': wacc, 'CAPM': CAPM, 'Wd': Wd, 'Rd': Rd, 'taxRate': taxRate, 'We': We, 'Re': Re}
        except:
            return None

    '''
        Capital Asset pricing model
        link > https://www.youtube.com/watch?v=-fCYZjNA7Ps&ab_channel=LearntoInvest
        equation > Ra = Rf + Beta * (Rm - Rf)
    '''

    def calculateCAPM(self, beta):
        try:
            Rf = 0.025  # Risk free rate - hardcoded 2.5% , TODO may be 10y US treasury yield
            beta = round(beta, 2)
            Rm = 0.09  # expected return of market (SP500) - 9%

            return {'result': round(Rf + beta * (Rm - Rf), 4), 'Rf': Rf, 'beta': beta, 'Rm': Rm}
        except:
            return None

    '''
        Custom beta calculation - may not be present if stocks live less than 5y
        link > https://www.learnpythonwithrune.org/calculate-the-market-sp-500-beta-with-python-for-any-stock/ 
        stock overflow - https://stackoverflow.com/questions/39501277/efficient-python-pandas-stock-beta-calculation-on-many-dataframes
    '''
    def calculateBeta(self, symbol: str = None) -> float:
        try:
            self.__loadAndCacheStockClosedPrice([ symbol,  '^GSPC'], 5, 'm')
            market = self.stockYearlyValuesCache.get('^GSPC_m')
            stock = self.stockYearlyValuesCache.get(f'{symbol}_m')
            
            stockReturns = stock.pct_change()[1:]
            marketReturns = market.pct_change()[-len(stockReturns):] # must be same length

            covariance = np.cov(stockReturns,marketReturns) # Calculate covariance between stock and market
            beta = covariance[0,1]/covariance[1,1]
            
            return round(beta, 2)
        except Exception as e:
            print(e)
            return None
    
    # https://www.youtube.com/watch?v=v17M0glWCHA&t=16s&ab_channel=BionicTurtle
    # https://stackoverflow.com/questions/7343890/standard-deviation-javascript
    # https://www.youtube.com/watch?v=-MJ_kOlYmRk&ab_channel=CodeFather - 9min
    def calculateVolatility(self, symbol) -> dict:
        self.__loadAndCacheStockClosedPrice([symbol, '^GSPC'] )

        symbolData = self.stockYearlyValuesCache.get(symbol) # data['Adj Close'][symbol]
        mean = round(symbolData.mean(), 2)
        stdPrice = round(symbolData.std(), 2)
        cov = round(stdPrice / mean, 4)

        stdDailyPrct = round(pstdev(symbolData.pct_change()[1:]), 4)
        stdDailyPrice = round(mean * stdDailyPrct, 2)
        volatilityPrct = round(stdDailyPrct * sqrt(252), 4)
        
        # calcualte yearly return for synbol
        symbolValues = symbolData.values
        yearlyPriceReturn = round(((symbolValues[-1] - symbolValues[[0]]) / symbolValues[0])[0], 4)

        # calcualte yearly return for banchmark
        benchMarkValues = self.stockYearlyValuesCache.get('^GSPC').values # data['Adj Close']['^GSPC'].values
        benchMarkYearlyReturn = round(((benchMarkValues[-1] - benchMarkValues[[0]]) / benchMarkValues[0])[0], 4)


        return {'stdDailyPrct': stdDailyPrct, 
                'stdDailyPrice': stdDailyPrice,
                'meanPrice': mean, 
                'stdYearlyPrice': stdPrice,
                'stdYearlyPrct': cov,
                'volatilityPrct': volatilityPrct ,
                'symbolYearlyPriceReturnPrct': yearlyPriceReturn, 
                'benchmarkYearlyReturnPrct': benchMarkYearlyReturn }
        
        #logReturns = np.log(data['Close'][symbol]/data['Close'][symbol].shift())
        #return round(logReturns.std(), 4)

    def __loadAndCacheStockClosedPrice(self, stocksSymbols: List[str], years = 1, interval: str = 'd'):
        def getSymbolName(symbol, interval) -> str:
            return symbol if interval == 'd' else f'{symbol}_m'

        end = dt.datetime.today()
        start =  dt.datetime.today() - relativedelta(years=years)

        # download and cache data
        unsavesStockSymbols = [s for s in stocksSymbols if self.stockYearlyValuesCache.get(getSymbolName(s, interval)) is None]

        # load data only if needed
        if unsavesStockSymbols != []:
            print('loading data for symbols')
            print(unsavesStockSymbols)
            #data = pdr.get_data_yahoo(unsavesStockSymbols , start, end, interval = interval)
            for symbol in unsavesStockSymbols:
                data = self.financialApi.getHistoricalDailyPrices(symbol, f'{years}y', True)['historical']
                closedPrice = [x.get('close') for x in data][::-1]
                
                # monthly data may also be persisted but has to be called differently
                symbolName = getSymbolName(symbol, interval)
                closedPrice = pd.Series(closedPrice)
                self.stockYearlyValuesCache[symbolName] = closedPrice
                #symbolName = getSymbolName(symbol, interval)
                #self.stockYearlyValuesCache[symbolName] = data['Adj Close'][symbol]
            print('cached symbols')
            print(list(self.stockYearlyValuesCache.keys()))
    
    def calculatePortfolioReturn(self,  stockPortfolioWeights: List[float], stcokYearlyPriceReturns: List[float]):
        if(len(stockPortfolioWeights) != len(stcokYearlyPriceReturns)):
            return 0
        return round(sum([ stockPortfolioWeights[i] * stcokYearlyPriceReturns[i] for i in range(len(stockPortfolioWeights))]), 4)


    # link > https://www.youtube.com/watch?v=5wresdHooHQ&ab_channel=MattMacarty
    def calculatePortfolioVolatility(self, stocksSymbols: List[str], stockPortfolioWeights: List[float]) -> dict:
        try:
            self.__loadAndCacheStockClosedPrice(stocksSymbols)

            # calculate annual volatility with weights
            values = [self.stockYearlyValuesCache[symbol].pct_change()[1:].values for symbol in stocksSymbols]
            minimal = len(min(values, key=len)) # all values must have the same length
            values = [v[-minimal:] for v in values]
            covariance = np.cov(values)
            
            annualStockWeights = [x * 252 for x in stockPortfolioWeights]
            annualVariance = np.matmul(np.matmul(np.transpose(stockPortfolioWeights), covariance), annualStockWeights)
            annualVolatility = sqrt(annualVariance)
            
            # calculate volatility for each symbol
            volatility = [round(round(pstdev(self.stockYearlyValuesCache[symbol].pct_change()[1:].values), 4) * sqrt(252), 4) for symbol in stocksSymbols]
            yearlyPriceReturn = []
            for symbol in stocksSymbols:
                values = self.stockYearlyValuesCache[symbol].values
                yearlyPriceReturn.append(round(((values[-1] - values[[0]]) / values[0])[0], 4))

            #yearlyPriceReturn = [round(((self.stockYearlyValuesCache[symbol].values[-1] - self.stockYearlyValuesCache[symbol].values[[0]]) / self.stockYearlyValuesCache[symbol][0])[0], 4) for symbol in stocksSymbols]
            volatilityMean = round(sum(volatility) / len(volatility), 4)
            volatilitySymbols = [{
                'symbol': stocksSymbols[i], 
                'volatility': volatility[i], 
                'beta': self.calculateBeta(stocksSymbols[i]),
                'yearlyPriceReturnPrct': yearlyPriceReturn[i]
            } for i in range(len(stocksSymbols))]
            
            return {
                'portfolioAnnualVolatilityPrct': round(annualVolatility, 4), 
                'portfolioAnnualVariancePrct': round(annualVariance, 4),
                'portfolioVolatilityMeanPrct': round(volatilityMean, 4),
                'symbols': volatilitySymbols
            }
        except Exception as e:
            print(e)
            return None
    
    
    # https://www.youtube.com/watch?v=17Q4m0IUqsY&ab_channel=TactileTrade
    def calculateSharpRatio(self, yearlyPriceReturn, standardDeviation):
        if yearlyPriceReturn is None or standardDeviation is None or standardDeviation == 0:
            return None
        return round((yearlyPriceReturn - 0.025) / standardDeviation, 4)

    # https://corporatefinanceinstitute.com/resources/knowledge/finance/alpha/?fbclid=IwAR1xUFsvreOMZqIDJ4Oe_OFHFCmDWI37PIp0_4kGxB81Vk1l8BL2cqJ1eeo
    def calculateAlpha(self, symbolYearlyPriceReturn: float, benchmarkYearlyReturn: float, beta: float) -> float:
        if symbolYearlyPriceReturn is None or benchmarkYearlyReturn is None or beta is None:
            return None
        return round(symbolYearlyPriceReturn - 0.025 - beta * (benchmarkYearlyReturn - 0.025), 4)
    
    def getStockMonthlyReturns(self, symbol):
        end = dt.datetime.today()
        start =  dt.datetime.today() - dt.timedelta(weeks=52 *  100)
        data = pdr.get_data_yahoo(symbol, start, end, interval = "m")
        return data.resample('M').ffill().pct_change()['Adj Close'].values
    
    def clearCache(self): 
        self.stockYearlyValuesCache = {}
                
    
