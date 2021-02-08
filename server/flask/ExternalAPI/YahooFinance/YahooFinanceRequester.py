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
            result['targetEst1yPercent'] = utils.force_round(
                1 / float(result['OneyTargetEst']) * livePrice['marketPrice'])
        except:
            result['targetEst1yPercent'] = None

        return {**result, **livePrice, **{'symbol': ticker}}

    def get_stats(self, ticker):
        stats_site = "https://finance.yahoo.com/quote/" + ticker + "/key-statistics?p=" + ticker
        return utils.parseMultipleDropdownTables(stats_site)

    def get_financial_sheets(self, ticker):
        balance_sheet_site = "https://finance.yahoo.com/quote/" + ticker + "/balance-sheet?p=" + ticker
        json_info = self.helperClass.parse_json(balance_sheet_site, 'QuoteSummaryStore')

        if json_info is None or json_info.get('balanceSheetHistory') is None:
            return None

        balanceSheet = {
            'balanceSheetHistoryYearly': json_info["balanceSheetHistory"]["balanceSheetStatements"],
            'balanceSheetHistoryQuarterly': json_info["balanceSheetHistoryQuarterly"]["balanceSheetStatements"]
        }

        cashFlow = {
            'cashflowStatementHistoryYearly': json_info["cashflowStatementHistory"]["cashflowStatements"],
            'cashflowStatementHistoryQuarterly': json_info["cashflowStatementHistoryQuarterly"]["cashflowStatements"]
        }

        incomeStatement = {
            'incomeStatementHistoryYearly': json_info["incomeStatementHistory"]["incomeStatementHistory"],
            'incomeStatementHistoryQuarterly': json_info["incomeStatementHistoryQuarterly"]["incomeStatementHistory"]
        }

        return {'balanceSheet': balanceSheet, 'incomeStatement': incomeStatement, 'cashFlow': cashFlow}

    def get_holders(self, ticker):
        url = "https://finance.yahoo.com/quote/" + ticker + "/holders?p=" + ticker
        ownerShip = self.helperClass.parse_json(url, 'QuoteSummaryStore', 'institutionOwnership', 'ownershipList')
        transactions = self.helperClass.parse_json(url, 'QuoteSummaryStore', 'insiderTransactions', 'transactions')

        ownerShip = ownerShip[0:8] if ownerShip is not None else []
        transactions = transactions[0:8] if transactions is not None else []

        return {'institutionOwnerships': ownerShip, 'insiderTransactions': transactions}

    def get_analysts_info(self, ticker):
        analysts_site = "https://finance.yahoo.com/quote/" + ticker + "/analysts?p=" + ticker
        return self.helperClass.parseAnalysisInfo(analysts_site)

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

        result = {'price': [], 'volume': [], 'livePrice': 0, 'symbol': symbol, 'period': period}

        # may request fail
        if 'timestamp' not in data['chart']['result'][0]:
            return result

        timestamp = data['chart']['result'][0]['timestamp']
        open = data['chart']['result'][0]['indicators']['quote'][0]['open']
        high = data['chart']['result'][0]['indicators']['quote'][0]['high']
        low = data['chart']['result'][0]['indicators']['quote'][0]['low']
        close = data['chart']['result'][0]['indicators']['quote'][0]['close']
        volume = data['chart']['result'][0]['indicators']['quote'][0]['volume']

        # format data

        for i in range(len(timestamp)):
            if open[i] is None or high[i] is None or low[i] is None or close[i] is None:
                continue

            if onlyClosed:
                result['price'].append(round(close[i], 2))
            else:
                milliseconds = timestamp[i] * 1000
                result['price'].append(
                    [milliseconds, round(open[i], 2), round(high[i], 2), round(low[i], 2), round(close[i], 2)])
                result['volume'].append([milliseconds, volume[i]])

        result['livePrice'] = round(result['price'][-1], 2) if onlyClosed else round(result['price'][-1][4], 2)

        return result
