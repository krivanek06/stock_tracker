from calendar import timegm
from datetime import datetime
from requests import get

from Services import FileManagerService
from Utils import characterModificationUtil
import environments_keys


class QuandlApi:
    def __init__(self):
        self.APIKEY = environments_keys.QUANDL_SECRET_KEY
        self.fileManager = FileManagerService.FileManagerService()

    def getAllDataForDocumentKey(self, documentKey):
        try:
            data = self._findDataForDocumentKey(documentKey)
            return self._generatInformationProvider(data['quandlKey'], data['replacements'])
        except Exception as e:
            print(e)
            return None

    def getAllCategories(self, onlyMain=False):
        return {'categories': self._getAllCategories(onlyMain)}

    def _getAllCategories(self, onlyMain):
        sections = self.fileManager.getJsonFile('quandl_endpoints.json')['sections']
        result = [{
            'name': s['name'],
            'key': s['key'],
            'data': [{
                'name': r.get('name'),
                'documentKey': r.get('documentKey'),
            } for main in s.get('main') for r in main.get('replacements') if r.get('skip') is None and
                                                                             ((onlyMain and r.get(
                                                                                 'isMain') is True) or (not onlyMain))]
        } for s in sections]

        return result

    # return {"quandlKey": "",  "documentKey": "",  "documentKeyReplacements": [""]}
    def _findDataForDocumentKey(self, documentKey):
        content = self.fileManager.getJsonFile('quandl_endpoints.json')
        for section in content['sections']:
            for container in section['main']:
                quandlKey = container['quandlKey']
                for data in container['replacements']:
                    if data['documentKey'] == documentKey:
                        return {'quandlKey': quandlKey, 'replacements': container['replacements']}

        raise Exception('quandl_endpoints.json does not contain documentKey: ' + documentKey)

    def _generatInformationProvider(self, quandalKey, replacements):
        params = {'download_type': 'full', 'api_key': self.APIKEY}
        data = get('https://www.quandl.com/api/v3/datasets/' + quandalKey, params=params).json()['dataset']

        parentName = data.get('name')
        currentDate = data.get('end_date')
        documentKey = characterModificationUtil.changeUnsupportedCharactersExceptNumber(
            'qundal_' + '_'.join(data.get('name').lower().split(' ')))
        customKeys = [d['name'] for d in replacements]

        data = self.__formatData(data, customKeys)

        for d in data:
            d['parentName'] = parentName
            d['lastUpdate'] = datetime.today().strftime('%Y-%m-%d')
            d['documentKey'] = documentKey + '_' + d['documentKey']
            d['currentDate'] = currentDate

        return {'result': data}

    def __formatData(self, data, customKeys=None):
        keys = data['column_names'][1:]  # first is date
        result = {key: [] for key in keys}
        timestamps = []

        # example of block -> [ "1948-01-31", 3.4,]
        for block in data['data']:
            timestamp = timegm(datetime.strptime(block[0], "%Y-%m-%d").utctimetuple()) * 1000  # milliseconds
            timestamps.insert(0, timestamp)
            for i in range(len(block[1:])):
                result[keys[i]].insert(0, characterModificationUtil.force_round(block[i + 1], 2))

        # changing names for keys
        customKeys = keys if customKeys is None else customKeys

        final = [{
            'name': customKeys[i],
            'timestamp': timestamps,
            'data': result[keys[i]],
            'documentKey': '_'.join(keys[i].lower().split(' ')),
            'currentValue': characterModificationUtil.force_round(result[keys[i]][len(result[keys[i]]) - 1], 2)
        } for i in range(len(customKeys))]

        return final
