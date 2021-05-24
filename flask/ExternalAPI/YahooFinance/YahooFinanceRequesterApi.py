from requests import get

from Utils.characterModificationUtil import getIntervalFromPeriod
from ExternalAPI.YahooFinance import CustomYahooParser


class YahooFinanceRequesterApi:
    def __init__(self):
        self.helperClass = CustomYahooParser.CustomYahooParser()

    def get_closed_price(self, symbol):
        data = get(f'https://query1.finance.yahoo.com/v8/finance/chart/{symbol}').json()
        if (data['chart'] is None or
                data['chart']['result'] is None or
                data['chart']['result'][0] is None or
                data['chart']['result'][0]['meta'] is None):
            return None
        return data['chart']['result'][0]['meta'].get('previousClose', None)

    def get_company_data(self, ticker):
        try:
            site = "https://finance.yahoo.com/quote/" + ticker + "?p=" + ticker
            data = self.helperClass.parse_json(site, 'QuoteSummaryStore')

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
                data['summaryProfile']['logo_url'] = None

            return {'companyData': data}
        except:
            return {'companyData': None}

    def get_financial_sheets(self, ticker):
        balance_sheet_site = "https://finance.yahoo.com/quote/" + ticker + "/balance-sheet?p=" + ticker
        json_info = self.helperClass.parse_json(balance_sheet_site, 'QuoteSummaryStore')

        if not json_info:
            return None
        try:
            balanceSheet = {
                'yearly': json_info["balanceSheetHistory"].get('balanceSheetStatements'),
                'quarterly': json_info["balanceSheetHistoryQuarterly"].get('balanceSheetStatements')
            }
        except:
            balanceSheet = None

        try:
            cashFlow = {
                'yearly': json_info["cashflowStatementHistory"].get('cashflowStatements'),
                'quarterly': json_info["cashflowStatementHistoryQuarterly"].get('cashflowStatements')
            }
        except:
            cashFlow = None

        try:
            incomeStatement = {
                'yearly': json_info["incomeStatementHistory"].get('incomeStatementHistory'),
                'quarterly': json_info["incomeStatementHistoryQuarterly"].get('incomeStatementHistory')
            }
        except:
            incomeStatement = None

        return {'balanceSheet': balanceSheet, 'incomeStatement': incomeStatement, 'cashFlow': cashFlow}

    def get_holders(self, ticker):
        url = "https://finance.yahoo.com/quote/" + ticker + "/holders?p=" + ticker
        ownerShip = self.helperClass.parse_json(url, 'QuoteSummaryStore', 'institutionOwnership', 'ownershipList')
        transactions = self.helperClass.parse_json(url, 'QuoteSummaryStore', 'insiderTransactions', 'transactions')

        return {'institutionOwnerships': ownerShip[0:8], 'insiderTransactions': transactions[0:8]}

    def get_analysts_info(self, ticker):
        url = "https://finance.yahoo.com/quote/" + ticker + "/analysts?p=" + ticker
        analysis_all = self.helperClass.parse_json(url, 'QuoteSummaryStore', 'earningsTrend', 'trend')
        return {'analysis_all': analysis_all}

    def get_live_price(self, ticker: str):
        try:
            data = get(f'https://query1.finance.yahoo.com/v8/finance/chart/{ticker}').json()
            return data['chart']['result'][0]['meta']['regularMarketPrice']
        except:
            return None

    def get_live_prices(self, symbols: []):
        result = []
        for symbol in symbols:
            try:
                data = get(f'https://query1.finance.yahoo.com/v8/finance/chart/{symbol}').json()
                meta = data['chart']['result'][0]['meta']
                result.append({
                    'symbol': symbol,
                    'price': meta['regularMarketPrice'],
                    'previousClose': meta['previousClose']
                })
            except:
                pass
        return result

    def get_chart_data(self, symbol, period, onlyClosed=False):
        params = {'range': period, 'interval': getIntervalFromPeriod(period)[0]}
        data = get('https://query1.finance.yahoo.com/v8/finance/chart/' + symbol, params=params).json()

        dataGranularity = data['chart']['result'][0]['meta']['dataGranularity']
        result = {'price': [], 'volume': [], 'livePrice': 0, 'symbol': symbol, 'period': period, 'dataGranularity': dataGranularity}

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
                result['price'].append([milliseconds,  # time
                                        round(open[i], 2),  # open
                                        round(high[i], 2),  # high
                                        round(low[i], 2),  # low
                                        round(close[i], 2)])  # closed
                result['volume'].append([milliseconds, volume[i]])

        result['livePrice'] = round(result['price'][-1], 2) if onlyClosed else round(result['price'][-1][4], 2)

        return result
