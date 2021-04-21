class FundamentalServiceCalculator:
    def __init__(self, data):
        self.data = data
        self.symbol = self.data['id']

    def calculateNetIncomeMargin(self, period):
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

    def calculateFreeCashFlow(self, period):
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
                # netBorrowings = 0  # self.data['cashFlow'][period]['netBorrowings']['data'][i] # may be added
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
