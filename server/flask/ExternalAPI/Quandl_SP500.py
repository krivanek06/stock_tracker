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


    def getPriceToSaleQrt(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.PriceToSaleQrtFolder, 'MULTPL/SP500_PSR_QUARTER', ['Price to sale'])

    def getBookValueQrt(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.BookValueQrtFolder, 'MULTPL/SP500_BVPS_QUARTER', ['Book value'])

    def getSalesGrowthQrt(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.SalesGrowthQrtFolder, 'MULTPL/SP500_SALES_GROWTH_QUARTER', ['Sales growth'])

    def getDividendPerMonth(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.DividendPerMonthFolder, 'MULTPL/SP500_DIV_MONTH', ['Dividends'])

    def getPriceToBookQrt(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.PriceToBookQrtFolder, 'MULTPL/SP500_PBV_RATIO_QUARTER', ['Price to book'])

    def getEarningsYieldMonth(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.EarningsYieldMonthFolder, 'MULTPL/SP500_EARNINGS_YIELD_MONTH', ['Earnings yield'])

    def getDividendYieldMonth(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.DividendYieldMonthFolder, 'MULTPL/SP500_DIV_YIELD_MONTH', ['Dividend yield'])

    def getPeRatioMonth(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.PeRatioMonthFolder, 'MULTPL/SP500_PE_RATIO_MONTH', ['PE ratio'])


    def getPartialDataFromAllCategory(self):
        numberOfDataSet = 25
        result = {
            'priceToSale': self.getPriceToSaleQrt(numberOfDataSet),
            'bookValue': self.getBookValueQrt(numberOfDataSet),
            'salesGrowth': self.getSalesGrowthQrt(numberOfDataSet),
            'dividends': self.getDividendPerMonth(numberOfDataSet),
            'priceToBook': self.getPriceToBookQrt(numberOfDataSet),
            'earningsYield': self.getEarningsYieldMonth(numberOfDataSet),
            'dividendYield': self.getDividendYieldMonth(numberOfDataSet),
            'peRatio': self.getPeRatioMonth(numberOfDataSet)
        }
        return result