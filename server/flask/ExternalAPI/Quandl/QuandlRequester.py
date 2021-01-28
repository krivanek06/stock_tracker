from private_data import enviroments
from calendar import timegm
from ExternalAPI import utils
from datetime import datetime
from requests import get
from Services import FileManagerService


class QuandlRequester:
    def __init__(self):
        self.APIKEY = enviroments.QUANDL_SECRET_KEY
        self.fileManager = FileManagerService.FileManagerService()

    def loadDataForQuandlKey(self, quandlKey):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        for section in content['sections']:
            for k in ['main', 'other']:
                for data in section[k]:
                    if data['quandlKey'] == quandlKey:
                        return self._getDataForDocumentKey(data['quandlKey'], data['replacements'])

    def loadMainDataForSection(self, sectionName):
        mainSection = self.__findSectionForSectionName(sectionName)['main']
        res = [self._getDataForDocumentKey(data['quandlKey'], data['replacements'], None) for data in mainSection]
        flat_list = [item for sublist in res for item in sublist]
        return flat_list

    # return {'quandlKey': XX, 'replacements': []}
    def findDataByDocumentKey(self, documentKey):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        for section in content['section']:
            for part in ['main', 'other']:
                for data in section[part]:
                    for replacement in section[part]['replacements']:
                        if replacement['documentKey'] == documentKey:
                            return data
        raise Exception('quandl findDataByDocumentKey() does not find any data for key: ' + documentKey)

    # TODO only return data from 'sections', make it to return data from 'section_all_data'
    def _getAllCategories(self):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        result = [{
            'name': s['name'],
            'data': [r for main in s['main'] for r in main['replacements'] if
                     r.get('skip') is None or r.get('skip') is False]
                    +
                    [r for main in s['other'] for r in main['replacements'] if
                     r.get('skip') is None or r.get('skip') is False]
        } for s in content['sections']]
        return result

    def _getDataForDocumentKey(self, quandlKey, replacements, documentKey=None):
        replacements = [r['name'] for r in replacements if (r.get('skip') is None or r.get('skip') is False)]
        data = self._generatInformationProvider(quandlKey, replacements)

        if documentKey is None:
            return data['result']

        for d in data['result']:
            if d['documentKey'] == documentKey:
                return d

        raise Exception('quandl loadDataForKey() does not find any data for key: ' + documentKey)

    # ex. : sectionName = 'General'
    def __findSectionForSectionName(self, sectionName):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        for section in content['sections']:
            if section['name'] == sectionName:
                return section
        raise Exception('quandl_endpoints.json does not contain sectionName: ' + sectionName)

    # return {"quandlKey": "",  "documentKey": "",  "documentKeyReplacements": [""]}
    def _findDataForDocumentKey(self, documentKey):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        for section in content['sections']:
            for k in ['main', 'other']:
                for container in section[k]:
                    quandlKey = container['quandlKey']
                    for data in container['replacements']:
                        if data['documentKey'] == documentKey:
                            return {'quandlKey': quandlKey, 'replacements': container['replacements']}

        raise Exception('quandl_endpoints.json does not contain documentKey: ' + documentKey)

    def _generatInformationProvider(self, quandalKey, customKeys=None):
        params = {'download_type': 'full', 'api_key': self.APIKEY}
        data = get('https://www.quandl.com/api/v3/datasets/' + quandalKey, params=params).json()['dataset']

        parentName = data.get('name')
        currentDate = data.get('data')[0][0]
        documentKey = utils.changeUnsupportedCharactersExceptNumber(
            'qundal_' + '_'.join(data.get('name').lower().split(' ')))

        data = self.__formatData(data, customKeys)
        for d in data:
            d['parentName'] = parentName
            d['quandalKey'] = quandalKey
            d['documentKey'] = documentKey + '_' + d['documentKey']
            d['currentDate'] = currentDate

        return {'result': data}

    '''
        - Remove timestamp inside data [[Timestamp, value], [Timestamp, value]] -> [value, value, ...]
        - Create new shared field Timestamp
    '''

    def _formatTimestampForMultipleData(self, result):
        timestamp = []
        modifyData = result
        for dataIndex in range(len(modifyData)):
            # save only data, removing timestamp: [[timestamp, value]] -> [value, value, ...]
            valueContainer = modifyData[dataIndex]['data'][-30:]
            valueContainer = [valueContainer[j][1] for j in range(len(valueContainer))]

            # save timestamp
            if not timestamp:
                timestamp = modifyData[dataIndex]['data'][-30:]
                timestamp = [timestamp[j][1] for j in range(len(timestamp))]

            # replace [timestamp, value ] -> [value, value, ..]
            modifyData[dataIndex]['data'] = valueContainer
        return {'timestamp': timestamp, 'result': modifyData}

    '''
            for each key in arrayKeys return (if isMultipleData is false)
                {
                    data: [[timestamp, value], [timestamp. value] ],
                    name: "t key",
                    currentValue: XY
                }
        '''

    def __formatData(self, data, customKeys=None):
        keys = data['column_names'][1:]  # first is date
        result = {key: [] for key in keys}

        for block in data['data']:
            timestamp = timegm(datetime.strptime(block[0], "%Y-%m-%d").utctimetuple()) * 1000  # milliseconds

            for i in range(len(block[1:])):
                result[keys[i]].append([timestamp, block[i + 1]])  # example of block -> [ "1948-01-31", 3.4,]

        # wrong order, newest was at the beginning
        for d in result:
            result[d].reverse()

        # changing names for keys
        customKeys = keys if customKeys is None else customKeys
        final = [{
            'name': customKeys[i],
            'data': result[keys[i]],
            'documentKey': '_'.join(keys[i].lower().split(' ')),
            'currentValue': result[keys[i]][len(result[keys[i]]) - 1][1]
            # result[keys[i]][len(result[keys[i]]) - 1] if isMultipleData
        } for i in range(len(customKeys))]

        return final
