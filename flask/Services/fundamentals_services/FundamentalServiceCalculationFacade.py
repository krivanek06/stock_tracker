from Services.fundamentals_services.calculators.FundamentalServiceCalculator import FundamentalServiceCalculator
from Services.fundamentals_services.calculators.FundamentalServiceEstimationDCF import FundamentalServiceEstimationDCF
from Services.fundamentals_services.calculators.FundamentalServiceEstimation import FundamentalServiceEstimation


class FundamentalServiceCalculationFacade:
    def __init__(self, data):
        self.QUARTERLY = 'quarterly'
        self.YEARLY = 'yearly'

        self.data = data
        self.dcfEstimation = FundamentalServiceEstimationDCF(self.data)
        self.estimation = FundamentalServiceEstimation(self.data)
        self.calculator = FundamentalServiceCalculator(self.data)

    def calculateAdditionalData(self):
        # free cash flow
        self.data['cashFlow'][self.YEARLY]['freeCashFlow'] = self.calculator.calculateFreeCashFlow(self.YEARLY)
        self.data['cashFlow'][self.QUARTERLY]['freeCashFlow'] = self.calculator.calculateFreeCashFlow(self.QUARTERLY)

        # net income margin
        self.data['incomeStatement'][self.YEARLY]['netIncomeMargin'] = self.calculator.calculateNetIncomeMargin(self.YEARLY)
        self.data['incomeStatement'][self.QUARTERLY]['netIncomeMargin'] = self.calculator.calculateNetIncomeMargin(self.QUARTERLY)

        self.data['calculations'] = {
            'CAPM': self.calculator.calculateCAPM(),
            'WACC': self.calculator.calculateWACC()
        }

    def calculatePredictions(self):
        self.data['calculatedPredictions'] = {
            'DCF_V1': self.dcfEstimation.estimateDFC(),
            'DDF_V1': self.estimation.estimateDividendDiscountedFormula(),
            'FCF_V1': self.estimation.estimateFCFValuation(),
            'INTRINSIC_V1': self.estimation.estimateIntrinsicFromEarnings(),
        }

