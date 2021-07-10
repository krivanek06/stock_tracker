from Services.fundamentals_services.calculators.FundamentalServiceCalculator import FundamentalServiceCalculator
from Services.fundamentals_services.calculators.FundamentalServiceEstimationDCF import FundamentalServiceEstimationDCF
from Services.fundamentals_services.calculators.FundamentalServiceEstimation import FundamentalServiceEstimation


class FundamentalServiceCalculationFacade:
    def __init__(self, data):
        self.QUARTERLY = 'quarterly'
        self.YEARLY = 'yearly'

        self.data = data

    def calculateAdditionalData(self):
        calculator = FundamentalServiceCalculator(self.data)

        self.data['calculations'] = {
            'CAPM': calculator.calculateCAPM(),
            'WACC': calculator.calculateWACC()
        }

    def calculatePredictions(self):
        dcfEstimation = FundamentalServiceEstimationDCF(self.data)
        estimation = FundamentalServiceEstimation(self.data)

        self.data['calculatedPredictions'] = {
            'DCF_V1': dcfEstimation.estimateDFC(),
            'DDF_V1': estimation.estimateDividendDiscountedFormula(),
            'FCF_V1': estimation.estimateFCFValuation(),
            'INTRINSIC_V1': estimation.estimateIntrinsicFromEarnings(),
        }
