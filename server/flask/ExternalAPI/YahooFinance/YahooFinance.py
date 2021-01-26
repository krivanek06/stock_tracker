from ExternalAPI.YahooFinance import YahooFinanceRequester as yRequester
from Services import FileManagerService


class YahooFinance:
    def __init__(self):
        self.TopGainersFolder = 'top_gainers.json'
        self.TopLossesFolder = 'top_losses.json'
        self.TopActiveFolder = 'top_active.json'

        self.yRequester = yRequester.YahooFinanceRequester()
        self.fileManagerService = FileManagerService.FileManagerService()

    # Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    # Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    def getChartDataWithPeriod(self, symbol, period, onlyClosed = False):
        return self.yRequester.get_chart_data(symbol, period, onlyClosed)

    def getDailyTopGains(self):
        topGainers = self.yRequester.get_day_gainers()
        return topGainers

    def getDailyTopLosers(self):
        topLosers = self.yRequester.get_day_losers()
        return topLosers

    def getDailyTopActive(self):
        mostActive = self.yRequester.get_day_most_active()
        return mostActive

    def getDailyTopCrypto(self):
        topCrypto = self.yRequester.get_top_crypto()
        return topCrypto

    def getTickerSummary(self, symbol):
        data = self.yRequester.get_quote_table(symbol)
        return {'summary': data}
        # return self.yahooFinanceDataModification.formatWatchList(data)

    def getCompanyData(self, symbol):
        res = self.yRequester.get_company_data(symbol)
        return {'companyData': res}

    def getTickerStat(self, symbol):
        data = self.yRequester.get_stats(symbol)
        return {'stats': data}

    def getBalanceSheet(self, symbol):
        balanceSheet = self.yRequester.get_balance_sheet(symbol)
        return {'balanceSheet': balanceSheet}

    def getCashFlow(self, symbol):
        cashFlow = self.yRequester.get_cash_flow(symbol)
        return {'cashFlow': cashFlow}

    def getIncomeStatement(self, symbol):
        incomeStatement = self.yRequester.get_income_statement(symbol)
        return {'incomeStatement': incomeStatement}

    def getAnalystsInfo(self, symbol):
        analysis = self.yRequester.get_analysts_info(symbol)
        return {'analysis': analysis}
