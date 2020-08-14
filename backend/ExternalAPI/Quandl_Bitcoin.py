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


    def getTransactionFeesUSD(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.TransactionFeesFolder, 'BCHAIN/TRFUS')

    def getTransactionTime(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.TransactionTimeFolder, 'BCHAIN/ATRCT')

    def getMarketCap(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.MarketCapFolder, 'BCHAIN/MKTCP')

    def getCostPerTransaction(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.CostPerTransactionFolder, 'BCHAIN/CPTRA')

    def getNumberOfTransactionsPerDay(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.NumberOfTransactionsPerDayFolder, 'BCHAIN/NTRAN')

    def getExchangeTradingVolume(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.ExchangeTradingVolumeFolder,'BCHAIN/TRVOU')

    def getMarketPrice(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.MarketPriceFolder, 'BCHAIN/MKPRU')

    def getPartialDataFromAllCategory(self):
        numberOfDataSet = 75
        result = {
            'transactionFees': self.getTransactionFeesUSD(numberOfDataSet, False),
            'transactionTime': self.getTransactionTime(numberOfDataSet, False),
            'marketCap': self.getMarketCap(numberOfDataSet, False),
            'costPerTransaction': self.getCostPerTransaction(numberOfDataSet, False),
            'transactionsPerDay': self.getNumberOfTransactionsPerDay(numberOfDataSet, False),
            'tradingVolume': self.getExchangeTradingVolume(numberOfDataSet, False),
            'marketPrice': self.getMarketPrice(numberOfDataSet, False),
        }
        return result