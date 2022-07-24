from collections import ChainMap
from datetime import datetime, timedelta
from json import dumps, loads
from re import sub

from requests import get


class YahooFinanceApi:
    def __init__(self):
        pass

    def get_top_crypto(self):
        url = 'https://finance.yahoo.com/cryptocurrencies?offset=0&count=20'
        data = self.__parse_json(url, 'ScreenerResultsStore', 'results', 'rows')
        for d in data:
            d['regularMarketClosed'] = d['regularMarketOpen'] - d['regularMarketChange']

        self.__format_crypto(data)
        return data
    def get_company_data(self, ticker):
        try:
            site = "https://finance.yahoo.com/quote/" + ticker + "?p=" + ticker
            data = self.__parse_json(site, 'QuoteSummaryStore')

            if not data:
                return None

            # format recommendation and upgraded history
            if data.get('upgradeDowngradeHistory') is not None:
                history = data['upgradeDowngradeHistory'].get('history')
                data['upgradeDowngradeHistory'] = [] if not history else history[0:15]
            else:
                data['upgradeDowngradeHistory'] = []

            # format logo
            try:
                domain = data['summaryProfile']['website'].split('://')[1].split('/')[0].replace('www.', '')
                data['summaryProfile']['logo_url'] = 'https://logo.clearbit.com/%s' % domain
            except Exception:
                if data['summaryProfile'] is None:
                    data['summaryProfile'] = {}
                data['summaryProfile']['logo_url'] = None

            return {'companyData': data}
        except:
            return {'companyData': None}

    def __parse_json(self, url, *jsonPathArgs):
        try:
            html = get(url=url).text # download whole html as text

            # find only the important part in html
            json_str = html.split('root.App.main =')[1].split('(this)')[0].split(';\n}')[0].strip()
            data = loads(json_str)['context']['dispatcher']['stores']
            for path in jsonPathArgs:
                data = data[path]

            # return data
            new_data = dumps(data).replace('{}', 'null')
            new_data = sub(r'\{[\'|\"]raw[\'|\"]:(.*?),(.*?)\}', r'\1', new_data)

            json_info = loads(new_data)

            return json_info
        except Exception as e:
            print('Exception in parse_json , error: ' + str(e) + ' jsonPathArgs: ', jsonPathArgs)
            return []


    def __format_crypto(self, dataSet):
        for data in dataSet:
            try:
                data['spark']['indicators'] = data['spark']['indicators']['quote'][0]['close']
            except:
                data['spark']['indicators'] = []

            # remove tradingPeriods
            try:
                data['spark']['meta']['tradingPeriods'] = data['spark']['meta']['tradingPeriods'][0][0]
            except:
                data['spark']['meta']['tradingPeriods'] = {}
