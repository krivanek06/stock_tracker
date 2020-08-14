from ExternalAPI.Quandl import Quandl

# https://www.quandl.com/data/MULTPL-S-P-500-Ratios


class Quandl_SP500(Quandl):
    def __init__(self):
        super(Quandl_SP500, self).__init__()
        self.DividendYieldMonthFolder = 'sp500_data_dividendYieldMonth.json'
        self.PeRatioMonthFolder = 'sp500_data_peRatioMonth.json'
        self.EarningsYieldMonthFolder = 'sp500_data_earningsYieldMonth.json'
        self.PriceToBookQrtFolder = 'sp500_data_priceToBookQrt.json'
        self.DividendPerMonthFolder = 'sp500_data_dividendPerMonth.json'
        self.SalesGrowthQrtFolder = 'sp500_data_salesGrowthQrt.json'
        self.BookValueQrtFolder = 'sp500_data_bookValueQrt.json'
        self.PriceToSaleQrtFolder = 'sp500_data_priceToSaleQrt.json'


    def getPriceToSaleQrt(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.PriceToSaleQrtFolder, 'MULTPL/SP500_PSR_QUARTER')

    def getBookValueQrt(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.BookValueQrtFolder, 'MULTPL/SP500_BVPS_QUARTER')

    def getSalesGrowthQrt(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.SalesGrowthQrtFolder, 'MULTPL/SP500_SALES_GROWTH_QUARTER')

    def getDividendPerMonth(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.DividendPerMonthFolder, 'MULTPL/SP500_DIV_MONTH')

    def getPriceToBookQrt(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.PriceToBookQrtFolder, 'MULTPL/SP500_PBV_RATIO_QUARTER')

    def getEarningsYieldMonth(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.EarningsYieldMonthFolder, 'MULTPL/SP500_EARNINGS_YIELD_MONTH')

    def getDividendYieldMonth(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.DividendYieldMonthFolder, 'MULTPL/SP500_DIV_YIELD_MONTH')

    def getPeRatioMonth(self, numberOfDataSet, allData):
        return self._generatInformationProvider(numberOfDataSet, allData, self.PeRatioMonthFolder, 'MULTPL/SP500_PE_RATIO_MONTH')


    def getPartialDataFromAllCategory(self):
        numberOfDataSet = 25
        result = {
            'priceToSale': self.getPriceToSaleQrt(numberOfDataSet, False),
            'bookValue': self.getBookValueQrt(numberOfDataSet, False),
            'salesGrowth': self.getSalesGrowthQrt(numberOfDataSet, False),
            'dividends': self.getDividendPerMonth(numberOfDataSet, False),
            'priceToBook': self.getPriceToBookQrt(numberOfDataSet, False),
            'earningsYield': self.getEarningsYieldMonth(numberOfDataSet, False),
            'dividendYield': self.getDividendYieldMonth(numberOfDataSet, False),
            'peRatio': self.getPeRatioMonth(numberOfDataSet, False)
        }
        return result