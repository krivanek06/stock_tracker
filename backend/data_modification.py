

def getPercentigeChangeInVolume(data):
    return round((100 / data['Avg Vol (3 month)'] * data['Volume'] - 100), 2)

def removeKeys(data, keys):
    for k in keys:
        del data[k]

def formatTopGainersOrLoosersOrActive(data):
    res = []
    for i in range(10):
        tmp = {}
        tmp['symbol'] = str(data['Symbol'][i])
        tmp['name'] = str(data['Name'][i])
        tmp['current_price'] = float(round(data['Price (Intraday)'][i], 2))
        tmp['current_price_change'] = float(round(data['% Change'][i], 2))
        tmp['volume_change'] = float(round(data['volume_change'][i], 2))

        try:
            tmp['pe_ratio'] = float(data['PE Ratio (TTM)'][i])
        except:
            tmp['pe_ratio'] = -1

        res.append(tmp)
    return res


def formatWatchList(data):
    res = {}
    res['52_Week_Range'] = str(data['52 Week Range'])
    res['Earnings_Date'] = str(data['Earnings Date'])
    res['symbol'] = str(data['symbol'])
    res['Ex_Dividend_Date'] = str(data['Ex-Dividend Date'])
    res['Forward_Dividend_&_Yield'] = str(data['Forward Dividend & Yield'])
    res['current_price_change'] = float(round(100 / data['Previous Close'] * data['Quote Price'] - 100, 2))
    res['current_price'] = float(round(data['Quote Price'], 2))
    res['1y_Target_Est'] = float(data['1y Target Est'])
    res['1y_Target_Est_change'] = float(round(100 / data['1y Target Est'] * data['Quote Price'] - 100, 2))

    return res


def formatChartData(data):
    res = []
    timestamp = data['current_price'].keys()
    for i in range(len(timestamp)):
        tmp = {}
        tmp['timestamp'] = float(timestamp[i].timestamp() * 1000) # milliseconds
        tmp['current_price'] = float(round(data['current_price'][i], 2))
        tmp['volume'] = float(data['Volume'][i])
        if 'daily_return' in data:
            tmp['daily_return'] = float(data['daily_return'][i])
        res.append(tmp)
    return res


# balance sheet / cash flow / income statement
def formatSheetData(data):
    timestamp = list(data.to_dict().keys())[1:]
    result = {'date': timestamp}
    for i in range(len(data['Breakdown'])):
        tmpDictKey = ''
        # Breakdown / 2020/ 2019 / 2018 / 2017
        for k in data.keys():
            if k == 'Breakdown':
                tmpDictKey = data[k][i].replace(" ", "_")
                result[tmpDictKey] = []
            else:
                try:
                    result[tmpDictKey].append(float(data[k][i]))
                except:
                    result[tmpDictKey].append(0)

    return result