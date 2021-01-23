from private_data import enviroments
from calendar import timegm
from ExternalAPI import utils
from datetime import datetime
from requests import get


class Quandl:
    def __init__(self):
        self.APIKEY = enviroments.QUANDL_SECRET_KEY

    def _generatInformationProvider(self, quandalKey, customKeys=None, isMultipleData=False):
        params = {'download_type': 'full', 'api_key': self.APIKEY}
        data = get('https://www.quandl.com/api/v3/datasets/' + quandalKey, params=params).json()['dataset']

        name = data.get('name')
        description = data.get('description')
        currentValue = data.get('data')[0][1]
        currentDate = data.get('data')[0][0]

        data = self._formatData(data, customKeys, isMultipleData)

        # if multiple dataset then separate timestamp
        timestamp = []
        if isMultipleData:
            for i in range(len(data)):
                if data[i]['name'] == 'timestamp':
                    timestamp = data.pop(i)
                    break

        return {'name': name, 'description': description, 'timestamp': timestamp,
                'currentValue': currentValue, 'currentDate': currentDate, 'result': data}

    '''
        for each key in arrayKeys return (if isMultipleData is false)
            {
                data: [[timestamp, value], [timestamp. value] ],
                name: "t key",
                currentValue: XY
            }
    '''

    def _formatData(self, data, customKeys=None, isMultipleData=False):
        keys = data['column_names'][1:]  # first is date
        result = {key: [] for key in keys}
        result['timestamp'] = []

        for block in data['data']:
            timestamp = timegm(datetime.strptime(block[0], "%Y-%m-%d").utctimetuple()) * 1000  # milliseconds
            # timestamp = block[0]
            if isMultipleData:
                result['timestamp'].append(timestamp)  # separate timestamp because multiple data has same timestamp

            for i in range(len(block[1:])):
                if isMultipleData:
                    result[keys[i]].append(block[i + 1])  # only values
                else:
                    result[keys[i]].append([timestamp, block[i + 1]])  # example of block -> [ "1948-01-31", 3.4,]

        # wrong order, newest was at the beginning
        for d in result:
            result[d].reverse()

        # changing names for keys
        customKeys = keys if customKeys is None else customKeys
        final = [{
            'name': customKeys[i],
            'data': result[keys[i]],
            'currentValue': result[keys[i]][len(result[keys[i]]) - 1] if isMultipleData else
            result[keys[i]][len(result[keys[i]]) - 1][1]
        } for i in range(len(customKeys))]

        # add timestamp
        if isMultipleData:
            final.append({
                'name': 'timestamp',
                'data': result['timestamp'],
                'currentValue': result['timestamp'][len(result['timestamp']) - 1]
            })

        return final

    '''
        - Remove timestamp inside data [[Timestamp, value], [Timestamp, value]] -> [value, value, ...]
        - Create new shared field Timestamp
        - push values right to correct timestamp
    '''

    def _formatTimestampForMultipleData(self, result):
        # create only one timestamp key and remove existing timestamp inside bond keys
        timestamp = []
        longest = max([len(result[key]['result'][0]['data']) for key in result])
        for k in result.keys():
            # get only data, removing timestamp  -> [timestamp, data]
            valueContainer = [result[k]['result'][0]['data'][i][1] for i in range(len(result[k]['result'][0]['data']))]

            # not enough data, need to be pushed right because they are at bad timestamp
            while len(valueContainer) < longest:
                valueContainer.insert(0, None)

            # save longest timestamp only once
            if timestamp == [] and longest == len(result[k]['result'][0]['data']):
                timestamp = [result[k]['result'][0]['data'][i][0] for i in range(len(result[k]['result'][0]['data']))]

            # replace [timestamp, value ] -> [value, value, ..]
            result[k]['result'][0]['data'] = valueContainer

        result['timestamp'] = timestamp
