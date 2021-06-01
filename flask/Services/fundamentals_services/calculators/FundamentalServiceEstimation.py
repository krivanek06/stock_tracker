from statistics import mean
from datetime import datetime


class FundamentalServiceEstimation:
    def __init__(self, data):
        self.data = data

    '''
        Estimating intrinsic value from average past free cash flow
    '''

    # https://www.youtube.com/watch?v=OyloOasPAFw
    def estimateFCFValuation(self):
        try:
            if self.data['cashFlow']['yearly']['freeCashFlow'] is None or self.data['summary']['sharesOutstanding'] == 0:
                return None

            # inputs
            sharesOutstanding = self.data['summary']['sharesOutstanding']
            capitalExpenditures = self.data['cashFlow']['yearly']['capitalExpenditures']['data'][::-1]
            operatingActivities = self.data['cashFlow']['yearly']['totalCashFromOperatingActivities']['data'][::-1]
            netBorrowings = self.data['cashFlow']['yearly']['netBorrowings']['data'][::-1]
            freeCashFlows = self.data['cashFlow']['yearly']['freeCashFlow']['data'][::-1]

            avgFcf = mean(freeCashFlows)

            # negative free cash flow, company is loosing money
            if avgFcf < 0:
                return None

            minimumRateReturn = self.data['calculations']['WACC'].get('result', 0.1)
            thisYear = datetime.now().year
            historicalYears = [str(thisYear - i - 1) for i in range(len(freeCashFlows))][::-1]

            # calculation
            estimatedIntrinsicMarketCap = round(avgFcf / minimumRateReturn, 0)
            estimatedIntrinsicValue = round(estimatedIntrinsicMarketCap / sharesOutstanding, 2)

            return {
                'sharesOutstanding': sharesOutstanding,
                'avgFcf': avgFcf,
                'minimumRateReturn': minimumRateReturn,
                'freeCashFlows': freeCashFlows,
                'netBorrowings': netBorrowings,
                'capitalExpenditures': capitalExpenditures,
                'operatingActivities': operatingActivities,
                'historicalYears': historicalYears,
                'estimatedIntrinsicMarketCap': estimatedIntrinsicMarketCap,
                'estimatedIntrinsicValue': estimatedIntrinsicValue
            }
        except Exception as e:
            print(e)
            return None

    # https://www.youtube.com/watch?v=TP-DfIHLb50&t=674s
    def estimateIntrinsicFromEarnings(self):
        try:
            eps = self.data['summary']['ePSTTM']
            if eps <= 0:
                return None
            minimumRateReturn = self.data['calculations']['WACC'].get('result', 0.1)
            growthRateNext5y = self.data['analysis']['growthEstimates'][-2]['y']
            earningsNextY = self.data['analysis']['earningsEstimate'][-1]['growth']
            growthRate = mean([earningsNextY, growthRateNext5y])
            terminalMultiple = growthRate * 100

            estimatedEarnings = [eps]
            estimatedDiscountedPV = []
            dates = [datetime.now().year]
            for i in range(1, 11):
                tmpGrowth = growthRate if i <= 5 else growthRate / 2
                estimatedEarnings.append(round(estimatedEarnings[-1] * (1 + tmpGrowth), 2))
                estimatedDiscountedPV.append(round(estimatedEarnings[i] * (1 + minimumRateReturn) ** (-i), 2))
                dates.append(dates[-1] + 1)

            estimatedEarnings.pop(0)  # remove initial eps
            dates.pop(0)  # remove initial year
            dates = [str(d) for d in dates] + ['Terminal value']

            # calculate terminal values
            earningsTerminalValue = round(estimatedEarnings[-1] * terminalMultiple, 2)
            pvTerminalValue = round(earningsTerminalValue * (1 + minimumRateReturn) ** (-len(estimatedDiscountedPV) - 1), 2)

            estimatedIntrinsicValue = round(sum(estimatedDiscountedPV) + pvTerminalValue, 2)
            return {
                'estimatedDiscountedPV': estimatedDiscountedPV + [pvTerminalValue],
                'estimatedEarnings': estimatedEarnings + [earningsTerminalValue],
                'estimatedIntrinsicValue': estimatedIntrinsicValue,
                'dates': dates,
                'eps': eps,
                'variable': {
                    'minimumRateReturn': minimumRateReturn,
                    'terminalMultiple': round(terminalMultiple, 2),
                    'growthRateNext5y': round(growthRate, 4),
                    'growthRateFrom5yTo10y': round(growthRate / 2, 4)
                }
            }

        except Exception as e:
            print(e)
            return None

    # https://www.youtube.com/watch?v=O-x8wqooUKU
    def estimateDividendDiscountedFormula(self):
        try:
            minimumRateReturn = self.data['calculations']['WACC']['result']
            dividendsPerShareTTM = self.data['dividends']['dividendsPerShareTTM']
            dividendGrowthRate = self.data['dividends']['dividendGrowthRateFiveY'] / 100

            minimumRateReturn = dividendGrowthRate * 1.125 if dividendGrowthRate > minimumRateReturn else minimumRateReturn

            # Next year dividend per share / (Required Rate of Return – Dividend Growth Rate)
            estimatedIntrinsicValue = round(dividendsPerShareTTM * (1 + dividendGrowthRate) / (minimumRateReturn - dividendGrowthRate), 2)
            return {
                'estimatedIntrinsicValue': estimatedIntrinsicValue,
                'dividendGrowthRate': dividendGrowthRate,
                'dividendsPerShareTTM': dividendsPerShareTTM,
                'minimumRateReturn': minimumRateReturn
            }
        except:
            return None
