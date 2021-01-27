from ExternalAPI.Quandl.QuandlRequester import QuandlRequester


class Quandl(QuandlRequester):
    def __init__(self):
        super(Quandl, self).__init__()

    def __getData(self, name, keyName):
        result = self.loadMainDataForSection(name)
        result = self._formatTimestampForMultipleData(result)
        result['keyName'] = keyName
        return result

    def getAllDataForDocumentKey(self, documentKey):
        data = self._findDataForDocumentKey(documentKey)
        return self._getDataForDocumentKey(data['quandlKey'], data['replacements'], documentKey)

    def getAllDataForQundalKey(self, qundalKey):
        return self._generatInformationProvider(qundalKey)

    def getAllCategories(self):
        return {'categories': self._getAllCategories()}

    # ENPOINTS ---------------------------------

    # https://www.quandl.com/data/MULTPL-S-P-500-Ratios
    def getSP500PartialData(self):
        return self.__getData('S&P 500', 'sp500')

    # https://www.quandl.com/data/SOCSEC-Social-Security-Administration
    def getSocialSecurityPartialData(self):
        return self.__getData('Social security', 'social_security')

    # https://www.quandl.com/data/RATEINF-Inflation-Rates
    def getConsumerPriceIndexByStates(self):
        return self.__getData('Consumer price index states', 'consumer_price_index_states')

    # https://www.quandl.com/data/BLSI-BLS-Inflation-Prices
    def getConsumerUSPriceIndex(self):
        return self.__getData('Consumer US price index', 'consumer_us_price_index')

    # https://www.quandl.com/data/BLSI-BLS-Inflation-Prices
    def getProducerUSPriceIndex(self):
        return self.__getData('Producer US price index', 'producer_us_price_index')

    # https://www.quandl.com/data/RATEINF-Inflation-Rates
    def getInflationRate(self):
        return self.__getData('Inflation rate', 'inflation_rate')

    # https://www.quandl.com/data/ML-Corporate-Bond-Yield-Rates
    def getBondsPartialData(self):
        return self.__getData('Bonds', 'bonds')

    # https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment
    def getEmploymentPartialData(self):
        return self.__getData('Employment', 'employment')

    # https://www.quandl.com/data/BLSN-BLS-International
    def getManufacturingPartialData(self):
        return self.__getData('Manufacturing', 'manufacturing')

    # https://www.quandl.com/data/BLSN-BLS-International
    def getExportsPartialData(self):
        return self.__getData('Exports', 'exports')

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndexPartialData(self):
        return self.__getData('Misery index', 'misery_index')

    #  https://www.quandl.com/data/USTREASURY/YIELD-Treasury-Yield-Curve-Rates
    def getTreasuryYieldPartialData(self):
        return self.__getData('Treasury yield', 'treasury_yield')

    # https://www.quandl.com/data/AAII-Investor-Sentiment
    def getInvestorSentimentPartialData(self):
        return self.__getData('Investor sentiment', 'investor_sentiment')

    # https://www.quandl.com/data/BCHAIN-Blockchain
    def getBitcoinPartialData(self):
        return self.__getData('Bitcoin', 'bitcoin')
