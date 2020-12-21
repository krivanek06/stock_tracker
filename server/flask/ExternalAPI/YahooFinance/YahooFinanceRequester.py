from re import sub
from json import dumps, loads
from requests import get
from ExternalAPI import utils
from bs4 import BeautifulSoup
from datetime import datetime
from dateutil.relativedelta import relativedelta

'''
lib -> from yahoo_fin import stock_info as si
class use to retrieve data from yahoo_fin lib.
Created for not importing libs like : pandas / numpy for more lightweight docker container
'''


class YahooFinanceRequester:
    def __init__(self):
        self.helperClass = CustomYahooFinHelper()

    '''Downloads list of tickers currently listed in the S&P 500 
    def tickers_sp500():
        sp500 = pd.read_html("https://en.wikipedia.org/wiki/List_of_S%26P_500_companies")[0]
        sp_tickers = sorted(sp500.Symbol.tolist())

        return sp_tickers
    '''

    '''Downloads list of tickers currently listed in the NASDAQ
    def tickers_nasdaq():
        ftp = ftplib.FTP("ftp.nasdaqtrader.com")
        ftp.login()
        ftp.cwd("SymbolDirectory")

        r = io.BytesIO()
        ftp.retrbinary('RETR nasdaqlisted.txt', r.write)

        info = r.getvalue().decode()
        splits = info.split("|")

        tickers = [x for x in splits if "\r\n" in x]
        tickers = [x.split("\r\n")[1] for x in tickers if "NASDAQ" not in x != "\r\n"]
        tickers = [ticker for ticker in tickers if "File" not in ticker]

        ftp.close()

        return tickers
    '''

    '''Downloads list of currently traded tickers on the Dow
    def tickers_dow():
        site = "https://finance.yahoo.com/quote/%5EDJI/components?p=%5EDJI"

        table = pd.read_html(site)[0]

        dow_tickers = sorted(table['Symbol'].tolist())

        return dow_tickers
    '''

    def get_quote_table(self, ticker):
        site = "https://finance.yahoo.com/quote/" + ticker + "?p=" + ticker

        result = utils.parseMultipleDropdownTables(site)
        livePrice = self.get_live_price(ticker)

        result['weekRange52Min'] = float(result['FiveTwoWeekRange'].split(' - ')[0])
        result['weekRange52Max'] = float(result['FiveTwoWeekRange'].split(' - ')[1])
        try:
            result['targetEst1yPercent'] = float(
                round(100 / float(result['OneyTargetEst']) * livePrice['marketPrice'], 2))
            # result['volumePercent'] = float(round(100 / float(result['AvgVolume'].replace(',', '')) * float(result['Volume'].replace(',', '')), 2))
        except:
            result['targetEst1yPercent'] = None
            # result['volumePercent'] = None

        return {**result, **livePrice, **{'symbol': ticker}}

    def get_stats(self, ticker):
        stats_site = "https://finance.yahoo.com/quote/" + ticker + "/key-statistics?p=" + ticker
        return utils.parseMultipleDropdownTables(stats_site)

    def get_income_statement(self, ticker):
        income_site = "https://finance.yahoo.com/quote/" + ticker + "/financials?p=" + ticker
        json_info = self.helperClass.parse_json(income_site)

        result = {
            'incomeStatementHistoryYearly': json_info["incomeStatementHistory"]["incomeStatementHistory"],
            'incomeStatementHistoryQuarterly': json_info["incomeStatementHistoryQuarterly"]["incomeStatementHistory"]
        }

        return result

    def get_balance_sheet(self, ticker):
        balance_sheet_site = "https://finance.yahoo.com/quote/" + ticker + "/balance-sheet?p=" + ticker
        json_info = self.helperClass.parse_json(balance_sheet_site)

        result = {
            'balanceSheetHistoryYearly': json_info["balanceSheetHistory"]["balanceSheetStatements"],
            'balanceSheetHistoryQuarterly': json_info["balanceSheetHistoryQuarterly"]["balanceSheetStatements"]
        }

        return result

    def get_cash_flow(self, ticker):
        cash_flow_site = "https://finance.yahoo.com/quote/" + ticker + "/cash-flow?p=" + ticker
        json_info = self.helperClass.parse_json(cash_flow_site)

        result = {
            'cashflowStatementHistoryYearly': json_info["cashflowStatementHistory"]["cashflowStatements"],
            'cashflowStatementHistoryQuarterly': json_info["cashflowStatementHistoryQuarterly"]["cashflowStatements"]
        }

        return result

    '''
    def get_holders(ticker):
        holders_site = "https://finance.yahoo.com/quote/" + \
                       ticker + "/holders?p=" + ticker

        tables = pd.read_html(holders_site, header=0)

        table_names = ["Major Holders", "Direct Holders (Forms 3 and 4)",
                       "Top Institutional Holders", "Top Mutual Fund Holders"]

        table_mapper = {key: val for key, val in zip(table_names, tables)}

        return table_mapper
    '''

    def get_analysts_info(self, ticker):
        analysts_site = "https://finance.yahoo.com/quote/" + ticker + "/analysts?p=" + ticker
        data = self.helperClass.parseAnalysisInfo(analysts_site)
        return data

    def get_live_price(self, ticker):
        data = get('https://query1.finance.yahoo.com/v8/finance/chart/' + ticker + '?interval=1d').json()
        print('get_live_price', data)
        result = {
            'marketPrice': data['chart']['result'][0]['meta']['regularMarketPrice'],
            'previousClose': data['chart']['result'][0]['meta']['chartPreviousClose']
        }
        return result

    def get_day_most_active(self):
        return self.helperClass.parseDailyTable("https://finance.yahoo.com/most-active?offset=0&count=10")

    def get_day_gainers(self):
        return self.helperClass.parseDailyTable("https://finance.yahoo.com/gainers?offset=0&count=10")

    def get_day_losers(self):
        return self.helperClass.parseDailyTable("https://finance.yahoo.com/losers?offset=0&count=10")

    def get_company_data(self, symbol):
        url = 'https://finance.yahoo.com/quote/' + symbol
        data = self.helperClass.get_json(url, None)
        # try to get image
        try:
            domain = data['summaryProfile']['website'].split('://')[1].split('/')[0].replace('www.', '')
            data['summaryProfile']['logo_url'] = 'https://logo.clearbit.com/%s' % domain
        except Exception:
            pass
        # format recommendation and upgraded history
        try:
            data['upgradeDowngradeHistory']['history'] = data['upgradeDowngradeHistory']['history'][0:10]
            '''
            data['recommendationTrend']['trend'] = data['recommendationTrend']['trend'][0:6]
            trend = data['recommendationTrend']['trend']
            for i in range(len(trend)):
                month = abs(int(trend[i]['period'].replace('m', '')))  # -1m -> 1
                trend[i]['period'] = datetime.today() - relativedelta(months=month)
            '''
        except:
            pass

        return data

    def get_chart_data(self, symbol, period):
        if period == '1d':
            params = {'range': period, 'interval': '1m'}
        elif period in ['5d', '1mo', '3mo']:
            params = {'range': period, 'interval': '30m'}
        elif period in ['6mo', '1y']:
            params = {'range': period, 'interval': '1d'}
        elif period in ['2y', '5y']:
            params = {'range': period, 'interval': '1wk'}
        else:
            params = {'range': period, 'interval': '1mo'}

        data = get('https://query1.finance.yahoo.com/v8/finance/chart/' + symbol, params=params).json()
        # get data from json
        timestamp = data['chart']['result'][0]['timestamp']
        open = data['chart']['result'][0]['indicators']['quote'][0]['open']
        high = data['chart']['result'][0]['indicators']['quote'][0]['high']
        low = data['chart']['result'][0]['indicators']['quote'][0]['low']
        close = data['chart']['result'][0]['indicators']['quote'][0]['close']
        volume = data['chart']['result'][0]['indicators']['quote'][0]['volume']

        # format data
        result = {'price': [], 'volume': [], 'change': [], 'livePrice': close[-1]}
        for i in range(len(timestamp)):
            if open[i] is None or high[i] is None or low[i] is None or close[i] is None:
                continue

            milliseconds = timestamp[i] * 1000
            result['price'].append([milliseconds, round(open[i], 2), round(high[i], 2), round(low[i], 2), round(close[i], 2)])
            result['volume'].append([milliseconds, volume[i]])
            #result['change'].append([milliseconds, 0 if i == 0 else round(((close[i] / close[i - 1]) - 1) * 100, 2)])

        return result

    '''
    def get_top_crypto(self):

        session = HTMLSession()

        resp = session.get("https://finance.yahoo.com/cryptocurrencies?offset=0&count=100")

        tables = pd.read_html(resp.html.raw_html)

        df = tables[0].copy()

        df["% Change"] = df["% Change"].map(lambda x: float(x.strip("%"). \
                                                            strip("+"). \
                                                            replace(",", "")))
        del df["52 Week Range"]
        del df["1 Day Chart"]

        fields_to_change = [x for x in df.columns.tolist() if "Volume" in x \
                            or x == "Market Cap" or x == "Circulating Supply"]

        for field in fields_to_change:

            if type(df[field][0]) == str:
                df[field] = df[field].str.strip("B").map(force_float)
                df[field] = df[field].map(lambda x: x if type(x) == str
                else x * 1000000000)

                df[field] = df[field].map(lambda x: x if type(x) == float else
                force_float(x.strip("M")) * 1000000)

        session.close()

        return df
    '''


