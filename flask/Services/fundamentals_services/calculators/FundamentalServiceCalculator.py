import datetime as dt
import re
from itertools import chain
from math import isnan, sqrt
from statistics import pstdev, stdev, variance

import numpy as np
import pandas as pd
import pandas_datareader as pdr
from dateutil.relativedelta import relativedelta

#import scipy.stats as stats
#import statsmodels.api as sm


class FundamentalServiceCalculator:
    def __init__(self, data = None):
        self.data = data

    ''' 
            link > https://www.youtube.com/watch?v=0inqw9cCJnM&ab_channel=LearntoInvest
            equation > WACC = Wd * Rd * (1 - taxRate) + We * Re
    '''

    def calculateWACC(self, beta):
        try:
            balanceSheet = self.data['companyOutlook']['financialsAnnual']['balance'][0]
            incomeStatement = self.data['companyOutlook']['financialsAnnual']['income'][0]

            Rd = round(abs(incomeStatement.get('interestExpense', 0) / balanceSheet['totalDebt']), 4)  # cost of debt
            taxRate = round(incomeStatement['incomeTaxExpense'] / incomeStatement['incomeBeforeTax'], 4)  # percent

            CAPM = self.calculateCAPM(beta)
            Re = 0.1 if CAPM is None else CAPM['result']  # cost of equity

            taxAdjustedCostOfDebt = Rd * (1 - taxRate)
            totalDebt = self.data['companyData']['financialData']['totalDebt']
            Wd = round(totalDebt / (totalDebt + self.data['summary']['marketCap']), 4)  # weight of debt
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
    '''
    def calculateBeta(self, symbol = None):
        try:
            if self.data is not None:
                summary = self.data.get('summary', {})
                if summary.get('beta') is not None and summary.get('beta') > 0: 
                    return round(summary.get('beta'), 2)
            
            # calcualte beta manually
            tickers = [ symbol,  '^GSPC']
            end = dt.datetime.today()
            start =  dt.datetime.today() - dt.timedelta(weeks=52 * 5)
            
            data = pdr.get_data_yahoo(tickers, start, end, interval="m")
            
            data = data['Adj Close']
            
            log_returns = np.log(data/data.shift())
            cov = log_returns.cov()
            var = log_returns['^GSPC'].var()
            
            result = cov.loc[symbol, '^GSPC'] / var
            return  None if isnan(result) else round(result, 2)
        except:
            return None
    
    # https://www.youtube.com/watch?v=v17M0glWCHA&t=16s&ab_channel=BionicTurtle
    # https://stackoverflow.com/questions/7343890/standard-deviation-javascript
    # https://www.youtube.com/watch?v=-MJ_kOlYmRk&ab_channel=CodeFather - 9min
    def calculateVolatility(self, symbol) -> dict:
        end = dt.datetime.today()
        start =  dt.datetime.today() - relativedelta(years=1)
        data = pdr.get_data_yahoo([symbol, '^GSPC'] , start, end)

        symbolData = data['Adj Close'][symbol]
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
        benchMarkValues = data['Adj Close']['^GSPC'].values
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

    
    
    # https://www.youtube.com/watch?v=17Q4m0IUqsY&ab_channel=TactileTrade
    def calculateSharpRatio(self, yearlyPriceReturn, standardDeviation):
        if yearlyPriceReturn is None or standardDeviation is None or standardDeviation == 0:
            return None
        return round((yearlyPriceReturn - 0.025) / standardDeviation, 4)

    # https://corporatefinanceinstitute.com/resources/knowledge/finance/alpha/?fbclid=IwAR1xUFsvreOMZqIDJ4Oe_OFHFCmDWI37PIp0_4kGxB81Vk1l8BL2cqJ1eeo
    def calculateAlpha(self, symbolYearlyPriceReturn, benchmarkYearlyReturn, beta):
        if symbolYearlyPriceReturn is None or benchmarkYearlyReturn is None or beta is None:
            return None
        return round(symbolYearlyPriceReturn - 0.025 - beta * (benchmarkYearlyReturn - 0.025), 4)
    
    def getStockMonthlyReturns(self, symbol):
        end = dt.datetime.today()
        start =  dt.datetime.today() - dt.timedelta(weeks=52 *  100)
        data = pdr.get_data_yahoo(symbol, start, end, interval = "m")
        return data.resample('M').ffill().pct_change()['Adj Close'].values
    
