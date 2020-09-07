from ExternalAPI.YahooFinance import YahooFinanceRequester as yRequester
from Services import FileManagerService


class YahooFinance:
    def __init__(self):
       self.__FOLDER = 'resource/other'
       self.TopGainersFolder = 'top_gainers.json'
       self.TopLossesFolder = 'top_losses.json'
       self.TopActiveFolder = 'top_active.json'

       self.yRequester = yRequester.YahooFinanceRequester()
       self.fileManagerService = FileManagerService.FileManagerService(self.__FOLDER)

    # Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    # Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    def getChartDataWithPeriod(self, symbol, period):
        return self.yRequester.get_chart_data(symbol, period)

    # download data each hour
    def getTopGains(self):
        lastModification = self.fileManagerService.getDocumentLastModification(self.TopGainersFolder)
        if lastModification is not None and lastModification[1] == 0:
            return self.fileManagerService.getJsonFile(self.TopGainersFolder)
        topGainers = self.yRequester.get_day_gainers()
        self.fileManagerService.saveFile(self.TopGainersFolder, topGainers)
        return topGainers

    # download data each hour
    def getTopLosers(self):
        lastModification = self.fileManagerService.getDocumentLastModification(self.TopLossesFolder)
        if lastModification is not None and lastModification[1] == 0:
            return self.fileManagerService.getJsonFile(self.TopLossesFolder)

        topLosers = self.yRequester.get_day_losers()
        self.fileManagerService.saveFile(self.TopLossesFolder, topLosers)
        return topLosers

    def getTopActive(self):
        lastModification = self.fileManagerService.getDocumentLastModification(self.TopActiveFolder)
        if lastModification is not None and lastModification[1] == 0:
            return self.fileManagerService.getJsonFile(self.TopActiveFolder)

        mostActive = self.yRequester.get_day_most_active()
        self.fileManagerService.saveFile(self.TopActiveFolder, mostActive)
        return mostActive

    def getTickerSummary(self, symbol):
        data = self.yRequester.get_quote_table(symbol)
        return {'summary': data}
        #return self.yahooFinanceDataModification.formatWatchList(data)

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

    '''
    def getTopCrypto(self):
        #TODO
        topCrypto = si.get_top_crypto()[0:10]
        return topCrypto
    '''

    def getAnalystsInfo(self, symbol):
        analysis = self.yRequester.get_analysts_info(symbol)
        return {'analysis': analysis}

