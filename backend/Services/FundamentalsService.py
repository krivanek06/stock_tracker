from ExternalAPI import YahooFinance, Finhub
from threading import Thread
from queue import Queue
from datetime import datetime
from dateutil import relativedelta
import threading
import pytz
from firebase_admin import credentials, firestore, initialize_app, _apps as firestoreApps

utc=pytz.UTC

class FundamentalsService:
    def __init__(self):
        self.yahooFinance = YahooFinance.YahooFinance()
        self.yahooFinanceDataModification = YahooFinance.YahooFinanceDataModification()
        self.finhub = Finhub.Finhub()

        if not firestoreApps:
            cred = credentials.Certificate('private_data/firebase_key.json')
            default_app = initialize_app(cred)
        self.db = firestore.client()


    '''
        return details with latest 10 news
    '''
    def getStockDetails(self, symbol):
        stockDetailsDict = self.db.collection('stockData').document(symbol).get().to_dict()
        twoWeeksBefore = (datetime.today() - relativedelta.relativedelta(weeks=2)).replace(tzinfo=utc)

        # No record in firestore, first time fetch
        if stockDetailsDict is None or twoWeeksBefore > stockDetailsDict['detailsLastUpdate'].replace(tzinfo=utc):
            return self.__initialStockDetailsIntoFirestore(symbol)

        print('getting details from firestore for symbol ', symbol)

        # updating stock news into firestore every 8 hours
        lastestStockNews = self.__getUpToDateStockNews(symbol, stockDetailsDict['newsLastUpdate'])
        if lastestStockNews is not None:
            stockDetailsDict['details']['stockNewsSnippets'] =  lastestStockNews['stockNews']
            self.__modifyDetailsToFirebase(symbol, {'details.stockNewsSnippets': stockDetailsDict['details']['stockNewsSnippets']})


        # modify overview at the start of each day
        if (datetime.today().replace(tzinfo=utc) - stockDetailsDict['overViewLastUpdate'].replace(tzinfo=utc)).days > 0:
            print('update overview for ', symbol)
            overview = self.yahooFinance.getTickerSummary(symbol)
            overview = self.yahooFinanceDataModification.createOverviewDict(overview)
            update = {'details.overview':  overview, 'overViewLastUpdate': datetime.today()}

            self.__modifyDetailsToFirebase(symbol, update)

        print('get stock fundamentals -> done')
        return stockDetailsDict['details']



    def getStockFinancialReport(self, symbol, financialReportName):
        return self.db.collection('stockData').document(symbol).collection('stockFinancialReports').document(financialReportName).get().to_dict()


    # --------------------------------------------------------------------
    # --------------------------------------------------------------------
    # private methods


    '''
       get stock news if does not exists or older than 8 hours
    '''
    def __getUpToDateStockNews(self, symbol, newsLastUpdate = None):
        sixHoursBefore = (datetime.today() - relativedelta.relativedelta(hours=8)).replace(tzinfo=utc)

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
        def __saveFinancialReports(symbol ,reports):
            for report in reports:
                report['source'] = 'Finnhub'
                self.db.collection('stockData').document(symbol).collection('stockFinancialReports').document(str(report['year'])).set(report)

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

        que = Queue()

        t1 = Thread(target=lambda q, arg1: q.put(self.__getUpToDateStockNews(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.__fetchStockDetails(arg1)), args=(que, symbol))

        t1.start()
        t2.start()

        t1.join()
        t2.join()

        merge = {**que.get(), **que.get()}

        details = merge['details']
        details['id'] = symbol
        details['stockNewsSnippets'] = merge['stockNews']

        self.__modifyDetailsToFirebase(symbol, {'details': details})
        # self.__modifyStockNewsToFirebase(symbol, stockNewsArray)

        return details



    '''
        fetch all details about one stock, call method to fetch fundamentals
    '''
    def __fetchStockDetails(self, symbol):
        que = Queue()
        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put(self.__getStockMergedFundamentals(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getBalanceSheet(arg1)), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getIncomeStatement(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getCashFlow(arg1)), args=(que, symbol))
        t5 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getAnalystsInfo(arg1)), args=(que, symbol))
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getRecomendationForSymbol(arg1)), args=(que, symbol))
        t7 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockYearlyFinancialReport(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()
        t6.start()
        t7.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()
        t6.join()
        t7.join()

        # get result from threads into one dict
        merge = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}

        # extract financial report into sub collection
        financialReports = merge['financialReports']

        self.__saveFinancialReportsToFirebase(symbol, financialReports)

        merge['financialReports'] = [{
            'collection': str(report['year']),
            'name': report['form'] + ' ' + str(report['year'])
        } for report in financialReports]

        return {'details': merge}

    def __getStockMergedFundamentals(self, symbol):
        que = Queue()

        # declare threads
        t1 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerSummary(arg1)), args=(que, symbol))
        t2 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerInfo(arg1)), args=(que, symbol))
        t3 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getTickerStat(arg1)), args=(que, symbol))
        t4 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getAnalystsInfo(arg1)), args=(que, symbol))
        t5 = Thread(target=lambda q, arg1: q.put(self.yahooFinance.getBalanceSheet(arg1)), args=(que, symbol))
        t6 = Thread(target=lambda q, arg1: q.put(self.finhub.getStockMetrics(arg1)), args=(que, symbol))

        # start threads
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        t5.start()
        t6.start()

        # wait threads to finish
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        t5.join()
        t6.join()

        # return value from threads and merge everything in one dict
        merge = {**que.get(), **que.get(), **que.get(), **que.get(), **que.get(), **que.get()}
        return self.yahooFinanceDataModification.modifyCustomMakeDeepInfo(merge)