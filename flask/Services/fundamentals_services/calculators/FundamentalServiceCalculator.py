from math import isnan, sqrt
from statistics import pstdev, stdev, variance
from typing import List, Tuple

import numpy as np
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
            self.__loadAndCacheStockClosedPrice([ symbol,  '^GSPC'])
            market = self.stockYearlyValuesCache.get('^GSPC')
            stock = self.stockYearlyValuesCache.get(symbol)
            
            stockReturns = self.__prct_change(stock)
            marketReturns = self.__prct_change(market)[-len(stockReturns):] # must be same length

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

        symbolData = self.stockYearlyValuesCache.get(symbol) # closed prices of symbol

        stdDailyPrct = round(pstdev(self.__prct_change(symbolData)), 4)
        stdDailyPrice = round(stdev(symbolData), 2)

        mean = round(sum(symbolData) / len(symbolData), 2)
        stdYearlyPrct =  round(stdDailyPrct * sqrt(252), 4) 
        stdYearlyPrice = round(stdDailyPrice * sqrt(252), 2) 
      
        volatilityPrct = round(stdDailyPrct * sqrt(252), 4)
        
        # calcualte yearly return for synbol
        yearlyPriceReturn = round(((symbolData[-1] - symbolData[0]) / symbolData[0]), 4)

        # calcualte yearly return for banchmark
        benchMarkValues = self.stockYearlyValuesCache.get('^GSPC')
        benchMarkYearlyReturn = round(((benchMarkValues[-1] - benchMarkValues[0]) / benchMarkValues[0]), 4)


        return {'stdDailyPrct': stdDailyPrct, 
                'stdDailyPrice': stdDailyPrice,
                'meanPrice': mean, 
                'stdYearlyPrice': stdYearlyPrice,
                'stdYearlyPrct': stdYearlyPrct,
                'volatilityPrct': volatilityPrct ,
                'symbolYearlyPriceReturnPrct': yearlyPriceReturn, 
                'benchmarkYearlyReturnPrct': benchMarkYearlyReturn }
        
        #logReturns = np.log(data['Close'][symbol]/data['Close'][symbol].shift())
        #return round(logReturns.std(), 4)

    def __loadAndCacheStockClosedPrice(self, stocksSymbols: List[str], years = 1, interval: str = 'd'):
        def getSymbolName(symbol, interval) -> str:
            return symbol if interval == 'd' else f'{symbol}_m'

        # download and cache data
        unsavesStockSymbols = [s for s in stocksSymbols if self.stockYearlyValuesCache.get(getSymbolName(s, interval)) is None]

        # load data only if needed
        if unsavesStockSymbols != []:
            print('loading data for symbols')
            print(unsavesStockSymbols)
            print()

            for symbol in unsavesStockSymbols:
                data = self.financialApi.getHistoricalDailyPrices(symbol, f'{years}y', True)['historical']
                closedPrice = [x.get('close') for x in data][::-1]
                
                # monthly data may also be persisted but has to be called differently
                symbolName = getSymbolName(symbol, interval)
                self.stockYearlyValuesCache[symbolName] =  closedPrice #pd.Series(closedPrice)
            print('cached symbols')
            print(list(self.stockYearlyValuesCache.keys()))
            print('-------------------------------')
    
    def calculatePortfolioReturn(self,  stockPortfolioWeights: List[float], stcokYearlyPriceReturnsPrct: List[float], stockPriceReturnsValue: List[float]) -> Tuple[float, float]:
        if(len(stockPortfolioWeights) != len(stcokYearlyPriceReturnsPrct)):
            return 0
        
        estimatedPrctReturn = round(sum([ stockPortfolioWeights[i] * stcokYearlyPriceReturnsPrct[i] for i in range(len(stockPortfolioWeights))]), 4)
        estimatedValueReturn = round(sum([ stockPortfolioWeights[i] * stockPriceReturnsValue[i] for i in range(len(stockPortfolioWeights))]), 4)
        return estimatedPrctReturn, estimatedValueReturn


    # link > https://www.youtube.com/watch?v=5wresdHooHQ&ab_channel=MattMacarty
    def calculatePortfolioVolatility(self, stocksSymbols: List[str], stockPortfolioWeights: List[float], symbolsBeta: List[float] = []) -> dict:
        try:
            self.__loadAndCacheStockClosedPrice(stocksSymbols)

            # calculate annual volatility with weights
            values = [self.__prct_change(self.stockYearlyValuesCache[symbol]) for symbol in stocksSymbols]
            minimal = len(min(values, key=len)) # all values must have the same length
            values = [v[-minimal:] for v in values]
            covariance = np.cov(values)
            
            
            annualStockWeights = [x * 252 for x in stockPortfolioWeights]
            if(len(stocksSymbols) > 1):
                annualVariance = np.matmul(np.matmul(np.transpose(stockPortfolioWeights), covariance), annualStockWeights)
                annualVolatility = sqrt(annualVariance)
            else:
                # np.matmul fails when length or array is 1
                symbolVolatility = self.calculateVolatility(stocksSymbols[0])
                annualVariance = symbolVolatility.get('stdDailyPrct')
                annualVolatility = symbolVolatility.get('volatilityPrct')
            
            # calculate volatility for each symbol
            volatility = [round(round(pstdev(self.__prct_change(self.stockYearlyValuesCache[symbol])), 4) * sqrt(252), 4) for symbol in stocksSymbols]
            yearlyPriceReturn = []
            for symbol in stocksSymbols:
                values = self.stockYearlyValuesCache[symbol]#.values
                yearlyPriceReturn.append({
                    'prct': round(((values[-1] - values[0]) / values[0]), 4), 
                    'value': round((values[-1] - values[0]), 4)
                })


            volatilityMean = round(sum(volatility) / len(volatility), 4)
            volatilitySymbols = [{
                'symbol': stocksSymbols[i], 
                'volatility': volatility[i], 
                'beta': self.calculateBeta(stocksSymbols[i]) if i >= len(symbolsBeta) or symbolsBeta[i] is None else symbolsBeta[i],
                'yearlyPriceReturnPrct': yearlyPriceReturn[i].get('prct', 0),
                'yearlyPriceReturnValue': yearlyPriceReturn[i].get('value', 0)
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
    
    def clearCache(self): 
        self.stockYearlyValuesCache = {}
    
    def __prct_change(self, nparray: List[float]):
        nparray = np.array(nparray)
        pct=np.zeros_like(nparray)
        pct[1:]=np.diff(nparray) / np.abs(nparray[:-1])
        return pct[1:] # first values is 0
                
    
