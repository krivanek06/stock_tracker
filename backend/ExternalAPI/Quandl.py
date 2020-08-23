import quandl
import os
from private_data import enviroments
from Services import FileManagerService
from math import isnan


class Quandl:
    def __init__(self):
        quandl.ApiConfig.api_key = os.environ['QUANDL_SECRET_KEY']
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
        return self._generatInformationProvider(numberOfDataSet, self.TreasuryYieldCurveRatesFolder, "USTREASURY/YIELD",
                                                dataKeys)

    def getInvestorSentiment(self, numberOfDataSet=None):
        dataKeys = ['Bullish', 'Neutral', 'Bearish']
        return self._generatInformationProvider(numberOfDataSet, self.InvestorSentimentFolder, "AAII/AAII_SENTIMENT",
                                                dataKeys)

    def _generatInformationProvider(self, numberOfDataSet, folder, quandalKey, dataKeys=None):
        data = self.fileManagerService.getJsonFile(folder)
        # file does not exists, first time download
        if data is None:
            if dataKeys:
                data = self._formatData(dataKeys, quandl.get(quandalKey), False)
            else:
                data = self._formatData(['chartData'], {'chartData': quandl.get(quandalKey)})
            self.fileManagerService.saveFile(folder, data)

        return self._getOnlyPartialData(data, numberOfDataSet) if numberOfDataSet is not None else data

    def _getOnlyPartialData(self, data, numberOfPartialData=75):
        result = {k: data[k]['data'][-numberOfPartialData:] for k in data.keys()}

        return result

    '''
        for each key in arrayKeys return 
            {
                t_key: [[timestamp, value], [timestamp. value] ],
                name: "t key"
            }
    '''

    def _formatData(self, arrayOfKeys, data, hasValueField=True):
        formatedData = {}

        for d in arrayOfKeys:
            if hasValueField:
                timestamp = [k.timestamp() for k in data[d]['Value'].keys()]
                print(d, len(timestamp))
                formatedData[d.replace(' ', '_')] = {
                    'name': d,
                    'data': [[timestamp[i] * 1000, data[d]['Value'][i] if not isnan(data[d]['Value'][i]) else 0]
                             for i in range(len(data[d]))]
                }
            else:
                timestamp = [k.timestamp() for k in data[d].keys()]
                print(d, len(timestamp))
                formatedData[d.replace(' ', '_')] = {
                    'name': d,
                    'data': [[timestamp[i] * 1000, data[d][i] if not isnan(data[d][i]) else 0]
                             for i in range(len(data[d]))]
                }
        return formatedData
