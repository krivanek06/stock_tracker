
from ExternalAPI.Quandl import Quandl

# https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment?page=4

class Quandl_Employment(Quandl):
    def __init__(self):
        super(Quandl_Employment, self).__init__()
        self.GovernmentIndustryFolder = 'employment_governmentIndustry.json'
        self.ServiceProvidingIndustryFolder = 'employment_serviceProvidingIndustry.json'
        self.GoodsProducingIndustryFolder = 'employment_goodsProducingIndustry.json'
        self.PrivateIndustryFolder = 'employment_privateIndustry.json'

    def getGovernmentIndustry(self, numberOfDataSet = None):
        return self._generatInformationProvider(numberOfDataSet, self.GovernmentIndustryFolder, 'BLSE/CES9000000001')

    def getServiceProvidingIndustry(self, numberOfDataSet = None):
        return self._generatInformationProvider(numberOfDataSet, self.ServiceProvidingIndustryFolder, 'BLSE/CES0700000001')

    def getGoodsProducingIndustry(self, numberOfDataSet = None):
        return self._generatInformationProvider(numberOfDataSet, self.GoodsProducingIndustryFolder, 'BLSE/CES0600000001')

    def getPrivateIndustry(self, numberOfDataSet=None):
        return self._generatInformationProvider(numberOfDataSet, self.PrivateIndustryFolder, 'BLSE/CES0500000001')

    def getPartialDataFromAllCategory(self):
        numberOfDataSet = 25
        result = {
            'governmentIndustry': self.getGovernmentIndustry(numberOfDataSet),
            'serviceProvidingIndustry': self.getServiceProvidingIndustry(numberOfDataSet),
            'goodProducingIndustry': self.getGoodsProducingIndustry(numberOfDataSet),
            'privateIndustry': self.getPrivateIndustry(numberOfDataSet)
        }
        return result
