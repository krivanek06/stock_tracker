'''
    Calculating intrinsic value of the company by discounted cash flow method
    link > https://www.youtube.com/watch?v=fd_emLLzJnk&ab_channel=LearntoInvest

    Creating 2 calculating byt taking lowest % growth or average growth for last 4 years

    By using this method the following assumptions were made about the company:
        - company does not pay dividends (or very small)
        - free cash flow is aligned with profitability

    Do not forget to add margin of safety to the end intrinsic value
'''
from statistics import mean
from enum import Enum


class RISK_TOLERANCE_ENUM(Enum):
    LOW_RISK = 'LOW_RISK',
    MEDIUM_RISK = 'MEDIUM_RISK',
    HIGH_RISK = 'HIGH_RISK'


class FundamentalServiceDCFCalculation:
    def __init__(self, data):
        self.data = data
        self.balanceSheet = self.data['balanceSheet']['yearly']
        self.cashFlow = self.data['cashFlow']['yearly']
        self.incomeStatement = self.data['incomeStatement']['yearly']
        self.ESTIMATED_TIME_PERIOD = 2  # how much further in time to go
        self.riskTolerance = None

    def calculateDFC(self):
        try:
            if not self.__checkIfCalculationIsPossible():
                return None
            return self.__calculateDFC(RISK_TOLERANCE_ENUM.MEDIUM_RISK)
        except Exception as e:
            print(e)
            return None
        # return {
        # RISK_TOLERANCE_ENUM.LOW_RISK.name: self.__calculateDFC(RISK_TOLERANCE_ENUM.LOW_RISK),
        # RISK_TOLERANCE_ENUM.MEDIUM_RISK.name: self.__calculateDFC(RISK_TOLERANCE_ENUM.MEDIUM_RISK),
        # RISK_TOLERANCE_ENUM.HIGH_RISK.name: self.__calculateDFC(RISK_TOLERANCE_ENUM.HIGH_RISK)
        # }

    # TODO do not forget to add time periods - how to know which year
    def __calculateDFC(self, riskTolerance):
        self.riskTolerance = riskTolerance

        estimatedFreeCashFlowRate, estimatedFreeCashFlowRates = self.__calculateFreeCashFlowRates()
        estimatedRevenues, estimatedRevenueGrowthRates = self.__estimateRevenues()
        estimatedNetIncomes, estimatedNetIncomeMargins = self.__estimateNetIncome(estimatedRevenues)
        estimatedFreeCashFlows = self.__estimateFreeCashFlows(estimatedNetIncomes, estimatedFreeCashFlowRate)

        WACC = self.__calculateWACC()
        requiredRateOfReturn = WACC['result']  # this number may be personalized, but generally using WACC
        sharesOutstanding = self.data['summary']['sharesOutstanding']
        perpetualGrowthRate = 0.025  # constant growth rate - 2.5% -  rate of which free cash flow gonna grow forever

        terminalValue = round((estimatedFreeCashFlows[-1] * (1 + perpetualGrowthRate)) / (requiredRateOfReturn - perpetualGrowthRate), 0)

        discountedFactors = [round((1 + requiredRateOfReturn) ** i, 2) for i in range(1, self.ESTIMATED_TIME_PERIOD + 2 + 1)]
        discountedTerminalValue = round(terminalValue / discountedFactors[-1], 0)

        estimatedPresentValueOfFutureCashFlows = [round(estimatedFreeCashFlows[-4 + i] / discountedFactors[i], 0) for i in range(4)]

        estimatedCompanyTodayValue = sum(estimatedPresentValueOfFutureCashFlows) + discountedTerminalValue
        intrinsicValue = round(estimatedCompanyTodayValue / sharesOutstanding, 2)
        return {
            'estimations': {
                'estimatedFreeCashFlowRate': estimatedFreeCashFlowRate,
                'estimatedFreeCashFlowRates': estimatedFreeCashFlowRates,
                'estimatedRevenues': estimatedRevenues,
                'estimatedRevenueGrowthRates': estimatedRevenueGrowthRates,
                'estimatedNetIncomes': estimatedNetIncomes,
                'estimatedNetIncomeMargins': estimatedNetIncomeMargins,
                'estimatedFreeCashFlows': estimatedFreeCashFlows,
                'estimatedPresentValueOfFutureCashFlows': estimatedPresentValueOfFutureCashFlows,
                'estimatedCompanyTodayValue': estimatedCompanyTodayValue
            },
            'variable': {
                'requiredRateOfReturn': requiredRateOfReturn,
                'perpetualGrowthRate': perpetualGrowthRate
            },
            'WACC': WACC,
            'sharesOutstanding': sharesOutstanding,
            'terminalValue': terminalValue,
            'discountedTerminalValue': discountedTerminalValue,
            'discountedFactors': discountedFactors,
            'intrinsicValue': intrinsicValue
        }

    # traditional loop because freeCashFlowRate or estimatedNetIncome can be negative and two negative number result positive
    def __estimateFreeCashFlows(self, estimatedNetIncome, freeCashFlowRate):
        estimateFreeCashFlows = self.cashFlow['freeCashFlow']['data'][::-1]  # historical cash flow, past 4 period
        # estimateFreeCashFlows += [round(income * freeCashFlowRate, 0) for income in estimatedNetIncome[len(estimateFreeCashFlows):]]
        for income in estimatedNetIncome[len(estimateFreeCashFlows):]:
            isNegative = income < 0 or freeCashFlowRate < 0
            timePeriodEstimateFreeCashFlow = round(abs(income * freeCashFlowRate), 0)
            if isNegative:
                estimateFreeCashFlows += [estimateFreeCashFlows[-1] - timePeriodEstimateFreeCashFlow]  # company is loosing money
            else:
                estimateFreeCashFlows += [timePeriodEstimateFreeCashFlow]  # company is gaining money
        return estimateFreeCashFlows

    def __estimateNetIncome(self, estimatedRevenue):
        netIncome = self.cashFlow['netIncome']['data'][::-1]
        netIncomeMargins = [round(netIncome[i] / estimatedRevenue[i], 4) for i in range(len(netIncome))]  # or net income margins
        netIncomeGrowthRate = self.__getNumberFromList(netIncomeMargins)

        netIncomeMargins += [netIncomeGrowthRate] * 4  # just to have a nice table
        netIncome += [round(revenue * netIncomeGrowthRate, 0) for revenue in estimatedRevenue[len(netIncome):]]
        return netIncome, netIncomeMargins

    def __estimateRevenues(self):
        # last 4 year of revenue
        revenues = self.incomeStatement['totalRevenue']['data'][::-1]
        # revenue for current year + next year -> [Current Qrt., Next Qrt., Current Year, Next Year (Sep.)]
        revenues += list(map(lambda data: data['avg'], self.data['analysis']['revenueEstimate'][2:]))

        # calculate for following 2 years
        revenueGrowthRates = [round((revenues[i] - revenues[i - 1]) / abs(revenues[i - 1]), 4) for i in range(1, len(revenues))]
        revenueGrowthRate = 1 + self.__getNumberFromList(revenueGrowthRates)
        for _ in range(self.ESTIMATED_TIME_PERIOD):
            revenues.append(round(revenues[-1] * revenueGrowthRate, 0))
            revenueGrowthRates.append(revenueGrowthRate)

        return revenues, revenueGrowthRates

    def __calculateFreeCashFlowRates(self):
        freeCashFlowRates = []
        for i in range(len(self.cashFlow['freeCashFlow']['data'])):
            freeCashFlow = self.cashFlow['freeCashFlow']['data'][i]
            netIncome = self.cashFlow['netIncome']['data'][i]
            freeCashFlowRates += [round(freeCashFlow / netIncome, 4)]

        positiveFreeCashFlowRates = list(filter(lambda x: (x > 0), freeCashFlowRates))

        if len(positiveFreeCashFlowRates) <= 2:
            raise Exception(f'Less than 3 data in to calculate freeCashFlowRate. Company is losing money')

        freeCashFlowRate = self.__getNumberFromList(positiveFreeCashFlowRates)  # freeCashFlowRates
        freeCashFlowRates += 4 * [freeCashFlowRate]  # just to have a nice table

        return freeCashFlowRate, freeCashFlowRates

    ''' 
        link > https://www.youtube.com/watch?v=0inqw9cCJnM&ab_channel=LearntoInvest
        equation > WACC = Wd * Rd * (1 - taxRate) + We * Re
    '''

    def __calculateWACC(self):
        interestExpense = self.incomeStatement['interestExpense']['data'][0]
        totalDebt = self.balanceSheet['longTermDebt']['data'][0] + self.balanceSheet['shortLongTermDebt']['data'][0]
        Rd = round(abs(interestExpense / totalDebt), 4)  # cost of debt
        taxRate = round(self.incomeStatement['incomeTaxExpense']['data'][0] / self.incomeStatement['incomeBeforeTax']['data'][0], 4)  # percent

        if self.data['companyData']['defaultKeyStatistics'].get('beta', None) is not None:
            CAPM = self.__calculateCAPM()
            Re = CAPM['result']  # cost of equity
        else:
            CAPM = None
            Re = 0.1
        taxAdjustedCostOfDebt = Rd * (1 - taxRate)
        totalDebt = self.data['companyData']['financialData']['totalDebt']
        Wd = round(totalDebt / (totalDebt + self.data['summary']['marketCap']), 4)  # weight of debt
        We = round(1 - Wd, 4)  # weight of equity
        wacc = round(Wd * taxAdjustedCostOfDebt + We * Re, 4)
        return {'result': wacc, 'CAPM': CAPM, 'Wd': Wd, 'Rd': Rd, 'taxRate': taxRate, 'We': We, 'Re': Re}

    '''
        Capital Asset pricing model
        link > https://www.youtube.com/watch?v=-fCYZjNA7Ps&ab_channel=LearntoInvest
        equation > Ra = Rf + Beta * (Rm - Rf)
    '''

    def __calculateCAPM(self):
        Rf = 0.025  # Risk free rate - hardcoded 2.5% , TODO may be 10y US treasury yield
        beta = round(self.data['companyData']['defaultKeyStatistics']['beta'], 2)
        Rm = 0.10  # expected return of market (SP500)

        return {'result': round(Rf + beta * (Rm - Rf), 4), 'Rf': Rf, 'Beta': beta, 'Rm': Rm}

    def __getNumberFromList(self, data):
        if self.riskTolerance == RISK_TOLERANCE_ENUM.LOW_RISK:
            return round(min(data), 4)
        if self.riskTolerance == RISK_TOLERANCE_ENUM.MEDIUM_RISK:
            return round(mean(data), 4)
        if self.riskTolerance == RISK_TOLERANCE_ENUM.HIGH_RISK:
            return round(max(data), 4)
        raise Exception('Risk tolerance is not defined')

    '''
        check if at least 3 positive free cash flows
    '''

    def __checkIfCalculationIsPossible(self):
        positiveCashFlows = list(filter(lambda x: (x > 0), self.cashFlow['freeCashFlow']['data']))
        if len(positiveCashFlows) < 3:
            return False
        return True
