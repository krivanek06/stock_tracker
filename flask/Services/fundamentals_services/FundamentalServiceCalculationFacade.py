from Services.fundamentals_services.calculators.FundamentalServiceCalculator import \
    FundamentalServiceCalculator
from Services.fundamentals_services.calculators.FundamentalServiceEstimation import \
    FundamentalServiceEstimation
from Services.fundamentals_services.calculators.FundamentalServiceEstimationDCF import \
    FundamentalServiceEstimationDCF


class FundamentalServiceCalculationFacade:
    def __init__(self, data = None):
        self.QUARTERLY = 'quarterly'
        self.YEARLY = 'yearly'

        self.data = data

    def calculateAdditionalData(self, symbol = None):
        symbol = symbol if symbol is not None else self.data['id']
        calculator = FundamentalServiceCalculator(self.data)
        
        volatilityYearly = calculator.calculateVolatility(symbol)
        benchmarkYearlyReturnPrct = volatilityYearly.get('benchmarkYearlyReturnPrct')
        symbolYearlyPriceReturnPrct = volatilityYearly.get('symbolYearlyPriceReturnPrct')
      
        beta = calculator.calculateBeta(symbol)

        calculations = {
            'symbol': symbol
        }
        calculations['CAPM'] =  calculator.calculateCAPM(beta)
        calculations['beta'] =  beta
        calculations['WACC'] =  calculator.calculateWACC(beta)
        calculations['volatility'] = volatilityYearly
        calculations['sharpRatio'] =  calculator.calculateSharpRatio(symbolYearlyPriceReturnPrct, volatilityYearly.get('volatilityPrct'))
        calculations['alpha'] =  calculator.calculateAlpha(symbolYearlyPriceReturnPrct, benchmarkYearlyReturnPrct, beta)

        return calculations

    def calculatePredictions(self):
        dcfEstimation = FundamentalServiceEstimationDCF(self.data)
        estimation = FundamentalServiceEstimation(self.data)

        self.data['calculatedPredictions'] = {
            'DCF_V1': dcfEstimation.estimateDFC(),
            'DDF_V1': estimation.estimateDividendDiscountedFormula(),
            'FCF_V1': estimation.estimateFCFValuation(),
            'INTRINSIC_V1': estimation.estimateIntrinsicFromEarnings(),
        }
