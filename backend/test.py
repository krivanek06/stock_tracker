

import datetime
import yfinance as yf
from datetime import date, timedelta
from yahoo_fin import stock_info as si
import data_modification as data_modification

print('*********************') # ^DJI , ^GSPC



#topGainers = si.get_day_gainers()[0:10]
#topGainers['volume_change'] = round((100 / topGainers['Avg Vol (3 month)'] * topGainers['Volume'] - 100), 2)

symbol = 'MSFT'
#balanceSheet = si.get_balance_sheet(symbol)
balanceSheet = si.get_income_statement(symbol)
print(balanceSheet)

timestamp = list(balanceSheet.to_dict().keys())[1:]
result = {'timestamp': timestamp}
for i in range(len(balanceSheet['Breakdown'])):
    tmpDictKey = ''
    # Breakdown / 2020/ 2019 / 2018 / 2017
    for k in balanceSheet.keys():
        if k == 'Breakdown':
            tmpDictKey = balanceSheet[k][i]
            tmpDictKey = tmpDictKey.replace(" ", "_")
            result[tmpDictKey] = []
        else:
            result[tmpDictKey].append(balanceSheet[k][i])

print(result)