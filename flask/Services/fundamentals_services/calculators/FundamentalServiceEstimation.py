class FundamentalServiceEstimation:
    def __init__(self, data):
        self.data = data

    # https://www.youtube.com/watch?v=nX2DcXOrtuo
    def estimateIntrinsicValueV1(self):
        eps = self.data['summary']['ePSTTM']
        growthRateNext5y = self.data['analysis']['growthEstimates'][-2]['y']
        minimumRateReturn = 0.12  # 12%
        growthPeRatio = 2 * growthRateNext5y * 100  # self.data['summary']['forwardPE']

        # earnings for next 10y
        estimatedEarnings = [eps]
        for i in range(9):
            estimatedEarnings.append(round(estimatedEarnings[-1] + (estimatedEarnings[-1] * growthRateNext5y), 3))

        # estimate share price backwards
        estimatedSharePrice = [round(estimatedEarnings[-1] * growthPeRatio, 2)]
        for i in range(9):
            estimatedSharePrice.insert(0, round(estimatedSharePrice[0] / (1 + minimumRateReturn), 2))

        intrinsicValue = estimatedSharePrice[0]
        return {
            'estimatedIntrinsicValue': intrinsicValue,
            'estimatedSharePrice': estimatedSharePrice,
            'estimatedEarnings': estimatedEarnings,
            'growthPeRatio': growthPeRatio,
            'minimumRateReturn': minimumRateReturn,
            'growthRateNext5y': growthRateNext5y,
            'eps': eps
        }

    # https://www.youtube.com/watch?v=O-x8wqooUKU
    def estimateDividendDiscountedFormula(self):
        try:
            WACC = self.data['calculations']['WACC']['result']
            dividendsPerShareTTM = self.data['dividends']['dividendsPerShareTTM']
            dividendGrowthRate = self.data['dividends']['dividendGrowthRateFiveY'] / 100
            result = round(dividendsPerShareTTM * (1 + dividendGrowthRate) / (WACC - dividendGrowthRate), 2)
            return {
                'result': result,
                'dividendGrowthRate': dividendGrowthRate,
                'dividendsPerShareTTM': dividendsPerShareTTM,
                'WACC': WACC
            }
        except:
            return None
