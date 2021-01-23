from ExternalAPI.Quandl.Quandl import Quandl

'''
    Return only yield from https://www.quandl.com/data/ML-Corporate-Bond-Yield-Rates
'''


class Quandl_Bonds(Quandl):
    def __init__(self):
        super(Quandl_Bonds, self).__init__()

    def getAAARatedBond(self):
        return self._generatInformationProvider('ML/AAAEY')

    def getAARatedBond(self):
        return self._generatInformationProvider('ML/AAY')

    def getARatedBond(self):
        return self._generatInformationProvider('ML/AEY')

    def getBBRatedBond(self):
        return self._generatInformationProvider('ML/BBY')

    def getBRatedBond(self):
        return self._generatInformationProvider('ML/BEY')

    def getCCCRatedBond(self):
        return self._generatInformationProvider('ML/CCCY')

    def getCorporateBondIndexYield(self):
        return self._generatInformationProvider('ML/USEY')

    def getCorporateBondHighYieldIndexYield(self):
        return self._generatInformationProvider('ML/USTRI')

    def getCorporateBondHighYieldEmergingMarketIndexYield(self):
        return self._generatInformationProvider('ML/EMHYY')

    def getCorporateBondEuroEmergingMarketIndexYield(self):
        return self._generatInformationProvider('ML/EEMCBI')

    def getDataFromAllCategory(self):
        result = {
            'AAA': self.getAAARatedBond(),
            'AA': self.getAARatedBond(),
            'A': self.getARatedBond(),
            'BB': self.getBBRatedBond(),
            'B': self.getBRatedBond(),
            'CCC': self.getCCCRatedBond(),
            'CorporateBondIndexYield': self.getCorporateBondIndexYield(),
            'CorporateBondHighYieldIndexYield': self.getCorporateBondHighYieldIndexYield(),
            'CorporateBondHighYieldEmergingMarketIndexYield': self.getCorporateBondHighYieldEmergingMarketIndexYield(),
            'CorporateBondEuroEmergingMarketIndexYield': self.getCorporateBondEuroEmergingMarketIndexYield(),
        }
        self._formatTimestampForMultipleData(result)
        return result
