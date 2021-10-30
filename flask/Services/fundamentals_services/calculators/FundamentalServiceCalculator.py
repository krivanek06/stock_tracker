import datetime as dt
from math import isnan

import numpy as np
import pandas as pd
import pandas_datareader as pdr

#import scipy.stats as stats
#import statsmodels.api as sm


class FundamentalServiceCalculator:
    def __init__(self, data):
        self.data = data
        self.symbol = self.data['id']

    ''' 
            link > https://www.youtube.com/watch?v=0inqw9cCJnM&ab_channel=LearntoInvest
            equation > WACC = Wd * Rd * (1 - taxRate) + We * Re
    '''

    def calculateWACC(self):
        try:
            balanceSheet = self.data['companyOutlook']['financialsAnnual']['balance'][0]
            incomeStatement = self.data['companyOutlook']['financialsAnnual']['income'][0]

            Rd = round(abs(incomeStatement.get('interestExpense', 0) / balanceSheet['totalDebt']), 4)  # cost of debt
            taxRate = round(incomeStatement['incomeTaxExpense'] / incomeStatement['incomeBeforeTax'], 4)  # percent

            CAPM = self.calculateCAPM()
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

    def calculateCAPM(self):
        try:
            Rf = 0.025  # Risk free rate - hardcoded 2.5% , TODO may be 10y US treasury yield
            beta = round(self.data['calculations']['Beta'], 2)
            Rm = 0.10  # expected return of market (SP500)

            return {'result': round(Rf + beta * (Rm - Rf), 4), 'Rf': Rf, 'Beta': beta, 'Rm': Rm}
        except:
            return None

    '''
        Custom beta calculation - may not be present if stocks live less than 5y
        link > https://www.youtube.com/watch?v=Y-BqM3WaX-I&ab_channel=Algovibes
        https://www.learnpythonwithrune.org/calculate-the-market-sp-500-beta-with-python-for-any-stock/ 
    '''
    def calculateBeta(self):
        summary = self.data.get('summary', {})
        if summary.get('beta') is not None and summary.get('beta') > 0: 
            return round(summary.get('beta'), 2)

        tickers = [ self.symbol,  '^GSPC']
        end = dt.datetime.today()
        start =  dt.datetime.today() - dt.timedelta(weeks=52 * 5)
        
        data = pdr.get_data_yahoo(tickers, start, end, interval="m")
        
        data = data['Adj Close']
        
        log_returns = np.log(data/data.shift())
        cov = log_returns.cov()
        var = log_returns['^GSPC'].var()
        
        result = cov.loc[self.symbol, '^GSPC'] / var
        return  None if isnan(result) else round(result, 2)

