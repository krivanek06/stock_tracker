from ExternalAPI.YahooFinance import CustomYahooParser


class YahooFinanceRequesterApi:
    def __init__(self):
        self.helperClass = CustomYahooParser.CustomYahooParser()

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
                if data['summaryProfile'] is None:
                    data['summaryProfile'] = {}
                data['summaryProfile']['logo_url'] = None

            return {'companyData': data}
        except:
            return {'companyData': None}
