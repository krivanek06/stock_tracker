from ExternalAPI.Quandl import Quandl

# https://www.quandl.com/data/BCHAIN-Blockchain
class Quandl_Bitcoin(Quandl):
    def __init__(self):
        super(Quandl_Bitcoin, self).__init__()
        self.MarketPriceFolder = 'bitcoin_marketPrice.json'
        self.ExchangeTradingVolumeFolder = 'bitcoin_exchangeTradingVolume.json'
        self.NumberOfTransactionsPerDayFolder = 'bitcoin_numberOfTransactionsPerDay.json'
        self.CostPerTransactionFolder = 'bitcoin_costPerTransaction.json'
        self.MarketCapFolder = 'bitcoin_marketCap.json'
        self.TransactionTimeFolder = 'bitcoin_transactionTime.json'
        self.TransactionFeesFolder = 'bitcoin_transactionFeesUSD.json'


    def getTransactionFeesUSD(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.TransactionFeesFolder, 'BCHAIN/TRFUS')

    def getTransactionTime(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.TransactionTimeFolder, 'BCHAIN/ATRCT')

    def getMarketCap(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.MarketCapFolder, 'BCHAIN/MKTCP')

    def getCostPerTransaction(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.CostPerTransactionFolder, 'BCHAIN/CPTRA')

    def getNumberOfTransactionsPerDay(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.NumberOfTransactionsPerDayFolder, 'BCHAIN/NTRAN')

    def getExchangeTradingVolume(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.ExchangeTradingVolumeFolder,'BCHAIN/TRVOU')

    def getMarketPrice(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.MarketPriceFolder, 'BCHAIN/MKPRU')

    def getPartialDataFromAllCategory(self):
        numberOfDataSet = 75
        result = {
            'transactionFees': self.getTransactionFeesUSD(numberOfDataSet),
            'transactionTime': self.getTransactionTime(numberOfDataSet),
            'marketCap': self.getMarketCap(numberOfDataSet),
            'costPerTransaction': self.getCostPerTransaction(numberOfDataSet),
            'transactionsPerDay': self.getNumberOfTransactionsPerDay(numberOfDataSet),
            'tradingVolume': self.getExchangeTradingVolume(numberOfDataSet),
            'marketPrice': self.getMarketPrice(numberOfDataSet),
        }
        return result