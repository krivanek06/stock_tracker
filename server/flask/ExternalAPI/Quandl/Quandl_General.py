from ExternalAPI.Quandl.Quandl import Quandl


# https://www.quandl.com/data/MULTPL-S-P-500-Ratios


class QuandlGeneral(Quandl):
    def __init__(self):
        super(QuandlGeneral, self).__init__()

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndex(self):
        dataKeys = ['Unemployment Rate', 'Inflation Rate', 'Misery Index']
        return self._generatInformationProvider("USMISERY/INDEX", dataKeys, True)

    # https://www.quandl.com/data/USTREASURY-US-Treasury
    def getTreasuryYieldCurveRates(self):
        res = self._generatInformationProvider("USTREASURY/YIELD", None, True)
        res['result'].pop(1)  # removing 2MO, not many data

        return res

    #  https://www.quandl.com/data/AAII-Investor-Sentiment
    def getInvestorSentiment(self):
        dataKeys = ['Bullish', 'Neutral', 'Bearish']
        return self._generatInformationProvider("AAII/AAII_SENTIMENT", dataKeys, True)
