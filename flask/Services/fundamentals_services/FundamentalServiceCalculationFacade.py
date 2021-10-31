from Services.fundamentals_services.calculators.FundamentalServiceCalculator import \
    FundamentalServiceCalculator
from Services.fundamentals_services.calculators.FundamentalServiceEstimation import \
    FundamentalServiceEstimation
from Services.fundamentals_services.calculators.FundamentalServiceEstimationDCF import \
    FundamentalServiceEstimationDCF


class FundamentalServiceCalculationFacade:
    def __init__(self, data):
        self.QUARTERLY = 'quarterly'
        self.YEARLY = 'yearly'

        self.data = data

    def calculateAdditionalData(self):
        calculator = FundamentalServiceCalculator(self.data)

        self.data['calculations'] = {}
        self.data['calculations']['Beta'] =  calculator.calculateBeta()
        self.data['calculations']['CAPM'] =  calculator.calculateCAPM()
        self.data['calculations']['WACC'] =  calculator.calculateWACC()
        self.data['calculations']['StdevYearly'] =  calculator.calculateStandardDeviation()
        self.data['calculations']['VolatilityYearly'] =  calculator.calculateVolatility()
        calculator.calculateEverything()
        self.data['summary']['beta'] =  self.data['calculations']['Beta']

    def calculatePredictions(self):
        dcfEstimation = FundamentalServiceEstimationDCF(self.data)
        estimation = FundamentalServiceEstimation(self.data)

        self.data['calculatedPredictions'] = {
            'DCF_V1': dcfEstimation.estimateDFC(),
            'DDF_V1': estimation.estimateDividendDiscountedFormula(),
            'FCF_V1': estimation.estimateFCFValuation(),
            'INTRINSIC_V1': estimation.estimateIntrinsicFromEarnings(),
        }
