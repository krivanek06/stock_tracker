from ExternalAPI.Quandl.QuandlRequester import QuandlRequester


class Quandl(QuandlRequester):
    def __init__(self):
        super(Quandl, self).__init__()

    def __getData(self, name):
        result = self.loadMainDataForSection(name)
        result = self._formatTimestampForMultipleData(result)
        return result

    # https://www.quandl.com/data/MULTPL-S-P-500-Ratios
    def getSP500PartialData(self):
        return {'sp500': self.__getData('S&P 500')}

    # https://www.quandl.com/data/RATEINF-Inflation-Rates
    def getConsumerPriceIndex(self):
        return {'consumer_price': self.__getData('Consumer price')}

    # https://www.quandl.com/data/RATEINF-Inflation-Rates
    def getInflationRate(self):
        return {'inflation_rate': self.__getData('Inflation rate')}

    # https://www.quandl.com/data/ML-Corporate-Bond-Yield-Rates
    def getBondsPartialData(self):
        return {'bonds': self.__getData('Bonds')}

    # https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment
    def getEmploymentPartialData(self):
        return {'employment': self.__getData('Employment')}

    # https://www.quandl.com/data/BLSN-BLS-International
    def getManufacturingPartialData(self):
        return {'manufacturing': self.__getData('Manufacturing')}

    # https://www.quandl.com/data/BLSN-BLS-International
    def getExportsPartialData(self):
        return {'exports': self.__getData('Exports')}

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndexPartialData(self):
        return {'misery_index': self.__getData('Misery index')}

    #  https://www.quandl.com/data/USTREASURY/YIELD-Treasury-Yield-Curve-Rates
    def getTreasuryYieldPartialData(self):
        return {'treasury_yield': self.__getData('Treasury yield')}

    # https://www.quandl.com/data/AAII-Investor-Sentiment
    def getInvestorSentimentPartialData(self):
        return {'investor_sentiment': self.__getData('Investor sentiment')}

    # https://www.quandl.com/data/BCHAIN-Blockchain
    def getBitcoinPartialData(self):
        return {'bitcoin': self.__getData('Bitcoin')}
