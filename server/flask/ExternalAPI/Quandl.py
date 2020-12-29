from private_data import enviroments
from Services import FileManagerService
from calendar import timegm
from ExternalAPI import utils
from datetime import datetime
from requests import get


class Quandl:
    def __init__(self):
        self.APIKEY = enviroments.QUANDL_SECRET_KEY
        self.__FOLDER = 'resource/chart_data'
        self.InvestorSentimentFolder = 'investor_sentiment.json'
        self.TreasuryYieldCurveRatesFolder = 'treasury_yield_curve_rates.json'
        self.MiseryIndexFolder = 'misery_index.json'

        self.fileManagerService = FileManagerService.FileManagerService(self.__FOLDER)

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndex(self, numberOfDataSet=None):
        dataKeys = ['Unemployment Rate', 'Inflation Rate', 'Misery Index']
        return self._generatInformationProvider(numberOfDataSet, self.MiseryIndexFolder, "USMISERY/INDEX", dataKeys)

    # https://www.quandl.com/data/USTREASURY-US-Treasury
    def getTreasuryYieldCurveRates(self, numberOfDataSet=None):
        dataKeys = ['6 MO', '1 YR', '5 YR', '10 YR', '20 YR', '30 YR']
        return self._generatInformationProvider(numberOfDataSet, self.TreasuryYieldCurveRatesFolder, "USTREASURY/YIELD", dataKeys)

    def getInvestorSentiment(self, numberOfDataSet=None):
        dataKeys = ['Bullish', 'Neutral', 'Bearish']
        return self._generatInformationProvider(numberOfDataSet, self.InvestorSentimentFolder, "AAII/AAII_SENTIMENT",  dataKeys)

    def _generatInformationProvider(self, numberOfDataSet, folder, quandalKey, customKeys=None):
        # check if already cashed and not older than 3 days

        lastModification = self.fileManagerService.getDocumentLastModification(folder)
        if lastModification is not None and lastModification[1] < 5:
            data = self.fileManagerService.getJsonFile(folder)
        else:
            params = {'download_type': 'full', 'api_key': self.APIKEY}
            data = get('https://www.quandl.com/api/v3/datasets/' + quandalKey, params=params).json()['dataset']
            data = self._formatData(data, customKeys)
            self.fileManagerService.saveFile(folder, data)

        return {'result': self._getOnlyPartialData(data, numberOfDataSet)}


    def _getOnlyPartialData(self, data, numberOfPartialData=75):
        if numberOfPartialData is not None:
            result = [{
                'name': d['name'],
                'data': d['data'][-numberOfPartialData:]
                } for d in data]
            return result
        return data

    '''
        for each key in arrayKeys return 
            {
                t_key: [[timestamp, value], [timestamp. value] ],
                name: "t key"
            }
    '''
    def _formatData(self, data, customKeys=None):
        keys = [utils.changeUnsupportedCharacters(k) for k in data['column_names'][1:]]

        result = {key: [] for key in keys}

        # example of block -> [ "1948-01-31", 3.4, 10.23, 13.63 ]
        for block in data['data']:
            timestamp = timegm(datetime.strptime(block[0], "%Y-%m-%d").utctimetuple()) * 1000  # milliseconds
            for i in range(len(block[1:])):
                result[keys[i]].append([timestamp, block[i + 1]])

        # wrong order, newest was at the beginning
        for d in result:
            result[d].reverse()

        customKeys = keys if customKeys is None else customKeys
        result = [{
            'name': customKeys[i],
            'data': result[keys[i]]
        } for i in range(len(customKeys))]

        return result

