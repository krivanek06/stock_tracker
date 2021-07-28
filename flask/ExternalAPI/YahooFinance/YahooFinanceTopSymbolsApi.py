from ExternalAPI.YahooFinance import CustomYahooParser, YahooFinanceRequesterApi
from datetime import datetime, timedelta
from collections import ChainMap

class YahooFinanceTopSymbolsApi:
    def __init__(self):
        self.yahooFinanceParser = CustomYahooParser.CustomYahooParser()
        self.yahooFinanceRequester = YahooFinanceRequesterApi.YahooFinanceRequesterApi()

    def get_day_gainers(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/day_gainers')

    def get_day_losers(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/day_losers')

    def get_most_active(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/most_actives')

    def get_undervalued_growth_stocks(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/undervalued_growth_stocks')

    def get_growth_technology_stocks(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/growth_technology_stocks')

    def get_undervalued_large_caps(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/undervalued_large_caps')

    def get_aggressive_small_caps(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/aggressive_small_caps')

    def get_small_cap_gainers(self):
        return self.__get_symbol_table('https://finance.yahoo.com/screener/predefined/small_cap_gainers')

    def get_top_crypto(self):
        url = 'https://finance.yahoo.com/cryptocurrencies?offset=0&count=20'
        data = self.yahooFinanceParser.parse_json(url, 'ScreenerResultsStore', 'results', 'rows')
        for d in data:
            d['regularMarketClosed'] = d['regularMarketOpen'] - d['regularMarketChange']
        return data

    def get_calendar_events(self, date=None):
        date = datetime.today().strftime('%Y-%m-%d') if date is None else date
        urlEvents = 'https://finance.yahoo.com/calendar?day=' + date  # return all events happening in this week

        return self.yahooFinanceParser.parse_json(urlEvents, 'CalendarStore', 'data', 'rows')

    # date -> 2021-02-03
    def get_calendar_events_earnings(self, date):
        yesterday = (datetime.today() - timedelta(days=1)).strftime('%Y-%m-%d')
        date = date if date else yesterday
        result = []
        i = 0
        while i == 0 or (len(result) > 0 and len(result) % 100 == 0) :
            url = 'https://finance.yahoo.com/calendar/earnings?day=' + date + '&offset=' + str(i)
            data = self.yahooFinanceParser.parse_json(url, 'ScreenerResultsStore', 'results', 'rows')
            result += data
            i += 1
        return result

    # PRIVATE -----------------------------

    def __get_symbol_table(self, url):
        url = url + '?offset=0&count=10'
        tableData = self.yahooFinanceParser.parse_json(url, 'ScreenerResultsStore', 'results', 'rows')
        return self.__add_necessary_information_to_table_data(tableData)

    def __add_necessary_information_to_table_data(self, data):
        result = []
        for d in data:
            if len(result) > 15:
                return result
            try:
                companyData = self.yahooFinanceRequester.get_company_data(d['symbol'])['companyData']
                if companyData is not None:
                    tmp = d
                    tmp['logo_url'] = companyData['summaryProfile']['logo_url']
                    tmp['regularMarketPreviousClose'] = companyData['price']['regularMarketPreviousClose']
                    tmp['recommendationKey'] = companyData['financialData']['recommendationKey']
                    tmp['recommendationMean'] = companyData['financialData']['recommendationMean']
                    tmp['trailingPE'] = round(tmp.get('trailingPE'), 2) if tmp.get('trailingPE') is not None else 'N/A'
                    result.append(d)
            except:
                pass
        return result
