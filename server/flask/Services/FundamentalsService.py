from ExternalAPI import Finhub
from ExternalAPI.YahooFinance import YahooFinance
from threading import Thread
from queue import Queue
from datetime import datetime, timedelta
import threading
from pytz import UTC
from ExternalAPI import utils
from firebase_admin import credentials, firestore, initialize_app, _apps as firestoreApps

utc = UTC


class FundamentalsService:
    def __init__(self):
        self.yahooFinance = YahooFinance.YahooFinance()
        self.finhub = Finhub.Finhub()

        if not firestoreApps:
            cred = credentials.Certificate('private_data/firebase_key.json')
            default_app = initialize_app(cred)
        self.db = firestore.client()

    def getStockDetails(self, symbol):
        stockDetailsDict = self.db.collection('stockData').document(symbol).get().to_dict()
        twoWeeksBefore = (datetime.today() - timedelta(weeks=2)).replace(tzinfo=utc)

        # No record in firestore, first time fetch
        if stockDetailsDict is None or twoWeeksBefore > stockDetailsDict['detailsLastUpdate'].replace(tzinfo=utc):
            return self.__initialStockDetailsIntoFirestore(symbol)

        # updating stock news into firestore every 8 hours
        lastestStockNews = self.__getUpToDateStockNews(symbol, stockDetailsDict['newsLastUpdate'])
        if lastestStockNews is not None:
            stockDetailsDict['details']['stockNewsSnippets'] = lastestStockNews['stockNews']
            self.__modifyDetailsToFirebase(symbol, {
                'details.stockNewsSnippets': stockDetailsDict['details']['stockNewsSnippets']})

        print('get stock fundamentals -> done')
        print(stockDetailsDict)
        return stockDetailsDict['details']

    def getStockFinancialReport(self, symbol, financialReportName):
        return self.db.collection('stockData').document(symbol).collection('stockFinancialReports').document(
            financialReportName).get().to_dict()

    def getStockSummary(self, symbol):
        summary = self.db.collection('stockData').document(symbol).get().to_dict()
        if summary is None:
            summary = {'details': self.__initialStockDetailsIntoFirestore(symbol)}
        return summary['details']['summary']
    # --------------------------------------------------------------------
    # --------------------------------------------------------------------
    # private methods

    '''
       get stock news if does not exists or older than 8 hours
    '''

    def __getUpToDateStockNews(self, symbol, newsLastUpdate=None):
        sixHoursBefore = (datetime.today() - timedelta(hours=8)).replace(tzinfo=utc)

        if newsLastUpdate is None or sixHoursBefore > newsLastUpdate.replace(tzinfo=utc):
            stockNewsFinhubArray = self.finhub.getNewsForSymbol(symbol)['stockNews']
            return {'stockNews': stockNewsFinhubArray}
        return None

    def __modifyDetailsToFirebase(self, symbol, details):
        def __updateStockDetails(symbol, details):
            self.db.collection('stockData').document(symbol).update(details)

        t1 = threading.Thread(target=__updateStockDetails, args=(symbol, details))
        t1.daemon = True
        t1.start()

    def __saveFinancialReportsToFirebase(self, symbol, reports):
        def __saveFinancialReports(symbol, reports):
            for report in reports:
                report['source'] = 'Finnhub'
                self.db.collection('stockData').document(symbol).collection('stockFinancialReports').document(
                    str(report['year'])).set(report)

        t1 = threading.Thread(target=__saveFinancialReports, args=(symbol, reports))
        t1.daemon = True
        t1.start()

    '''
        - init all details information about stock, 
        - fetch news up to 7 days and save 15 latest news into array for lower reads
        - fetch all 10-K yearly financial reports for stock
    '''

    def __initialStockDetailsIntoFirestore(self, symbol):
        print('initial fetching stock details for symbol ', symbol)

        self.db.collection('stockData').document(symbol).set({
            'detailsLastUpdate': datetime.today(),
            'overViewLastUpdate': datetime.today(),
            'newsLastUpdate': datetime.today(),
            'financialReportsLastUpdate': datetime.today()
        })

        data = self.__fetchStockDetails(symbol)

        self.__saveFinancialReportsToFirebase(symbol, data['financialReports'])

        data = self.__modifyFetchedStockDetails(symbol, data)

        self.__modifyDetailsToFirebase(symbol, {'details': data})

        return data

    def __modifyFetchedStockDetails(self, symbol, data):
        # extract financial report into sub collection and rewrite its object
        financialReports = data['financialReports']
        data['financialReports'] = [{
            'collection': str(report['year']),
            'name': report['form'] + ' ' + str(report['year'])
        } for report in financialReports]

        data['id'] = symbol
        # -----------------------------

        # format Analysis
        data['analysis']['GrowthEstimates'] = data['analysis']['GrowthEstimates'][0]
        GrowthEstimates = data['analysis']['GrowthEstimates']
        for k in list(GrowthEstimates.keys()):
            if k != 'name':
                GrowthEstimates[k + 'Prct'] = utils.force_float_skipping_last_char(GrowthEstimates[k])

        RevenueEstimate = data['analysis']['RevenueEstimate']
        for tmp in RevenueEstimate:
            tmp['AvgEstimateNumber'] = utils.force_float_skipping_last_char(tmp['AvgEstimate'])
            tmp['HighEstimateNumber'] = utils.force_float_skipping_last_char(tmp['HighEstimate'])
            tmp['LowEstimateNumber'] = utils.force_float_skipping_last_char(tmp['LowEstimate'])
            # if "HighEstimate": "1.48B" and "LowEstimate": "2M"
            if tmp['LowEstimate'] != 'N/A' and tmp['HighEstimate'][-1] != tmp['LowEstimate'][-1]:
                tmp['HighEstimateNumber'] = tmp['HighEstimateNumber'] * 1000
        # -------------------------------

        # format summary
        data['summary']['recommendationKey'] = data['companyData']['financialData']['recommendationKey']
        data['summary']['recommendationMean'] = data['companyData']['financialData']['recommendationMean']
        data['summary']['currency'] = data['companyData']['summaryDetail']['currency']
        data['summary']['logo_url'] = data['companyData']['summaryProfile']['logo_url']
        data['summary']['sector'] = data['companyData']['summaryProfile']['sector']
        data['summary']['industry'] = data['companyData']['summaryProfile']['industry']
        data['summary']['OneyTargetEst'] = utils.force_float(data['summary']['OneyTargetEst'])

        # -------------------------------
        # remove unnecessary data
        del data['summary']['Ask']
        del data['summary']['BetaFiveYMonthly']
        del data['summary']['Bid']
        del data['analysis']['EarningsEstimate']
        del data['analysis']['EarningsHistory']
        del data['analysis']['EPSRevisions']
        del data['analysis']['EPSTrend']
        del data['companyData']['calendarEvents']
        del data['companyData']['recommendationTrend']
        del data['companyData']['financialsTemplate']
        del data['summary']["Day'sRange"]
        del data['companyData']['quoteType']
        del data['companyData']['price']
        del data['companyData']['summaryDetail']
        return utils.changeUnsupportedCharactersForDictKey(data)

    '''
        fetch all details about one stock, call method to fetch fundamentals
    '''

    def __fetchStockDetails(self, symbol):
        que = Queue()
        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getCompanyData(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getAnalystsInfo(arg1)), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerStat(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerSummary(arg1)), args=(que, symbol))
        t5 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getIncomeStatement(arg1)), args=(que, symbol))
        t8 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getBalanceSheet(arg1)), args=(que, symbol))
        t9 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getCashFlow(arg1)), args=(que, symbol))
        t10 = Thread(target=lambda q, arg1: q.put(self.__getUpToDateStockNews(arg1)), args=(que, symbol))

        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))
        t11 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()
        t6.start()
        t7.start()
        t8.start()
        t9.start()
        t10.start()
        t11.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()
        t6.join()
        t7.join()
        t8.join()
        t9.join()
        t10.join()
        t11.join()

        # get result from threads into one dict
        merge = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(),
                 **que.get(), **que.get(), **que.get(), **que.get()}

        return merge
