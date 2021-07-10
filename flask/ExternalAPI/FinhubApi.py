import environments_keys
from requests import get


class FinhubApi:
    def __init__(self):
        self.FINHUB_SECRET_KEY = environments_keys.FINHUB_SECRET_KEY

    def searchAllSymbols(self):
        params = {'token': self.FINHUB_SECRET_KEY, 'exchange': 'US'}
        exchangeUS = get('https://finnhub.io/api/v1/stock/symbol', params=params).json()
        result = []
        for data in exchangeUS:
            data['displayName'] = '[' + data['symbol'] + ']' + ' ' + data['description']
            if data['type'] == 'Common Stock':
                result.append(data['symbol'])
        return result

    def getStockYearlyFinancialReport(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'freq': 'quarterly'}
        quarter = get('https://finnhub.io/api/v1/stock/financials-reported', params=params).json()['data']

        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol, 'freq': 'annual'}
        year = get('https://finnhub.io/api/v1/stock/financials-reported', params=params).json()['data']

        # add yearly reports into quarters - missing
        yearlyReportIndex = 0
        for quarterReportIndex, quarterReport in enumerate(quarter[:]):  # create copy
            try:
                if quarterReport['quarter'] == 1:
                    quarter.insert(quarterReportIndex + 1 + yearlyReportIndex, year[yearlyReportIndex])
                    yearlyReportIndex += 1
            except:
                break

        return {'allFinancialReportsQuarterly': quarter[0:50], 'allFinancialReportsYearly': year}

    def getStockMetrics(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        data = get('https://finnhub.io/api/v1/stock/metric', params=params).json()
        metric = data['series'].get('annual') if data.get('series') is not None else None
        return {'metric': data.get('metric'), 'historicalMetrics': metric}

    def getRecomendationForSymbol(self, symbol):
        params = {'token': self.FINHUB_SECRET_KEY, 'symbol': symbol}
        recommendation = get('https://finnhub.io/api/v1/stock/recommendation', params=params).json()[0:8]
        return {'recommendation': recommendation}
