from threading import Thread
from queue import Queue
from pytz import UTC

from ExternalAPI import Finhub
from ExternalAPI.YahooFinance import YahooFinanceRequester
from ExternalAPI import utils

from Services.FundamentalServiceFormatter import FundamentalServiceFormatter
from Services.FundamentalServiceCalculator import FundamentalServiceCalculator
from Services.FundamentalServiceDCFCalculation import FundamentalServiceDCFCalculation, RISK_TOLERANCE_ENUM

utc = UTC

from Services.FileManagerService import FileManagerService


class FundamentalService:
    def __init__(self):
        self.yRequester = YahooFinanceRequester.YahooFinanceRequester()
        self.finhub = Finhub.Finhub()
        self.QUARTERLY = 'quarterly'
        self.YEARLY = 'yearly'

    def getStockDetails(self, symbol):
        #data = FileManagerService().getJsonFile(symbol)
        #if data  is None:
        #    data = self.__fetchStockDetails(symbol)
        #    FileManagerService().saveFile(symbol, data)

        data = self.__fetchStockDetails(symbol)
        data = self.__formatFetchedStockDetails(symbol, data)
        data = self.__calculateAdditionalData(data)
        data['calculatedPredictions'] = self.__calculatePredictions(data)
        return data

    def __calculatePredictions(self, data):
        calculator = FundamentalServiceDCFCalculation(data)
        return {
            'DCF_V_1': calculator.calculateDFC()
        }

    def __calculateAdditionalData(self, data):
        calculator = FundamentalServiceCalculator(data)
        result = data

        # free cash flow
        result['cashFlow'][self.YEARLY]['freeCashFlow'] = calculator.calculateFreeCashFlow(self.YEARLY)
        result['cashFlow'][self.QUARTERLY]['freeCashFlow'] = calculator.calculateFreeCashFlow(self.QUARTERLY)

        return result

    def __formatFetchedStockDetails(self, symbol, data):
        data['id'] = symbol

        data = utils.changeUnsupportedCharactersForDictKey(data)
        dataFormatter = FundamentalServiceFormatter(data)

        # format data
        dataFormatter.formatAnalysis()
        dataFormatter.fomatFinancialReports()
        dataFormatter.formatSummary()
        dataFormatter.formatDividends()
        dataFormatter.formatEarningsFinancialChart()
        dataFormatter.formatStatementData()
        dataFormatter.formatHistoricalMetrics()
        data['recommendation'].reverse()

        # remove data
        dataFormatter.removeUnnecessaryData()
        return data

    def __fetchStockDetails(self, symbol):
        que = Queue()
        # declare threads
        t2 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_analysts_info(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_company_data(arg1)), args=(que, symbol))
        t8 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_financial_sheets(arg1)), args=(que, symbol))
        t10 = Thread(target=lambda q, arg1: q.put(self.finhub.getNewsForSymbol(arg1)), args=(que, symbol))
        t12 = Thread(target=lambda q, arg1: q.put(self.yRequester.get_holders(arg1)), args=(que, symbol))

        # FINHUB
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))
        t11 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t2.start()
        t4.start()
        t6.start()
        t7.start()
        t8.start()
        t10.start()
        t11.start()
        t12.start()

        # wait threads to finish
        t2.join()
        t4.join()
        t6.join()
        t7.join()
        t8.join()
        t10.join()
        t11.join()
        t12.join()

        # get result from threads into one dict
        merge = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        return merge
