class FundamentalServiceCalculator:
    def __init__(self, data):
        self.data = data
        self.symbol = self.data['id']
        self.balanceSheet = self.data['balanceSheet']['yearly']
        self.cashFlow = self.data['cashFlow']['yearly']
        self.incomeStatement = self.data['incomeStatement']['yearly']

    def calculateNetIncomeMargin(self, period: str):
        netIncome = self.data['cashFlow'][period]['netIncome']['data']
        revenue = self.data['incomeStatement'][period]['totalRevenue']['data']

        netIncomeMargin = {
            'change': [],
            'data': [round(netIncome[i] / revenue[i], 4) for i in range(len(netIncome))],
            'name': 'Free cash flow'
        }
        netIncomeMargin['change'] = [(netIncomeMargin['data'][i] - netIncomeMargin['data'][i + 1]) / abs(netIncomeMargin['data'][i + 1])
                                     for i in range(len(netIncome) - 1)]
        return netIncomeMargin

    def calculateFreeCashFlow(self, period: str):
        freeCashFlow = {
            'change': [],
            'data': [],
            'name': 'Free cash flow'
        }
        dataLength = len(self.data['cashFlow'][period]['totalCashFromOperatingActivities']['data'])
        capitalExpenditures = self.data['cashFlow'][period].get('capitalExpenditures', None)
        operatingActivity = self.data['cashFlow'][period].get('totalCashFromOperatingActivities', None)

        # calculate data
        for i in range(dataLength):
            try:
                # netBorrowings = 0  # self.data['cashFlow'][data_aggregation]['netBorrowings']['data'][i] # may be added
                freeCashFlowNumber = operatingActivity['data'][i]
                freeCashFlowNumber += 0 if capitalExpenditures is None else capitalExpenditures['data'][i]
                freeCashFlow['data'].append(freeCashFlowNumber)
            except:
                freeCashFlow['data'].append(None)

        # calculate change
        for i in range(dataLength):
            try:
                freeCashFlow['change'].append((freeCashFlow['data'][i] - freeCashFlow['data'][i + 1]) / abs(freeCashFlow['data'][i + 1]))
            except:
                freeCashFlow['change'].append(None)

        return freeCashFlow

    ''' 
            link > https://www.youtube.com/watch?v=0inqw9cCJnM&ab_channel=LearntoInvest
            equation > WACC = Wd * Rd * (1 - taxRate) + We * Re
    '''

    def calculateWACC(self):
        interestExpense = self.incomeStatement['interestExpense']['data'][0]
        totalDebt = self.balanceSheet['longTermDebt']['data'][0] + self.balanceSheet['shortLongTermDebt']['data'][0]
        Rd = round(abs(interestExpense / totalDebt), 4)  # cost of debt
        taxRate = round(self.incomeStatement['incomeTaxExpense']['data'][0] / self.incomeStatement['incomeBeforeTax']['data'][0], 4)  # percent

        if self.data['companyData']['defaultKeyStatistics'].get('beta', None) is not None:
            CAPM = self.calculateCAPM()
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

    def calculateCAPM(self):
        Rf = 0.025  # Risk free rate - hardcoded 2.5% , TODO may be 10y US treasury yield
        beta = round(self.data['companyData']['defaultKeyStatistics']['beta'], 2)
        Rm = 0.10  # expected return of market (SP500)

        return {'result': round(Rf + beta * (Rm - Rf), 4), 'Rf': Rf, 'Beta': beta, 'Rm': Rm}