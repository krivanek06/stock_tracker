import quandl
import os
from private_data import enviroments
from Services import  FileManagerService


class Quandl:
    def __init__(self):
        quandl.ApiConfig.api_key = os.environ['QUANDL_SECRET_KEY']
        self.__FOLDER = 'resource/chart_data'
        self.InvestorSentimentFolder = 'investor_sentiment.json'
        self.TreasuryYieldCurveRatesFolder = 'treasury_yield_curve_rates.json'
        self.MiseryIndexFolder = 'misery_index.json'

        self.fileManagerService = FileManagerService.FileManagerService(self.__FOLDER)

    # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
    def getMiseryIndex(self, numberOfDataSet, allData):
        data = self.fileManagerService.getJsonFile(self.MiseryIndexFolder)
        if data is not None:
            return data if allData else self._getOnlyPartialData(data, numberOfDataSet)

        data = self._formatData(['Unemployment Rate', 'Inflation Rate', 'Misery Index'], quandl.get("USMISERY/INDEX"), False)
        self.fileManagerService.saveFile(self.MiseryIndexFolder, data)
        return self._getOnlyPartialData(data, numberOfDataSet)



    # https://www.quandl.com/data/USTREASURY-US-Treasury
    def getTreasuryYieldCurveRates(self, numberOfDataSet, allData):
        data = self.fileManagerService.getJsonFile(self.TreasuryYieldCurveRatesFolder)
        if data is not None:
            return data if allData else self._getOnlyPartialData(data, numberOfDataSet)

        # '1 MO', '2 MO', '3 MO', '6 MO', '1 YR', '2 YR', '3 YR', '5 YR', '7 YR', '10 YR', '20 YR', '30 YR'
        arrayKeys = ['6 MO', '1 YR', '5 YR', '10 YR', '20 YR', '30 YR']
        data = self._formatData(arrayKeys, quandl.get('USTREASURY/YIELD'), False)
        self.fileManagerService.saveFile(self.TreasuryYieldCurveRatesFolder, data)
        return self._getOnlyPartialData(data, numberOfDataSet)


    def getInvestorSentiment(self, numberOfDataSet, allData):
        data = self.fileManagerService.getJsonFile(self.InvestorSentimentFolder)
        if data is not None:
            return data if allData else self._getOnlyPartialData(data, numberOfDataSet)

        data = self._formatData(['Bullish', 'Neutral', 'Bearish'], quandl.get("AAII/AAII_SENTIMENT"), False)
        self.fileManagerService.saveFile(self.InvestorSentimentFolder, data)
        return self._getOnlyPartialData(data, numberOfDataSet)


    def _generatInformationProvider(self, numberOfDataSet, allData, folder, quandalKey ):
        data = self.fileManagerService.getJsonFile(folder)
        if data is not None:
            return data if allData else self._getOnlyPartialData(data, numberOfDataSet)

        data = self._formatData(['chartData'], {'chartData': quandl.get(quandalKey)})
        self.fileManagerService.saveFile(folder, data)
        return self._getOnlyPartialData(data, numberOfDataSet)

    def _getOnlyPartialData(self, data, numberOfPartialData = 75):
        result = {k: data[k][-numberOfPartialData:] for k in data.keys()}

        return result

    '''
        for each key in arrayKeys return {key: [[timestamp, value], [timestamp. value] ]}
    '''
    def _formatData(self, arrayOfKeys, data, hasValueField = True):
        formatedData = {}

        for d in arrayOfKeys:
            if hasValueField:
                timestamp = [k.timestamp() for k in data[d]['Value'].keys()]
                print(d, len(timestamp))
                formatedData[d.replace(' ', '_')] = [[timestamp[i] * 1000, data[d]['Value'][i]] for i in range(len(data[d]))]
            else:
                timestamp = [k.timestamp() for k in data[d].keys()]
                print(d, len(timestamp))
                formatedData[d.replace(' ', '_')] = [[timestamp[i] * 1000, data[d][i]] for i in range(len(data[d]))]
        return formatedData
