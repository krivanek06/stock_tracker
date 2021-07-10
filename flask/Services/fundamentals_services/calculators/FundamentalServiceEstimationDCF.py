'''
    Discounted Cash Flow

    Calculating intrinsic value of the company by Discounted Cash Flow method
    link > https://www.youtube.com/watch?v=fd_emLLzJnk&ab_channel=LearntoInvest

    Creating 2 calculating byt taking lowest % growth or average growth for last 4 years

    By using this method the following assumptions were made about the company:
        - company does not pay dividends (or very small)
        - free cash flow is aligned with profitability

    Do not forget to add margin of safety to the end intrinsic value
'''
from statistics import mean
from datetime import datetime

class FundamentalServiceEstimationDCF:
    def __init__(self, data):
        self.data = data
        self.balanceSheet = self.data['companyOutlook']['financialsAnnual']['balance']
        self.cashFlow = self.data['companyOutlook']['financialsAnnual']['cash']
        self.incomeStatement = self.data['companyOutlook']['financialsAnnual']['income']

        self.ESTIMATED_TIME_PERIOD = 2  # how much further in time to go

    def estimateDFC(self):
        try:
            if not self.__checkIfCalculationIsPossible():
                return None
            return self.__calculateDFC()
        except Exception as e:
            print(e)
            return None

    def __calculateDFC(self):
        estimatedFreeCashFlowRate, estimatedFreeCashFlowRates = self.__calculateFreeCashFlowRates()
        revenue, revenueGrowthRates, estimatedRevenueGrowthRate, estimatedRevenues = self.__estimateRevenues()
        netIncome, netIncomeMargins, estimatedNetIncomeMargin, estimatedNetIncomes = self.__estimateNetIncome(revenue, estimatedRevenues)
        freeCashFlows, estimatedFreeCashFlows = self.__estimateFreeCashFlows(estimatedNetIncomes, estimatedFreeCashFlowRate)

        requiredRateOfReturn = self.data['calculations']['WACC']['result']  # this number may be personalized, but generally using WACC
        sharesOutstanding = self.data['summary']['sharesOutstanding']
        perpetualGrowthRate = 0.025  # constant growth rate - 2.5% -  rate of which free cash flow gonna grow forever

        estimatedTerminalValue = round((estimatedFreeCashFlows[-1] * (1 + perpetualGrowthRate)) / (requiredRateOfReturn - perpetualGrowthRate), 0)

        estimatedDiscountedFactors = [round((1 + requiredRateOfReturn) ** i, 2) for i in range(1, self.ESTIMATED_TIME_PERIOD + 2 + 1)]
        estimatedDiscountedTerminalValue = round(estimatedTerminalValue / estimatedDiscountedFactors[-1], 0)

        estimatedPresentValueOfFutureCashFlows = [round(estimatedFreeCashFlows[i] / estimatedDiscountedFactors[i], 0) for i in range(len(estimatedFreeCashFlows))]

        estimatedCompanyTodayValue = sum(estimatedPresentValueOfFutureCashFlows) + estimatedDiscountedTerminalValue
        estimatedIntrinsicValue = round(estimatedCompanyTodayValue / sharesOutstanding, 2)
        thisYear = datetime.now().year
        historicalYears = [str(thisYear - i - 1) for i in range(len(revenue))][::-1]
        years = [str(thisYear + i) for i in range(len(estimatedRevenues))]

        if estimatedIntrinsicValue < 0:
            return None

        return {
            'variable': {
                'requiredRateOfReturn': requiredRateOfReturn,
                'perpetualGrowthRate': perpetualGrowthRate
            },
            'historical': {
                'freeCashFlows': freeCashFlows,
                'sharesOutstanding': sharesOutstanding,
                'netIncomeMargins': netIncomeMargins,
                'netIncome': netIncome,
                'revenue': revenue,
                'revenueGrowthRates': revenueGrowthRates,
                'historicalYears': historicalYears
            },
            'years': years,
            'estimatedTerminalValue': estimatedTerminalValue,
            'estimatedDiscountedTerminalValue': estimatedDiscountedTerminalValue,
            'estimatedDiscountedFactors': estimatedDiscountedFactors,
            'estimatedFreeCashFlowRate': estimatedFreeCashFlowRate,
            'estimatedFreeCashFlowRates': estimatedFreeCashFlowRates,
            'estimatedRevenues': estimatedRevenues,
            'estimatedRevenueGrowthRate': estimatedRevenueGrowthRate,
            'estimatedNetIncomes': estimatedNetIncomes,
            'estimatedNetIncomeMargin': estimatedNetIncomeMargin,
            'estimatedFreeCashFlows': estimatedFreeCashFlows,
            'estimatedPresentValueOfFutureCashFlows': estimatedPresentValueOfFutureCashFlows,
            'estimatedCompanyTodayValue': estimatedCompanyTodayValue,
            'estimatedIntrinsicValue': estimatedIntrinsicValue
        }

    # traditional loop because freeCashFlowRate or estimatedNetIncome can be negative and two negative number result positive
    def __estimateFreeCashFlows(self, estimatedNetIncome, freeCashFlowRate):
        freeCashFlows = [cash['freeCashFlow'] for cash in self.cashFlow][::-1] # historical cash flow, past 4 data_aggregation
        estimateFreeCashFlows = []

        for income in estimatedNetIncome:
            isNegative = income < 0 or freeCashFlowRate < 0
            timePeriodEstimateFreeCashFlow = round(abs(income * freeCashFlowRate), 0)
            if isNegative:
                money = estimateFreeCashFlows[-1] if len(estimateFreeCashFlows) > 0 else freeCashFlows[-1]
                estimateFreeCashFlows += [money - timePeriodEstimateFreeCashFlow]  # company is loosing money
            else:
                estimateFreeCashFlows += [timePeriodEstimateFreeCashFlow]  # company is gaining money
        return freeCashFlows, estimateFreeCashFlows

    def __estimateNetIncome(self, revenue, estimatedRevenue):
        netIncome = [cash['netIncome'] for cash in self.cashFlow][::-1]
        netIncomeMargins = [round(netIncome[i] / revenue[i], 4) for i in range(len(netIncome))]
        estimatedNetIncomeMargin = self.__getNumberFromList(netIncomeMargins)
        estimatedNetIncomes = [round(revenue * estimatedNetIncomeMargin, 0) for revenue in estimatedRevenue]
        return netIncome, netIncomeMargins, estimatedNetIncomeMargin, estimatedNetIncomes

    def __estimateRevenues(self):
        # last 4 year of revenue
        revenues = [income['revenue'] for income in self.incomeStatement][::-1]
        # revenue for current year + next year -> [Current Qrt., Next Qrt., Current Year, Next Year (Sep.)]
        #estimatedRevenue = list(map(lambda data: data['avg'], self.data['analysis']['revenueEstimate'][2:]))
        estimatedRevenue = []

        # calculate for following 2 years
        mergedRevenues = revenues # + estimatedRevenue
        revenueGrowthRates = [round((mergedRevenues[i] - mergedRevenues[i - 1]) / abs(mergedRevenues[i - 1]), 4) for i in
                              range(1, len(mergedRevenues))]
        estimatedRevenueGrowthRate = self.__getNumberFromList(revenueGrowthRates)
        revenueGrowthRates = [None] + revenueGrowthRates[:-2]  # remove current year and next year

        estimatedRevenue.append(round(mergedRevenues[-1] * (1 + estimatedRevenueGrowthRate), 0))
        for _ in range(self.ESTIMATED_TIME_PERIOD):
            estimatedRevenue.append(round(estimatedRevenue[-1] * (1 + estimatedRevenueGrowthRate), 0))

        return revenues, revenueGrowthRates, estimatedRevenueGrowthRate, estimatedRevenue

    def __calculateFreeCashFlowRates(self):
        freeCashFlowRates = [round(cashFlow['freeCashFlow'] / cashFlow['netIncome'], 4) for cashFlow in self.cashFlow]

        # ignore negative rates and anomalies
        positiveFreeCashFlowRates = list(filter(lambda x: (0 < x < 5), freeCashFlowRates))

        if len(positiveFreeCashFlowRates) <= 2:
            raise Exception(f'Less than 3 data in to calculate freeCashFlowRate. Company is losing money')

        freeCashFlowRate = self.__getNumberFromList(positiveFreeCashFlowRates)  # freeCashFlowRates

        return freeCashFlowRate, freeCashFlowRates

    def __getNumberFromList(self, data):
        return round(mean(data), 4)

    '''
        check if at least 3 positive free cash flows
    '''

    def __checkIfCalculationIsPossible(self):
        return len([cash['freeCashFlow'] for cash in self.cashFlow if cash['freeCashFlow'] > 0]) >= 3