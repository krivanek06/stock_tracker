from ExternalAPI.Quandl.QuandlRequester import QuandlRequester

# https://www.quandl.com/data/BCHAIN-Blockchain
class Quandl_Requester_Bitcoin(QuandlRequester):
    def __init__(self):
        super(Quandl_Requester_Bitcoin, self).__init__()

    def getTransactionFeesUSD(self):
        return self._generatInformationProvider('BCHAIN/TRFUS', ['Transaction fees'])

    def getTransactionTime(self):
        return self._generatInformationProvider('BCHAIN/ATRCT', ['Transaction time'])

    def getMarketCap(self):
        return self._generatInformationProvider('BCHAIN/MKTCP', ['Market cap'])

    def getCostPerTransaction(self):
        return self._generatInformationProvider('BCHAIN/CPTRA', ['Transaction cost'])

    def getNumberOfTransactionsPerDay(self):
        return self._generatInformationProvider('BCHAIN/NTRAN', ['Daily transactions'])

    def getExchangeTradingVolume(self):
        return self._generatInformationProvider('BCHAIN/TRVOU', ['Traiding volume'])

    def getMarketPrice(self):
        return self._generatInformationProvider('BCHAIN/MKPRU', ['Market price'])

    def getDataFromAllCategory(self):
        result = {
            'transactionFees': self.getTransactionFeesUSD(),
            'transactionTime': self.getTransactionTime(),
            'marketCap': self.getMarketCap(),
            'costPerTransaction': self.getCostPerTransaction(),
            'transactionsPerDay': self.getNumberOfTransactionsPerDay(),
            'tradingVolume': self.getExchangeTradingVolume(),
            'marketPrice': self.getMarketPrice(),
        }
        return result