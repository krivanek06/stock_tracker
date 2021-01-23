
from ExternalAPI.Quandl.Quandl import Quandl

# https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment?page=4

class Quandl_Employment(Quandl):
    def __init__(self):
        super(Quandl_Employment, self).__init__()

    def getGovernmentIndustry(self):
        return self._generatInformationProvider('BLSE/CES9000000001', ['Government industry'])

    def getServiceProvidingIndustry(self):
        return self._generatInformationProvider( 'BLSE/CES0700000001', ['Service providing industry'])

    def getGoodsProducingIndustry(self):
        return self._generatInformationProvider('BLSE/CES0600000001', ['Goods producing industry'])

    def getPrivateIndustry(self):
        return self._generatInformationProvider('BLSE/CES0500000001', ['Private industry'])

    def getDataFromAllCategory(self):
        result = {
            'governmentIndustry': self.getGovernmentIndustry(),
            'serviceProvidingIndustry': self.getServiceProvidingIndustry(),
            'goodProducingIndustry': self.getGoodsProducingIndustry(),
            'privateIndustry': self.getPrivateIndustry()
        }
        return result
