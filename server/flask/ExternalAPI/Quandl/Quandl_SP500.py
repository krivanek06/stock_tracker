from ExternalAPI.Quandl.Quandl import Quandl


# https://www.quandl.com/data/MULTPL-S-P-500-Ratios


class Quandl_SP500(Quandl):
    def __init__(self):
        super(Quandl_SP500, self).__init__()

    def getPriceToSaleQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_PSR_QUARTER', ['Price to sale'])

    def getBookValueQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_BVPS_QUARTER', ['Book value'])

    def getSalesGrowthQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_REAL_SALES_GROWTH_QUARTER', ['Sales growth'])

    def getRealSaleshQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_REAL_SALES_QUARTER', ['Sales'])

    def getDividendPerMonth(self):
        return self._generatInformationProvider('MULTPL/SP500_DIV_MONTH', ['Dividends'])

    def getPriceToBookQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_PBV_RATIO_QUARTER', ['Price to book'])

    def getEarningsYieldMonth(self):
        return self._generatInformationProvider('MULTPL/SP500_EARNINGS_YIELD_MONTH', ['Earnings yield'])

    def getEarningsGrowthQrt(self):
        return self._generatInformationProvider('MULTPL/SP500_EARNINGS_GROWTH_QUARTER', ['Earnings growth'])

    def getEarnings(self):
        return self._generatInformationProvider('MULTPL/SP500_EARNINGS_MONTH', ['Earnings'])

    def getDividendYieldMonth(self):
        return self._generatInformationProvider('MULTPL/SP500_DIV_YIELD_MONTH', ['Dividend yield'])

    def getDividendGrowth(self):
        return self._generatInformationProvider('MULTPL/SP500_DIV_GROWTH_QUARTER', ['Dividend growth'])

    def getPeRatioMonth(self):
        return self._generatInformationProvider('MULTPL/SP500_PE_RATIO_MONTH', ['PE ratio'])

    def getShillerPeRatioMonth(self):
        return self._generatInformationProvider('MULTPL/SHILLER_PE_RATIO_MONTH', ['Shiller PE ratio'])

    def getDataFromAllCategory(self):
        result = {
            'priceToSale': self.getPriceToSaleQrt(),
            'priceToBook': self.getPriceToBookQrt(),
            'bookValue': self.getBookValueQrt(),
            'salesGrowth': self.getSalesGrowthQrt(),
            'sales': self.getRealSaleshQrt(),
            'dividends': self.getDividendPerMonth(),
            'dividendYield': self.getDividendYieldMonth(),
            'dividendGrowth': self.getDividendGrowth(),
            'earnings': self.getEarnings(),
            'earningsYield': self.getEarningsYieldMonth(),
            'earningsGrowth': self.getEarningsGrowthQrt(),
            'peRatio': self.getPeRatioMonth(),
            'shillerPE': self.getShillerPeRatioMonth()
        }

        self._formatTimestampForMultipleData(result)
        return result
