class FundamentalServiceCalculator:
    def __init__(self, data):
        self.data = data

    def calculateNetIncomeMargin(self, period):
        pass

    def calculateFreeCashFlow(self, period):
        freeCashFlow = {
            'change': [],
            'data': [],
            'name': 'Free cash flow'
        }
        # totalCashFromOperatingActivities
        dataLength = len(self.data['cashFlow'][period]['totalCashFromOperatingActivities']['data'])
        capitalExpenditures = self.data['cashFlow'][period].get('capitalExpenditures', None)
        operatingActivity = self.data['cashFlow'][period].get('totalCashFromOperatingActivities', None)
        for i in range(dataLength):
            try:
                # netBorrowings = 0  # self.data['cashFlow'][period]['netBorrowings']['data'][i] # may be added
                freeCashFlowNumber = operatingActivity['data'][i]
                freeCashFlowNumber += 0 if capitalExpenditures is None else capitalExpenditures['data'][i]
                freeCashFlow['data'].append(freeCashFlowNumber)
            except:
                freeCashFlow['data'].append(None)

        for i in range(dataLength):
            try:
                freeCashFlow['change'].append((freeCashFlow['data'][i] - freeCashFlow['data'][i + 1]) / abs(freeCashFlow['data'][i + 1]))
            except:
                freeCashFlow['change'].append(None)

        return freeCashFlow
