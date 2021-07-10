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
            beta = round(self.data['companyData']['defaultKeyStatistics']['beta'], 2)
            Rm = 0.10  # expected return of market (SP500)

            return {'result': round(Rf + beta * (Rm - Rf), 4), 'Rf': Rf, 'Beta': beta, 'Rm': Rm}
        except:
            return None