class CustomYahooFinHelper:
    def __init__(self):
        pass

    '''
        parse whole html sites
    '''

    def parse_json(self, url):
        html = get(url=url).text

        json_str = html.split('root.App.main =')[1].split('(this)')[0].split(';\n}')[0].strip()
        data = loads(json_str)['context']['dispatcher']['stores']['QuoteSummaryStore']

        # return data
        new_data = dumps(data).replace('{}', 'null')
        new_data = sub(r'\{[\'|\"]raw[\'|\"]:(.*?),(.*?)\}', r'\1', new_data)

        json_info = loads(new_data)

        return json_info

    def parseAnalysisInfo(self, site):
        # parse multiple html table dropdown data order
        # example -> https://finance.yahoo.com/quote/AAPL/analysis?p=AAPL
        soup = BeautifulSoup(get(site).text, features="lxml")
        tables = soup.find_all('table')
        result = {}

        for table in tables:
            # The first tr contains the field names, keys.
            headings = [th.get_text() for th in table.find("tr").find_all("th")]
            lines = []
            # save each line
            for row in table.find_all("tr")[1:]:
                line = [td.get_text() for td in row.find_all("td")]
                lines.append(line)

            tmpContainer = []
            # parse dropdown lines
            for i in range(1, len(headings)):
                tmpObject = {line[0]: line[i] for line in lines}
                tmpObject['name'] = headings[i]
                tmpObject = utils.changeUnsupportedCharactersForDictKey(tmpObject)
                tmpContainer.append(tmpObject)

            result[utils.changeUnsupportedCharacters(headings[0])] = tmpContainer
        return result

    def parseDailyTable(self, site):
        soup = BeautifulSoup(get(site).text, features="lxml")
        table = soup.find_all('table')[0]
        # The first tr contains the field names, keys.
        headings = [th.get_text() for th in table.find("tr").find_all("th")]
        datasets = []
        for row in table.find_all("tr")[1:]:
            dataset = zip(headings, (td.get_text() for td in row.find_all("td")))
            tmpMapper = {data[0]: data[1] for data in list(dataset)}
            tmpMapper = utils.changeUnsupportedCharactersForDictKey(tmpMapper)
            datasets.append(tmpMapper)
        return datasets

    def get_json(self, url, proxy=None):
        html = get(url=url, proxies=proxy).text

        if "QuoteSummaryStore" not in html:
            html = get(url=url, proxies=proxy).text
            if "QuoteSummaryStore" not in html:
                return {}

        json_str = html.split('root.App.main =')[1].split('(this)')[0].split(';\n}')[0].strip()
        data = loads(json_str)['context']['dispatcher']['stores']['QuoteSummaryStore']

        # return data
        new_data = dumps(data).replace('{}', 'null')
        new_data = sub(r'\{[\'|\"]raw[\'|\"]:(.*?),(.*?)\}', r'\1', new_data)

        return loads(new_data)
