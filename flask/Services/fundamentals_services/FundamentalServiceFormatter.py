from datetime import datetime
from ExternalAPI import utils


class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatFetchedStockDetails(self, symbol):
        self.data['id'] = symbol

        self.data = utils.changeUnsupportedCharactersForDictKey(self.data)

        # format data
        self._formatAnalysis()
        self._formatFinancialReports()
        self._formatSummary()
        self._formatDividends()
        self._formatEarningsFinancialChart()
        self._formatStatementData()
        self._formatHistoricalMetrics()
        self.data['recommendation'].reverse()

        # remove data
        self._removeUnnecessaryData()
        return self.data

    def _formatAnalysis(self):
        try:
            analysis_all = self.data.get('analysis_all')
            if not analysis_all:
                self.data['analysis'] = None
                return
            growth = []
            revenueEstimate = []
            earningsEstimate = []
            seasons = ['Current Qrt.', 'Next Qrt.', 'Current Year', 'Next Year', 'Next 5y.', 'Past 5y.']

            for i in range(len(analysis_all)):
                data = analysis_all[i]
                date = seasons[i]

                growth.append({'name': date, 'y': data.get('growth')})
                if i < 4:
                    date = seasons[i] + ' ' + datetime.strptime(data.get('endDate'), '%Y-%m-%d').strftime('(%b.) %Y')
                    rev = data.get('revenueEstimate')
                    revenueEstimate.append({
                        "avg": rev.get('avg'),
                        "high": rev.get('high'),
                        "low": rev.get('low'),
                        "name": date,
                        "noofAnalysts": rev.get('numberOfAnalysts'),
                        "growth": rev.get('growth'),
                        "yearAgo": rev.get('yearAgoRevenue')
                    })
                    ear = data.get('earningsEstimate')
                    earningsEstimate.append({
                        "avg": ear.get('avg'),
                        "high": ear.get('high'),
                        "low": ear.get('low'),
                        "name": date,
                        "noofAnalysts": ear.get('numberOfAnalysts'),
                        "growth": ear.get('growth'),
                        "yearAgo": ear.get('yearAgoEps')
                    })
            self.data['analysis'] = {
                'growthEstimates': growth,
                'revenueEstimate': revenueEstimate,
                'earningsEstimate': earningsEstimate
            }
        except Exception as e:
            print('formatAnalysis exception: ' + str(e))
            self.data['analysis'] = None

    def _formatHistoricalMetrics(self):
        if self.data['historicalMetrics'] is None:
            return None

        result = {}
        for k in self.data['historicalMetrics']:
            result[k] = {'data': [], 'dates': [], 'name': utils.cammelCaseToWord(k)}
            for data in self.data['historicalMetrics'][k]:
                result[k]['data'].insert(0, round(data.get('v'), 3))
                result[k]['dates'].insert(0, data.get('period').split('-')[0])  # 2020-X-X
        self.data['historicalMetrics'] = result

    def _formatStatementData(self):
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
                        'name': utils.cammelCaseToWord(periodKeys[periodKeysIndex]),
                        'data': [],
                        'change': []
                    }
                    for timePeriodDataNumber in range(dataLoop):
                        try:
                            value = utils.force_float(data[timePeriodDataNumber][periodKeys[periodKeysIndex]])
                            change = None
                            try:
                                nextValue = data[timePeriodDataNumber + 1][periodKeys[periodKeysIndex]]
                                change = (value - nextValue) / abs(nextValue)
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
                res[statement][timePeriod].pop('maxAge', None)

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
                for period in ['quarterly', 'yearly']:
                    if k in res[sheet][period]:
                        res[sheet][period][k]['name'] = rename[sheet][k]
        # save
        self.data['balanceSheet'] = res['balanceSheet']
        self.data['cashFlow'] = res['cashFlow']
        self.data['incomeStatement'] = res['incomeStatement']

    def _formatEarningsFinancialChart(self):
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

    # TODO refactor
    def _formatFinancialReports(self):
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
                        self.data[statementNew]['quarterly'][i][newKey] = data['value']

                # YEARS - may be less than quarterly data
                if i < len(yearly):
                    for data in yearly[i]['report'][statement]:
                        if data['concept'] in neededData[statement]:
                            newKey = neededData[statement][data['concept']]
                            if len(self.data[statementNew]['yearly']) <= i:
                                self.data[statementNew]['yearly'].append({})
                            self.data[statementNew]['yearly'][i][newKey] = data['value']

    def _formatSummary(self):
        try:
            summary_all = self.data['companyData']
            summaryProfile = summary_all.get('summaryProfile')
            price = summary_all.get('price')
            quote = summary_all.get('quoteType')
            detail = summary_all.get('summaryDetail')
            stats = summary_all.get('defaultKeyStatistics')
            financialData = summary_all.get('financialData')
            events = summary_all.get('calendarEvents')
            earnings = events.get('earnings').get('earningsDate')

            try:
                domain = summaryProfile['website'].split('://')[1].split('/')[0].replace('www.', '')
                logo_url = 'https://logo.clearbit.com/%s' % domain
            except Exception:
                logo_url = None

            summary = {
                'id': summary_all.get('symbol'),
                'shortRatio': stats.get('shortRatio'),
                'sandPFiveTwoWeekChange': stats.get('sandPFiveTwoWeekChange'),
                'lastSplitFactor': stats.get('lastSplitFactor'),
                'exchangeName': price.get('exchangeName'),
                'lastSplitDate': stats.get('lastSplitDate'),
                'fullTimeEmployees': summaryProfile.get('fullTimeEmployees'),
                'website': summaryProfile.get('website'),
                'residance': {
                    'city': summaryProfile.get('city'),
                    'state': summaryProfile.get('state'),
                    'country': summaryProfile.get('country'),
                    'addressOne': summaryProfile.get('addressOne'),
                    'zip': summaryProfile.get('zip'),
                },
                'avgVolume': detail.get('averageDailyVolumeOneDay'),
                'ePSTTM': stats.get('trailingEps'),
                'forwardEPS': stats.get('forwardEps'),
                'earningsDate': earnings[0] if earnings is not None and len(earnings) > 0 else None,
                'dividendDate': events.get('dividendDate'),
                'exDividendDate': events.get('exDividendDate'),
                'forwardDividendYield': detail.get('dividendYield'),
                'forwardDividendRate': detail.get('dividendRate'),
                'fiveTwoWeekRange': str(detail.get('fiftyTwoWeekLow')) + ' - ' + str(detail.get('fiftyTwoWeekHigh')),
                'oneyTargetEst': financialData.get('targetMeanPrice'),
                'open': price.get('regularMarketOpen'),
                'pERatioTTM': detail.get('trailingPE'),
                'forwardPE': detail.get('forwardPE'),
                'volume': detail.get('volume'),
                'currency': price.get('currency'),
                'industry': summaryProfile.get('industry'),
                'logo_url': logo_url,
                'marketPrice': financialData.get('currentPrice'),
                'previousClose': detail.get('previousClose'),
                'recommendationKey': financialData.get('recommendationKey'),
                'recommendationMean': financialData.get('recommendationMean'),
                'sector': summaryProfile.get('sector'),
                'symbol': summary_all.get('symbol'),
                'targetEstOneyPercent': utils.force_round(
                    financialData.get('currentPrice') / financialData.get('targetMeanPrice'), 2) if financialData.get(
                    'targetMeanPrice') is not None else None,
                'weekRangeFiveTwoMax': detail.get('fiftyTwoWeekHigh'),
                'weekRangeFiveTwoMin': detail.get('fiftyTwoWeekLow'),
                'currencySymbol': price.get('currencySymbol'),
                'shortName': quote.get('shortName'),
                'longName': quote.get('longName'),
                'marketCap': detail.get('marketCap'),
                'sharesOutstanding': stats.get('sharesOutstanding'),
                'longBusinessSummary': summaryProfile.get('longBusinessSummary'),
                'yearToDatePriceReturn': stats.get('fiveTwoWeekChange'),
                'yearToDatePrice': utils.force_round(
                    financialData.get('currentPrice') / (1 + stats.get('fiveTwoWeekChange')), 2)
            }
            self.data['summary'] = summary
        except Exception as e:
            print('formatSummary exception: ' + str(e))

    def _formatDividends(self):
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
                'trailingAnnualDividendRate': self.data['companyData']['summaryDetail'].get(
                    'trailingAnnualDividendRate'),
                'trailingAnnualDividendYield': self.data['companyData']['summaryDetail'].get(
                    'trailingAnnualDividendYield'),
            }
        except Exception as e:
            print('formatDividends exception: ' + str(e))
            pass

    def _removeUnnecessaryData(self):
        try:
            self.data['companyData'].pop("calendarEvents", None)
            self.data['companyData'].pop("recommendationTrend", None)
            self.data['companyData'].pop("financialsTemplate", None)
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

            self.data.pop('financialReportsQuarterly', None)
            self.data.pop('financialReportsYearly', None)
            self.data.pop('analysis_all')
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))
