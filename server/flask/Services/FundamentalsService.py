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

        # No record in firestore, first time fetch or older than 2 weeks
        if stockDetailsDict is None or twoWeeksBefore > stockDetailsDict['detailsLastUpdate'].replace(tzinfo=utc):
            return self.__initialStockDetailsIntoFirestore(symbol)

        # updating stock news into firestore every 8 hours
        lastestStockNews = self.__getUpToDateStockNews(symbol, stockDetailsDict['newsLastUpdate'])
        if lastestStockNews is not None:
            stockDetailsDict['details']['stockNews'] = lastestStockNews['stockNews']
            self.db.collection('stockData').document(symbol).update({ 'newsLastUpdate': datetime.today(), })
            self.__modifyDetailsToFirebase(symbol, { 'details.stockNews': stockDetailsDict['details']['stockNews']})

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
            print('fetching news')
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
        data['id'] = symbol
        data = utils.changeUnsupportedCharactersForDictKey(data)
        dataFormatter = FundamentalServiceFormatter(data)

        # format data
        dataFormatter.formatFinancialReports()
        dataFormatter.formatAnalysis()
        dataFormatter.formatSummary()
        dataFormatter.formatDividends()
        dataFormatter.formatEarningsFinancialChart()
        data['recommendation'].reverse()

        # remove data
        dataFormatter.removeUnnecessaryData()
        return data

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



class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatAnalysis(self):
        try:
            self.data['analysis']['growthEstimates'] = self.data['analysis']['growthEstimates'][0]
            GrowthEstimates = self.data['analysis']['growthEstimates']
            for k in list(GrowthEstimates.keys()):
                if k != 'name':
                    GrowthEstimates[k + 'Prct'] = utils.force_float_skipping_last_char(GrowthEstimates[k])

            RevenueEstimate = self.data['analysis']['revenueEstimate']
            for tmp in RevenueEstimate:
                tmp['avgEstimateNumber'] = utils.force_float_skipping_last_char(tmp['avgEstimate'])
                tmp['highEstimateNumber'] = utils.force_float_skipping_last_char(tmp['highEstimate'])
                tmp['lowEstimateNumber'] = utils.force_float_skipping_last_char(tmp['lowEstimate'])
                tmp['salesGrowthyearestNumber'] = utils.force_float_skipping_last_char(tmp['salesGrowthyearest'])
                # if "HighEstimate": "1.48B" and "LowEstimate": "2M"
                if tmp['lowEstimate'] != 'N/A' and tmp['highEstimate'][-1] != tmp['lowEstimate'][-1]:
                    tmp['highEstimateNumber'] = tmp['highEstimateNumber'] * 1000
        except Exception as e:
            print('formatAnalysis exception: ' + str(e))
            pass

    def formatEarningsFinancialChart(self):
        try:
            for period in ['quarterly', 'yearly']:
                tmp = self.data['companyData']['earnings']['financialsChart'][period]
                self.data['companyData']['earnings']['financialsChart'][period] = {
                    'categories': [data['date'] for data in tmp],
                    'series': [{
                        'name': 'Revenue',
                        'data': [d['revenue'] for d in tmp]
                    }, {
                        'name': 'Earnings',
                        'data': [d['earnings'] for d in tmp]
                    }]
                }
        except Exception as e:
            print('formatEarningsFinancialChart exception: ' + str(e))
            pass

    def formatSummary(self):
        try:
            self.data['summary']['recommendationKey'] = self.data['companyData']['financialData']['recommendationKey']
            self.data['summary']['recommendationMean'] = self.data['companyData']['financialData']['recommendationMean']
            self.data['summary']['currency'] = self.data['companyData']['summaryDetail']['currency']
            self.data['summary']['logo_url'] = self.data['companyData']['summaryProfile']['logo_url']
            self.data['summary']['sector'] = self.data['companyData']['summaryProfile']['sector']
            self.data['summary']['industry'] = self.data['companyData']['summaryProfile']['industry']
            self.data['summary']['oneyTargetEst'] = utils.force_float(self.data['summary']['oneyTargetEst'])
            self.data['summary']['currencySymbol'] = self.data['companyData']['price']['currencySymbol']
            self.data['summary']['shortName'] = self.data['companyData']['price']['shortName']
            self.data['summary']['longName'] = self.data['companyData']['price']['longName']
            self.data['summary']['marketCap'] = self.data['companyData']['price']['marketCap']
            self.data['summary']['sharesOutstanding'] = self.data['companyData']['defaultKeyStatistics']['sharesOutstanding']
            self.data['summary']['longBusinessSummary'] = self.data['companyData']['summaryProfile']['longBusinessSummary']
        except Exception as e:
            print('formatSummary exception: ' + str(e))
            pass


    def formatDividends(self):
        try:
            self.data['dividends'] = {
                'dividendGrowthRateFiveY': self.data['metric']['dividendGrowthRateFiveY'],
                'currentDividendYieldTTM': self.data['metric']['currentDividendYieldTTM'],
                'dividendPerShareAnnual': self.data['metric']['dividendPerShareAnnual'],
                'dividendPerShareFiveY': self.data['metric']['dividendPerShareFiveY'],
                'dividendYieldFiveY': self.data['metric']['dividendYieldFiveY'],
                'dividendYieldIndicatedAnnual': self.data['metric']['dividendYieldIndicatedAnnual'],
                'dividendsPerShareTTM': self.data['metric']['dividendsPerShareTTM'],
                'exDividendDate': self.data['summary']['exDividendDate'],
                'forwardDividendYield': self.data['summary']['forwardDividendYield'],
                'trailingAnnualDividendRate': self.data['stats']['trailingAnnualDividendRateThree'],
                'trailingAnnualDividendYield': self.data['stats']['trailingAnnualDividendYieldThree']
            }
        except Exception as e:
            print('formatDividends exception: ' + str(e))
            pass

    def formatFinancialReports(self):
        # extract financial report into sub collection and rewrite its object
        financialReports = self.data['financialReports']
        self.data['financialReports'] = [{
            'collection': str(report['year']),
            'name': report['form'] + ' ' + str(report['year'])
        } for report in financialReports]

    def removeUnnecessaryData(self):
        try:
            del self.data['summary']['ask']
            del self.data['summary']['betaFiveYMonthly']
            del self.data['summary']['bid']
            del self.data['analysis']['earningsEstimate']
            del self.data['analysis']['earningsHistory']
            del self.data['analysis']['ePSRevisions']
            del self.data['analysis']['ePSTrend']
            del self.data['companyData']['calendarEvents']
            del self.data['companyData']['recommendationTrend']
            del self.data['companyData']['financialsTemplate']
            del self.data['summary']["day'sRange"]
            del self.data['companyData']['quoteType']
            del self.data['companyData']['price']
            del self.data['companyData']['summaryDetail']

            del self.data['metric']['dividendGrowthRateFiveY']
            del self.data['metric']['currentDividendYieldTTM']
            del self.data['metric']['dividendPerShareAnnual']
            del self.data['metric']['dividendPerShareFiveY']
            del self.data['metric']['dividendYieldFiveY']
            del self.data['metric']['dividendYieldIndicatedAnnual']
            del self.data['metric']['dividendsPerShareTTM']
            del self.data['stats']['forwardAnnualDividendYieldFour']
            del self.data['stats']['trailingAnnualDividendRateThree']
            del self.data['stats']['trailingAnnualDividendYieldThree']
            del self.data['companyData']['summaryProfile']['longBusinessSummary']
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))