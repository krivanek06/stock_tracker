from datetime import datetime
from Utils import characterModificationUtil
from time import mktime


class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatFetchedStockDetails(self, symbol):
        self.data['id'] = symbol

        self.data = characterModificationUtil.changeUnsupportedCharactersForDictKey(self.data)

        # format data
        # self._formatAnalysis()
        self._formatFinancialReports()
        self._formatSummary()
        self._formatDividends()
        self._formatEarningsFinancialChart()
        # self._formatStatementData()
        self._formatHistoricalMetrics()
        self.data['recommendation'].reverse()

        # change: nan, infinity -> null
        self.data = characterModificationUtil.check_value_correction(self.data)

        # remove data
        # self._removeUnnecessaryData()
        return self.data

    def _formatFinancialReports(self):
        def _formatReport(reports, isAggregation):
            # change value into -> {increase, increasePrct, value} -> compare with previous report (higher index)
            for idx, _report in enumerate(reports):
                for _period in ['bs', 'cf', 'ic']:
                    previousReportPeriod = reports[idx + 1]['report'][_period] if len(reports) - 1 > idx else None
                    for _statementData in _report['report'][_period]:
                        try:
                            # find from previous report period the same statement and make difference
                            previousStatement = next(x for x in previousReportPeriod if x['concept'] == _statementData['concept'])
                            _statementData['value'] = {
                                'value': _statementData['value'] - previousStatement['value'] if isAggregation else _statementData['value'],
                                'increase': _statementData['value'] - previousStatement['value'],
                                'increasePrct': (_statementData['value'] - previousStatement['value']) / previousStatement['value']
                            }
                        except:
                            _statementData['value'] = {'value': _statementData['value'], 'increase': None, 'increasePrct': None}

        quarterlyReports = self.data['allFinancialReportsQuarterly']
        yearlyReports = self.data['allFinancialReportsYearly']

        # change 'N/A' to null
        for report in quarterlyReports + yearlyReports:
            for period in ['bs', 'cf', 'ic']:
                for statementData in report['report'][period]:
                    if statementData['value'] == 'N/A':
                        statementData['value'] = None

        # financial reports may be only 3 months period, but sometimes all quarters starts from same startDate
        # so Q3 is the aggregation of all previous quarters, plus the current one. If this is the case
        # then subtract previous quarter Q3 = Q3 - Q2
        try:
            q0Start = quarterlyReports[0]['startDate']
            q1Start = quarterlyReports[1]['startDate']
            q2Start = quarterlyReports[2]['startDate']
            isQuarterlyAggregation = q0Start == q1Start or q1Start == q2Start
        except:
            isQuarterlyAggregation = False

        _formatReport(quarterlyReports, isQuarterlyAggregation)
        _formatReport(yearlyReports, False)


    '''
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
    '''

    def _formatHistoricalMetrics(self):
        if self.data['historicalMetrics'] is None:
            return None

        result = {}
        for k in self.data['historicalMetrics']:
            result[k] = {'data': [], 'dates': [], 'name': characterModificationUtil.cammelCaseToWord(k)}
            for data in self.data['historicalMetrics'][k]:
                result[k]['data'].insert(0, round(data.get('v'), 3))
                result[k]['dates'].insert(0, data.get('period').split('-')[0])  # 2020-X-X
        self.data['historicalMetrics'] = result

    '''
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
                        'name': characterModificationUtil.cammelCaseToWord(periodKeys[periodKeysIndex]),
                        'data': [],
                        'change': [],
                        'isPercent': False
                    }
                    for timePeriodDataNumber in range(dataLoop):
                        try:
                            value = characterModificationUtil.force_float(data[timePeriodDataNumber][periodKeys[periodKeysIndex]])
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
    '''

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
    '''
    def _formatFinancialReports(self):
        quarterly = self.data.get('financialReportsQuarterly')
        yearly = self.data.get('financialReportsYearly')

        neededData = {
            'bs': {
                'AccumulatedOtherComprehensiveIncomeLossNetOfTax': 'accumulatedComprehensiveIncome',
                'AvailableForSaleSecuritiesNoncurrent': 'totalSecuritiesForSale',
                'AdditionalPaidInCapital': 'paidInCapital',
                'CommonStockValue': 'commonStockValue',
                'ContractWithCustomerLiabilityCurrent': 'deferredRevenue',
                'OperatingLeaseLiabilityCurrent': 'operatingLeaseLiability',
                'Goodwill': 'goodwill',
                'AccountsPayableCurrent': 'accountsPayable',
                'OtherAssetsCurrent': 'prepaidAssets',
                'IntangibleAssetsNetExcludingGoodwill': 'intangibleAssets',
                'PrepaidExpenseAndOtherAssetsCurrent': 'prepaidExpense',
                'PropertyPlantAndEquipmentNet': 'netEquity',
                'CashAndCashEquivalentsAtCarryingValue': 'cash',
                'MarketableSecuritiesCurrent': 'shortTermInvestments',
                'AccountsReceivableNetCurrent': 'accountsReceivableNetCurrent',
                'InventoryNet': 'inventoryNet',
                'NontradeReceivablesCurrent': 'nontradeReceivablesCurrent',
                'AssetsCurrent': 'totalCurrentAssets',
                'MarketableSecuritiesNoncurrent': 'longTermInvestments',
                'OtherAssetsNoncurrent': 'otherAssetsNoncurrent',
                'AssetsNoncurrent': 'assetsNoncurrent',
                'Assets': 'totalAssets',
                'OtherLiabilitiesCurrent': 'otherLiabilitiesCurrent',
                'CommercialPaper': 'commercialPaper',
                'LongTermDebtCurrent': 'currentDebt',
                'LiabilitiesCurrent': 'totalCurrentLiabilities',
                'LongTermDebtNoncurrent': 'longTermDebt',
                'OtherLiabilitiesNoncurrent': 'otherLongTermLiabilities',
                'LiabilitiesNoncurrent': 'currentLiabilities',
                'CommitmentsAndContingencies': 'commitmentsAndContingencies',
                'RetainedEarningsAccumulatedDeficit': 'retainedEarningsAccumulatedDeficit',
                'StockholdersEquity': 'TotalStockholdersEquity',
                'AccruedIncomeTaxesNoncurrent': 'incomeTaxesLongTerm',
                'AccruedIncomeTaxesCurrent': 'incomeTaxesShortTerm'
            },
            "cf": {
                'ShareBasedCompensation': 'shareBasedCompensation',
                'IncreaseDecreaseInAccountsReceivable': 'accountsReceivable',
                # 'IncreaseDecreaseInAccountsPayableTrade': 'AccountsPayable',
                'IncreaseDecreaseInAccruedLiabilities': 'accruedExpenses',
                'PaymentsToAcquirePropertyPlantAndEquipment': 'paymentsOfEquipment',
                'PaymentsToAcquireMarketableSecurities': 'purchasesOfSecuritie',
                'MarketableSecuritiesCurrent': 'marketableSecurities',
                'PaymentsToAcquireBusinessesNetOfCashAcquired': 'acquisitionsOfBusinesses',
                'ProceedsFromIssuanceOfCommonStock': 'issuanceOfStock',
                'IncreaseDecreaseInContractWithCustomerLiability': 'customerDeposits',
                'PaymentsOfDividends': 'paymentsOfDividends',
                'ProceedsFromSaleOfAvailableForSaleSecuritiesDebt': 'salesOfSecurities',
                'ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities': 'maturitiesOfSecurities',
                'IncomeTaxesPaidNet': 'incomeTax',
                'CapitalExpendituresIncurredButNotYetPaid': 'accruedEquipment',
                'RepaymentsOfLongTermDebt': 'longTermDebtRepayments',
                'ProceedsFromRepaymentsOfCommercialPaper': 'commercialPaperRepayments',
                # 'RepaymentsOfOtherLongTermDebt': 'LongTermDebtRepayments',
                'ProceedsFromRepaymentsOfShortTermDebt': 'shortTermDebtRepayments',
                'ProceedsFromIssuanceOfOtherLongTermDebt': 'longTermDebtInsurance',
                'DeferredIncomeTaxExpenseBenefit': 'deferredTaxes',
                'DepreciationDepletionAndAmortization': 'DepreciationDepletionAndAmortization',
                'IncreaseDecreaseInInventories': 'increaseDecreaseInInventories',
                'IncreaseDecreaseInOtherReceivables': 'increaseDecreaseInOtherReceivables',
                'IncreaseDecreaseInOtherOperatingAssets': 'otherOperatingAssets',
                'IncreaseDecreaseInAccountsPayable': 'accountsPayable',
                'IncreaseDecreaseInOtherOperatingLiabilities': 'otherOperatingLiabilities',
                'NetCashProvidedByUsedInOperatingActivities': 'operatingActivities',
                'PaymentsToAcquireAvailableForSaleSecuritiesDebt': 'paymentsToAcquireSaleSecurities',
                'PaymentsToAcquireOtherInvestments': 'paymentsToAcquireOtherInvestments',
                'ProceedsFromSaleAndMaturityOfOtherInvestments': 'maturityOfOtherInvestments',
                'NetCashProvidedByUsedInInvestingActivities': 'investingActivities',
                'PaymentsRelatedToTaxWithholdingForShareBasedCompensation': 'shareBasedCompensationTax',
                'PaymentsForRepurchaseOfCommonStock': 'paymentsForRepurchaseOfCommonStock',
                'ProceedsFromIssuanceOfLongTermDebt': 'proceedsFromIssuanceOfLongTermDebt',
                'NetCashProvidedByUsedInFinancingActivities': 'financingActivities',
                'InterestPaidNet': 'interestPaidNet',
                'PaymentsToAcquireInvestments': 'paymentsToAcquireInvestments',
                'PaymentsOfDividendsCommonStock': 'paymentsOfDividends',
                'RepaymentsOfDebtMaturingInMoreThanThreeMonths': 'repaymentsOfDebt'
            },
            "ic": {
                'EarningsPerShareDiluted': 'dilutedEarnings',
                'EarningsPerShareBasic': 'basicEarnings',
                # 'CostsAndExpenses': 'CostsAndExpenses',
                # 'AllocatedShareBasedCompensationExpense': 'shareBasedCompensation',
                'CommonStockDividendsPerShareDeclared': 'dividendsInCash',
                'SellingGeneralAndAdministrativeExpense': 'administrativeExpense',
                'CostOfGoodsAndServicesSold': 'costOfRevenue',
                'IncomeTaxExpenseBenefit': 'incomeTaxProvision',
                'MarketingExpense': 'marketingExpense',
                'InterestExpense': 'interestExpense',
                'RevenueFromContractWithCustomerExcludingAssessedTax': 'revenue',
                'GrossProfit': 'grossProfit',
                'ResearchAndDevelopmentExpense': 'researchAndDevelopment',
                'OperatingExpenses': 'operatingExpenses',
                'OperatingIncomeLoss': 'operatingIncomeLoss',
                'IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest': 'incomeBeforeTax',
                'OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax': 'changeInMarketableDebtSecurities',
                'OtherComprehensiveIncomeLossReclassificationAdjustmentFromAOCIForSaleOfSecuritiesNetOfTax': 'adjustedNetGainsIncludedInNetIncome',
                'ComprehensiveIncomeNetOfTax': 'otherComprehensiveIncome',
                'SellingAndMarketingExpense': 'salesAndMarketing',

            }
        }
        for i in range(len(quarterly)):
            for statement in ['bs', 'cf', 'ic']:
                statementNew = 'balanceSheet' if statement == 'bs' else 'cashFlow' if statement == 'cf' else 'incomeStatement'

                # QUARTERS - may be empty - add dict
                if len(self.data[statementNew]['quarterly']) < i + 1:
                    self.data[statementNew]['quarterly'].append({})
                for data in quarterly[i]['report'][statement]:
                    if data['concept'] in neededData[statement]:
                        newKey = neededData[statement][data['concept']]
                        if len(self.data[statementNew]['quarterly']) > i:
                            self.data[statementNew]['quarterly'][i][newKey] = data['value']
                self.data[statementNew]['quarterly'][i]['endDate'] = mktime(datetime.strptime(quarterly[i]['endDate'], "%Y-%m-%d %H:%M:%S").timetuple())

                # YEARS - may be less than quarterly data
                if i < len(yearly):
                    if len(self.data[statementNew]['yearly']) < i + 1:
                        self.data[statementNew]['yearly'].append({})
                    for data in yearly[i]['report'][statement]:
                        if data['concept'] in neededData[statement]:
                            newKey = neededData[statement][data['concept']]
                            if len(self.data[statementNew]['yearly']) > i:
                                self.data[statementNew]['yearly'][i][newKey] = data['value']
                    self.data[statementNew]['yearly'][i]['endDate'] = mktime(datetime.strptime(yearly[i]['endDate'], "%Y-%m-%d %H:%M:%S").timetuple())
    '''

    def _formatSummary(self):
        try:
            summary_all = self.data['companyData']
            summaryProfile = summary_all.get('summaryProfile')
            price = summary_all.get('price')
            quote = summary_all.get('quoteType')
            detail = summary_all.get('summaryDetail')
            stats = {} if summary_all.get('defaultKeyStatistics') is None else summary_all.get('defaultKeyStatistics')
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
                'forwardPE': stats.get('forwardPE'),
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
                'targetEstOneyPercent': characterModificationUtil.force_round(
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
                'yearToDatePrice': characterModificationUtil.force_round(
                    financialData.get('currentPrice') / (1 + stats.get('fiveTwoWeekChange', 0)), 2)
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
