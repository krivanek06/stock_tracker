from requests import get
from ExternalAPI import utils
from ExternalAPI.YahooFinance import CustomYahooParser

class YahooFinanceRequester:
    def __init__(self):
        self.helperClass = CustomYahooParser.CustomYahooParser()

    def get_quote_table(self, ticker):
        site = "https://finance.yahoo.com/quote/" + ticker + "?p=" + ticker

        result = utils.parseMultipleDropdownTables(site)
        livePrice = self.get_live_price(ticker)

        result['weekRange52Min'] = utils.force_float(result['FiveTwoWeekRange'].split(' - ')[0]) if result.get(
            'FiveTwoWeekRange') is not None else None
        result['weekRange52Max'] = utils.force_float(result['FiveTwoWeekRange'].split(' - ')[1]) if result.get(
            'FiveTwoWeekRange') is not None else None
        try:
            result['targetEst1yPercent'] = utils.force_float(
                round(100 / float(result['OneyTargetEst']) * livePrice['marketPrice'], 2))
        except:
            result['targetEst1yPercent'] = None

        return {**result, **livePrice, **{'symbol': ticker}}

    def get_stats(self, ticker):
        stats_site = "https://finance.yahoo.com/quote/" + ticker + "/key-statistics?p=" + ticker
        return utils.parseMultipleDropdownTables(stats_site)

    def get_income_statement(self, ticker):
        income_site = "https://finance.yahoo.com/quote/" + ticker + "/financials?p=" + ticker
        json_info = self.helperClass.parse_json(income_site, 'QuoteSummaryStore')

        if json_info is None:
            return None

        result = {
            'incomeStatementHistoryYearly': json_info["incomeStatementHistory"]["incomeStatementHistory"],
            'incomeStatementHistoryQuarterly': json_info["incomeStatementHistoryQuarterly"]["incomeStatementHistory"]
        }

        return result

    def get_balance_sheet(self, ticker):
        balance_sheet_site = "https://finance.yahoo.com/quote/" + ticker + "/balance-sheet?p=" + ticker
        json_info = self.helperClass.parse_json(balance_sheet_site, 'QuoteSummaryStore')

        if json_info is None or json_info.get('balanceSheetHistory') is None:
            return None

        result = {
            'balanceSheetHistoryYearly': json_info["balanceSheetHistory"]["balanceSheetStatements"],
            'balanceSheetHistoryQuarterly': json_info["balanceSheetHistoryQuarterly"]["balanceSheetStatements"]
        }

        return result

    def get_cash_flow(self, ticker):
        cash_flow_site = "https://finance.yahoo.com/quote/" + ticker + "/cash-flow?p=" + ticker
        json_info = self.helperClass.parse_json(cash_flow_site, 'QuoteSummaryStore')

        if json_info is None:
            return None

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
        res = data['chart']['result']
        result = {
            'marketPrice': res[0]['meta'].get('regularMarketPrice') if res is not None else None,
            'previousClose': res[0]['meta'].get('chartPreviousClose') if res is not None else None
        }
        return result

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
        except:
            pass

        return data

    def get_chart_data(self, symbol, period, onlyClosed=False):
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
        result = {'price': [], 'volume': [], 'livePrice': round(close[-1], 2), 'symbol': symbol, 'period': period}
        for i in range(len(timestamp)):
            if open[i] is None or high[i] is None or low[i] is None or close[i] is None:
                continue

            if onlyClosed:
                result['price'].append(round(close[i], 2))
            else:
                milliseconds = timestamp[i] * 1000
                result['price'].append([milliseconds, round(open[i], 2), round(high[i], 2), round(low[i], 2), round(close[i], 2)])
                result['volume'].append([milliseconds, volume[i]])
        return result


