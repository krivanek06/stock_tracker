from datetime import datetime
from typing import List

from Services.fundamentals_services.calculators.FundamentalServiceCalculator import \
    FundamentalServiceCalculator
from Services.fundamentals_services.calculators.FundamentalServiceEstimation import \
    FundamentalServiceEstimation
from Services.fundamentals_services.calculators.FundamentalServiceEstimationDCF import \
    FundamentalServiceEstimationDCF


class FundamentalServiceCalculationFacade:
    def __init__(self):
        self.calculator = FundamentalServiceCalculator()
    
    '''
        example: 
        	"symbols": ["SPY", "GLD", "AMZN", "CCL", "UBER", "FB", "GOOG", "LYFT", "AAL", "INTC", "T", "IBM", "AMD", "MSFT", "VOO", "CLOV", "F", "AMC", "BAC", "MA"],
            "weights": [0.05, 0.05, 0.05, 0.05,0.05, 0.05, 0.05, 0.05,0.05, 0.05, 0.05, 0.05,0.05, 0.05, 0.05, 0.05,0.05, 0.05, 0.05, 0.05],
            "symbolsBeta": [1.54, 1.07, 1.63, 1.63, 1.63, 1.54, 1.07, 1.63, 1.63, 1.63, 1.54, 1.07, 1.63, 1.63, 1.63, 1.54, 1.07, 1.63, 1.63, 1.63]
    '''
    def calculatePortfolioRisk(self, stocksSymbols: List[str], stockPortfolioWeights: List[float], symbolsBeta: List[float] = [], clearCache = False):
        portfolioVolatility = self.calculator.calculatePortfolioVolatility(stocksSymbols, stockPortfolioWeights, symbolsBeta)
        stockPriceReturnsPrct = [symbolData.get('yearlyPriceReturnPrct', 0) for symbolData in portfolioVolatility.get('symbols', [])]
        stockPriceReturnsValue = [symbolData.get('yearlyPriceReturnValue', 0) for symbolData in portfolioVolatility.get('symbols', [])]

        portfolioEstimatedReturnPrct, portfolioEstimatedReturnValue = self.calculator.calculatePortfolioReturn(stockPortfolioWeights, stockPriceReturnsPrct, stockPriceReturnsValue)
        portfolioSharpRatio = self.calculator.calculateSharpRatio(portfolioEstimatedReturnPrct, portfolioVolatility.get('portfolioAnnualVolatilityPrct'))

        # portfolio beta is the weighted average of stock beta - https://www.youtube.com/watch?v=nRRhzsiVT9s&ab_channel=Edspira
        stockBeta = [symbolData.get('beta') for symbolData in portfolioVolatility.get('symbols', [])]
        portfolioBeta = round(sum([stockBeta[i] * stockPortfolioWeights[i] for i in range(len(stockBeta))]), 4)
        
        # additional data for symbols
        stockAddinalData = [self.calculateAdditionalData(s) for s in stocksSymbols[:1]]

        # calculate alpha
        benchmarkYearlyReturn = stockAddinalData[0].get('volatility', {}).get('benchmarkYearlyReturnPrct', None)
        portfolioAlpha = self.calculator.calculateAlpha(portfolioEstimatedReturnPrct, benchmarkYearlyReturn, portfolioBeta)

        # clear local cache
        if clearCache:
            print('CLEARING STOCK PRICE CACHE')
            self.calculator.clearCache()

        # same as stockAddinalData
        portfolioVolatility.pop('symbols', None)

        return {
            **portfolioVolatility, 
            'portfolioSharpRatio': portfolioSharpRatio, 
            'portfolioBeta': portfolioBeta,
            'portfolioAlpha': portfolioAlpha,
            'portfolioEstimatedReturnPrct': portfolioEstimatedReturnPrct,
            'portfolioEstimatedReturnValue': portfolioEstimatedReturnValue,
            'date': datetime.today(),
        }

    def calculateAdditionalData(self, symbol = None, data = None):        
        volatilityYearly = self.calculator.calculateVolatility(symbol)
        beta = self.calculator.calculateBeta(symbol)

        return {
            'symbol': symbol,
            'beta': beta,
            'volatility': volatilityYearly,
            'sharpRatio': self.calculator.calculateSharpRatio(volatilityYearly.get('symbolYearlyPriceReturnPrct'), volatilityYearly.get('volatilityPrct')),
            'alpha': self.calculator.calculateAlpha(volatilityYearly.get('symbolYearlyPriceReturnPrct'), volatilityYearly.get('benchmarkYearlyReturnPrct'), beta),
            'CAPM': self.calculator.calculateCAPM(beta),
            'WACC': self.calculator.calculateWACC(beta, data),
            'date': datetime.today()
        }

    def calculatePredictions(self, data):
        dcfEstimation = FundamentalServiceEstimationDCF(data)
        estimation = FundamentalServiceEstimation(data)

        return {
            'DCF_V1': dcfEstimation.estimateDFC(),
            'DDF_V1': estimation.estimateDividendDiscountedFormula(),
            'FCF_V1': estimation.estimateFCFValuation(),
            'INTRINSIC_V1': estimation.estimateIntrinsicFromEarnings(),
        }
