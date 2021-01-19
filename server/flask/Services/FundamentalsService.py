from ExternalAPI import Finhub
from ExternalAPI.YahooFinance import YahooFinance
from threading import Thread
from queue import Queue
from datetime import datetime, timedelta
import threading
from pytz import UTC
from ExternalAPI import utils
from firebase_admin import credentials, firestore, initialize_app, _apps as firestoreApps

from ExternalAPI.utils import cammelCaseToWord

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
        data = self.__fetchStockDetails(symbol)
        return self.__modifyFetchedStockDetails(symbol, data)

    # --------------------------------------------------------------------
    # --------------------------------------------------------------------
    # private methods

    '''
       get stock news if does not exists or older than 8 hours
    '''

    def __getUpToDateStockNews(self, symbol):
        stockNewsFinhubArray = self.finhub.getNewsForSymbol(symbol)['stockNews']
        return {'stockNews': stockNewsFinhubArray}

    def __modifyFetchedStockDetails(self, symbol, data):
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

            if self.data['analysis'].get('growthEstimates') is not None:
                self.data['analysis']['growthEstimates'] = self.data['analysis']['growthEstimates'][0]
                GrowthEstimates = self.data['analysis']['growthEstimates']
                for k in list(GrowthEstimates.keys()):
                    if k != 'name':
                        GrowthEstimates[k + 'Prct'] = utils.force_float_skipping_last_char(GrowthEstimates[k])

            if self.data['analysis'].get('revenueEstimate') is not None:
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

    def formatStatementData(self):
        res = {'balanceSheet': {},  # 'quaretly': {}, 'yearly': {}
               'cashFlow': {},  # 'quaretly': {}, 'yearly': {}
               'incomeStatement': {}  # 'quaretly': {}, 'yearly': {}
               }
        for statement in ['balanceSheet', 'cashFlow', 'incomeStatement']:
            for timePeriod in self.data.get(statement):  # quarterly & yearly
                data = self.data.get(statement).get(timePeriod)

                # merge keys, one key does not have to be at first index
                periodKeys = set()
                for i in range(len(data)):
                    periodKeys |= set(list(data[i].keys()))

                periodKeys = list(periodKeys)  # [accountsPayable, capitalSurplus, ...]
                res[statement][timePeriod] = {}
                dataLoop = len(data)  # usualy 4 quartes and 4 years but may be lower
                for periodKeysIndex in range(len(periodKeys)):
                    res[statement][timePeriod][periodKeys[periodKeysIndex]] = {
                        'name': cammelCaseToWord(periodKeys[periodKeysIndex]),
                        'data': [],
                        'change': []
                    }
                    for timePeriodDataNumber in range(dataLoop):
                        try:
                            value = data[timePeriodDataNumber][periodKeys[periodKeysIndex]]  # may not exists
                            change = None
                            try:
                                nextValue = data[timePeriodDataNumber + 1][periodKeys[periodKeysIndex]]
                                change = round((value - nextValue) / abs(nextValue) * 100, 2)
                            except:
                                pass

                            res[statement][timePeriod][periodKeys[periodKeysIndex]]['data'].append(value)
                            res[statement][timePeriod][periodKeys[periodKeysIndex]]['change'].append(change)
                        except:
                            res[statement][timePeriod][periodKeys[periodKeysIndex]]['data'].append(None)
                            res[statement][timePeriod][periodKeys[periodKeysIndex]]['change'].append(None)

                    # if empty do not include
                    if len(res[statement][timePeriod][periodKeys[periodKeysIndex]]['data']) == 0:
                        del res[statement][timePeriod][periodKeys[periodKeysIndex]]
                del res[statement][timePeriod]['maxAge']

        # rename some element
        rename = {
            'balanceSheet': {
                'shortLongTermDebt': 'Short term debt',
                'accumulatedComprehensiveIncome': 'Comprehensive income'
            },
            'incomeStatement': {
                'totalOtherIncomeExpenseNet': 'Other income expense',
                'netIncomeFromContinuingOps': 'Continuing operation income'
            },
            'cashFlow': {
                # 'otherCashflowsFromFinancingActivities': 'Other financing activities',
                # 'otherCashflowsFromInvestingActivities': 'Other investing activities'
            }
        }
        for sheet in rename:
            for k in rename[sheet]:
                sheet = sheet + 'Statement' if sheet == 'cashFlow' else sheet
                if k in res[sheet][sheet + 'HistoryQuarterly']:
                    res[sheet][sheet + 'HistoryQuarterly'][k]['name'] = rename[sheet][k]

        # save
        self.data['balanceSheet'] = res['balanceSheet']
        self.data['cashFlow'] = res['cashFlow']
        self.data['incomeStatement'] = res['incomeStatement']

    def formatEarningsFinancialChart(self):
        try:
            if self.data['companyData']['earnings'] is None:
                return
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

    def fomatFinancialReports(self):
        quarterly = self.data.get('financialReportsQuarterly')
        yearly = self.data.get('financialReportsYearly')

        neededData = {
            'bs': {
                'AccumulatedOtherComprehensiveIncomeLossNetOfTax': 'accumulatedComprehensiveIncome',
                'AvailableForSaleSecuritiesNoncurrent': 'totalSecuritiesForSale',
                # 'AdditionalPaidInCapital': 'PaidInCapital',
                'CommonStockValue': 'commonStockValue',
                'ContractWithCustomerLiabilityCurrent': 'deferredRevenue',
                # 'LiabilitiesCurrent': '',
                'OperatingLeaseLiabilityCurrent': 'operatingLeaseLiability',
                'Goodwill': 'goodwill',
                'AccountsPayableCurrent': 'accountsPayable',
                'OtherAssetsCurrent': 'prepaidAssets',
                # 'IntangibleAssetsNetExcludingGoodwill': 'IntangibleAssets',
                # 'RetainedEarningsAccumulatedDeficit': 'RetainedEarnings',
                'PrepaidExpenseAndOtherAssetsCurrent': 'prepaidExpense',
                'PropertyPlantAndEquipmentNet': 'netEquity',
                # 'LongTermDebtCurrent': 'CurrentDebt',
                # 'LongTermDebtNoncurrent': 'LongTermDebt',
                # 'AccountsPayableCurrent': 'AccountsPayable',
                # 'CashAndCashEquivalentsAtCarryingValue': 'CashEquivalents'
            },
            "cf": {
                'ShareBasedCompensation': 'shareBasedCompensation',
                'IncreaseDecreaseInAccountsReceivable': 'accountsReceivable',
                # 'IncreaseDecreaseInAccountsPayableTrade': 'AccountsPayable',
                'IncreaseDecreaseInAccruedLiabilities': 'accruedExpenses',
                # 'PaymentsToAcquirePropertyPlantAndEquipment': 'PurchasesOfEquipment',
                'PaymentsToAcquireMarketableSecurities': 'purchasesOfSecuritie',
                'MarketableSecuritiesCurrent': 'marketSecurities',
                'PaymentsToAcquireBusinessesNetOfCashAcquired': 'acquisitionsOfBusinesses',
                'ProceedsFromIssuanceOfCommonStock': 'issuanceOfStock',
                'IncreaseDecreaseInContractWithCustomerLiability': 'customerDeposits',
                # 'PaymentsOfDividends': 'PaymentsOfDividends',
                'ProceedsFromSaleOfAvailableForSaleSecuritiesDebt': 'salesOfSecurities',
                'ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities': 'maturitiesOfSecurities',
                'IncomeTaxesPaidNet': 'incomeTax',
                'CapitalExpendituresIncurredButNotYetPaid': 'accruedEquipment',
                'RepaymentsOfLongTermDebt': 'longTermDebtRepayments',
                'ProceedsFromRepaymentsOfCommercialPaper': 'commercialPaperRepayments',
                # 'RepaymentsOfOtherLongTermDebt': 'LongTermDebtRepayments',
                'ProceedsFromRepaymentsOfShortTermDebt': 'shortTermDebtRepayments',
                'ProceedsFromIssuanceOfOtherLongTermDebt': 'longTermDebtInsurance',
                'DeferredIncomeTaxExpenseBenefit': 'deferredTaxes'
            },
            "ic": {
                'EarningsPerShareDiluted': 'dilutedEarnings',
                'EarningsPerShareBasic': 'basicEarnings',
                # 'CostsAndExpenses': 'CostsAndExpenses',
                # 'AllocatedShareBasedCompensationExpense': 'shareBasedCompensation',
                'CommonStockDividendsPerShareDeclared': 'dividendsInCash',
                'SellingGeneralAndAdministrativeExpense': 'administrativeExpense',
                'CostOfGoodsAndServicesSold': 'costOfSales',
                'IncomeTaxExpenseBenefit': 'incomeTaxProvision',
                'MarketingExpense': 'marketingExpense',
                'InterestExpense': 'interestExpense'
            }
        }
        for i in range(len(quarterly)):
            for statement in ['bs', 'cf', 'ic']:
                statementNew = 'balanceSheet' if statement == 'bs' else 'cashFlow' if statement == 'cf' else 'incomeStatement'
                statementNewKey = 'cashflowStatement' if statementNew == 'cashFlow' else statementNew

                # QUARTERS
                for data in quarterly[i]['report'][statement]:
                    '''
                      "concept": "CashAndCashEquivalentsAtCarryingValue",
                      "label": "Cash and cash equivalents",
                      "unit": "usd",
                      "value": 19079000000
                    '''
                    if data['concept'] in neededData[statement]:
                        newKey = neededData[statement][data['concept']]
                        self.data[statementNew][statementNewKey + 'HistoryQuarterly'][i][newKey] = data['value']

                # YEARS - may be less than quarterly data
                if i < len(yearly):
                    for data in yearly[i]['report'][statement]:
                        if data['concept'] in neededData[statement]:
                            newKey = neededData[statement][data['concept']]
                            self.data[statementNew][statementNewKey + 'HistoryYearly'][i][newKey] = data['value']

    def formatSummary(self):
        try:
            financialData = {} if self.data['companyData']['financialData'] is None else self.data['companyData'][
                'financialData']
            summaryDetail = {} if self.data['companyData']['summaryDetail'] is None else self.data['companyData'][
                'summaryDetail']
            summaryProfile = {} if self.data['companyData']['summaryProfile'] is None else self.data['companyData'][
                'summaryProfile']
            defaultKeyStatistics = {} if self.data['companyData']['defaultKeyStatistics'] is None else \
                self.data['companyData']['defaultKeyStatistics']
            price = {} if self.data['companyData']['price'] is None else self.data['companyData']['price']

            self.data['summary']['recommendationKey'] = financialData.get('recommendationKey')
            self.data['summary']['recommendationMean'] = financialData.get('recommendationMean')

            self.data['summary']['currency'] = summaryDetail.get('currency')

            self.data['summary']['logo_url'] = summaryProfile.get('logo_url')
            self.data['summary']['sector'] = summaryProfile.get('sector')
            self.data['summary']['industry'] = summaryProfile.get('industry')
            self.data['summary']['longBusinessSummary'] = summaryProfile.get('longBusinessSummary')
            self.data['summary']['website'] = summaryProfile.get('website')
            self.data['summary']['fullTimeEmployees'] = summaryProfile.get('fullTimeEmployees')
            self.data['summary']['residance'] = {}
            self.data['summary']['residance']['city'] = summaryProfile.get('city')
            self.data['summary']['residance']['state'] = summaryProfile.get('state')
            self.data['summary']['residance']['country'] = summaryProfile.get('country')
            self.data['summary']['residance']['addressOne'] = summaryProfile.get('addressOne')
            self.data['summary']['residance']['zip'] = summaryProfile.get('zip')

            self.data['summary']['oneyTargetEst'] = utils.force_float(self.data['summary'].get('oneyTargetEst'))
            self.data['summary']['currencySymbol'] = price.get('currencySymbol')
            self.data['summary']['shortName'] = price.get('shortName')
            self.data['summary']['longName'] = price.get('longName')
            self.data['summary']['marketCap'] = price.get('marketCap')

            self.data['summary']['sharesOutstanding'] = defaultKeyStatistics.get('sharesOutstanding')
            self.data['summary']['sandPFiveTwoWeekChange'] = defaultKeyStatistics.get('sandPFiveTwoWeekChange')
            self.data['summary']['fiveTwoWeekChange'] = defaultKeyStatistics.get('fiveTwoWeekChange')
            self.data['summary']['lastSplitFactor'] = defaultKeyStatistics.get('lastSplitFactor')
            self.data['summary']['lastSplitDate'] = defaultKeyStatistics.get('lastSplitDate')

            self.data['summary']['netIncomeEmployeeAnnual'] = self.data['metric'].get('netIncomeEmployeeAnnual')
            self.data['summary']['revenueEmployeeAnnual'] = self.data['metric'].get('revenueEmployeeAnnual')


        except Exception as e:
            print('formatSummary exception: ' + str(e))
            pass

    def formatDividends(self):
        try:
            self.data['dividends'] = {
                'dividendGrowthRateFiveY': self.data['metric'].get('dividendGrowthRateFiveY'),
                'currentDividendYieldTTM': self.data['metric'].get('currentDividendYieldTTM'),
                'dividendPerShareAnnual': self.data['metric'].get('dividendPerShareAnnual'),
                'dividendPerShareFiveY': self.data['metric'].get('dividendPerShareFiveY'),
                'dividendYieldFiveY': self.data['metric'].get('dividendYieldFiveY'),
                'dividendYieldIndicatedAnnual': self.data['metric'].get('dividendYieldIndicatedAnnual'),
                'dividendsPerShareTTM': self.data['metric'].get('dividendsPerShareTTM'),
                'exDividendDate': self.data['summary'].get('exDividendDate'),
                'forwardDividendYield': self.data['summary'].get('forwardDividendYield'),
                'trailingAnnualDividendRate': self.data['stats'].get('trailingAnnualDividendRateThree'),
                'trailingAnnualDividendYield': self.data['stats'].get('trailingAnnualDividendYieldThree')
            }
        except Exception as e:
            print('formatDividends exception: ' + str(e))
            pass

    def removeUnnecessaryData(self):
        try:
            self.data['summary'].pop("ask", None)
            self.data['summary'].pop("betaFiveYMonthly", None)
            self.data['summary'].pop("bid", None)
            self.data['analysis'].pop("earningsEstimate", None)
            self.data['analysis'].pop("earningsHistory", None)
            self.data['analysis'].pop("ePSRevisions", None)
            self.data['analysis'].pop("ePSTrend", None)
            self.data['companyData'].pop("calendarEvents", None)
            self.data['companyData'].pop("recommendationTrend", None)
            self.data['companyData'].pop("financialsTemplate", None)
            self.data['summary'].pop("day'sRange", None)
            self.data['companyData'].pop("quoteType", None)
            self.data['companyData'].pop("price", None)
            self.data['companyData'].pop("summaryDetail", None)

            self.data['metric'].pop("dividendGrowthRateFiveY", None)
            self.data['metric'].pop("currentDividendYieldTTM", None)
            self.data['metric'].pop("dividendPerShareAnnual", None)
            self.data['metric'].pop("dividendPerShareFiveY", None)
            self.data['metric'].pop("dividendYieldFiveY", None)
            self.data['metric'].pop("dividendYieldIndicatedAnnual", None)
            self.data['metric'].pop("dividendsPerShareTTM", None)
            self.data['metric'].pop("forwardAnnualDividendYieldFour", None)
            self.data['metric'].pop("trailingAnnualDividendRateThree", None)
            self.data['stats'].pop("trailingAnnualDividendYieldThree", None)
            self.data['companyData'].pop("summaryProfile", None)

            self.data.pop('financialReportsQuarterly', None)
            self.data.pop('financialReportsYearly', None)
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))
