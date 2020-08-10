from ExternalAPI import YahooFinance, Finhub
from threading import Thread
from queue import Queue
from datetime import datetime
from firebase_admin import firestore
import Services.FirestoreService as FirestoreService
from dateutil import relativedelta
import threading
import pytz

utc=pytz.UTC

class FundamentalsService:
    def __init__(self):
        self.yahooFinance = YahooFinance.YahooFinance()
        self.yahooFinanceDataModification = YahooFinance.YahooFinanceDataModification()
        self.finhub = Finhub.Finhub()
        self.db = FirestoreService.FirestoreService().initFirestore()


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

        # updating stock news into firestore
        lastestStockNews = self.__getUpToDateStockNews(symbol, stockDetailsDict['newsLastUpdate'])
        if lastestStockNews is not None:
            lastestStockNews = lastestStockNews['stockNews']
            self.__modifyStockNewsToFirebase(symbol, lastestStockNews, stockDetailsDict['newsLastDelete'].replace(tzinfo=utc))
            stockDetailsDict['details']['stockNewsSnippets'] = lastestStockNews[0:15] + stockDetailsDict['details']['stockNewsSnippets'][0 : 15 - len(lastestStockNews) ]
            self.__modifyDetailsToFirebase(symbol, {'details.stockNewsSnippets': stockDetailsDict['details']['stockNewsSnippets']})


        # modify overview each 45 min because of volume
        fourtyFiveMinutesBefore = (datetime.today() - relativedelta.relativedelta(minutes=45)).replace(tzinfo=utc)

        if fourtyFiveMinutesBefore > stockDetailsDict['overViewLastUpdate'].replace(tzinfo=utc):
            print('update overview for ', symbol)
            summary = self.yahooFinance.getTickerSummary(symbol)

            # create overview object same as was saved in firestore
            overview = self.yahooFinanceDataModification.createOverviewDict(summary)
            update = {'details.overview':  overview, 'overViewLastUpdate': datetime.today()}

            self.__modifyDetailsToFirebase(symbol, update)

        print('get stock fundamentals -> done')
        return stockDetailsDict['details']



    '''
       Get 10 stock news for symbol from firestore older than specified timestamp
    '''
    def getStockNewsFromFirestore(self, symbol, timestamp):
        print('get news by older than ', timestamp, '  for symbol ', symbol)
        stockNewsCollection = self.db.collection('stockData').document(symbol).collection('stockNews')

        stockNewsArray = [news.to_dict() for news in stockNewsCollection
                .where('datetime', '<', int(timestamp))
                .order_by('datetime', direction=firestore.firestore.Query.DESCENDING)
                .limit(10)
                .get() ]
        return {'stockNews': stockNewsArray}

    def getStockFinancialReport(self, symbol, financialReportName):
        return self.db.collection('stockData').document(symbol).collection('stockFinancialReports').document(financialReportName).get().to_dict()


    # --------------------------------------------------------------------
    # --------------------------------------------------------------------
    # private methods


    '''
        if news does not exists in firestore fetch news 7 days old
        if latest is older than 6 hours, fetch news in this day and filter which has higher timestamp than latest in firestore
    '''
    def __getUpToDateStockNews(self, symbol, newsLastUpdate = None):
        sixHoursBefore = (datetime.today() - relativedelta.relativedelta(hours=6)).replace(tzinfo=utc)

        if newsLastUpdate is None or sixHoursBefore > newsLastUpdate.replace(tzinfo=utc):
            lastTimestamp = [news.to_dict()['datetime'] for news in self.db.collection('stockData').document(symbol).collection('stockNews')
                                        .order_by('datetime', direction=firestore.firestore.Query.DESCENDING)
                                        .limit(1)
                                        .get()]

            lastTimestamp = lastTimestamp[0] if len(lastTimestamp) > 0 else None
            stockNewsFinhubArray = self.finhub.getNewsForSymbol(symbol, lastTimestamp)['stockNews']
            stockNewsFinhubArray = [e for e in stockNewsFinhubArray if e['datetime'] > lastTimestamp] if lastTimestamp is not None else stockNewsFinhubArray

            testTimestamp = stockNewsFinhubArray[0]['datetime'] if len(stockNewsFinhubArray) > 0 else 0
            print('fetching fresh news for symbol ', symbol, ' distinct news ',
                  len(stockNewsFinhubArray), ' distinct news first timestamp ', testTimestamp, ' our timestamp', lastTimestamp)

            return {'stockNews': stockNewsFinhubArray}
        return None




    '''
        create a thread which will save news into firestore
        and check if last delete is older than 2 weeks.
        If last delete is older then delete older than 7 days
    '''
    def __modifyStockNewsToFirebase(self, symbol, stockNewsArray, lastDelete = None):
        def __saveCurrentNewsIntoFirestore(symbol, persistNews):
            print('saving news into firestore, size : ', len(persistNews), ' for symbol ', symbol)
            self.db.collection('stockData').document(symbol).update( {'newsLastUpdate': datetime.today()})
            for stockNews in persistNews:
                self.db.collection('stockData').document(symbol).collection('stockNews').add(stockNews)

        def __removeOldNewsInFirestore(symbol, lastDelete):
            if lastDelete is not None:
                sevenDaysBefore = (datetime.today() - relativedelta.relativedelta(days=7)).replace(tzinfo=utc)
                if sevenDaysBefore > lastDelete:
                    print('last delete time' , lastDelete, 'deleting older than ', sevenDaysBefore, ' news for symbol ', symbol)
                    oldNewsDocs = self.db.collection('stockData').document(symbol).collection('stockNews').where('datetime', '<', sevenDaysBefore.timestamp()).stream()
                    for doc in oldNewsDocs:
                        doc.reference.delete()
                    self.db.collection('stockData').document(symbol).update({'newsLastDelete': datetime.today()})

        t1 = threading.Thread(target=__saveCurrentNewsIntoFirestore, args=(symbol, stockNewsArray))
        t2 = threading.Thread(target=__removeOldNewsInFirestore, args=(symbol, lastDelete))

        t1.daemon = True
        t2.daemon = True

        t1.start()
        t2.start()

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
            'newsLastDelete': datetime.today(),
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

        stockNewsArray = merge['stockNews']
        details = merge['details']
        details['id'] = symbol
        details['stockNewsSnippets'] = stockNewsArray[:15]

        self.__modifyDetailsToFirebase(symbol, {'details': details})
        self.__modifyStockNewsToFirebase(symbol, stockNewsArray)

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