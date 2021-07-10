from Utils import characterModificationUtil


class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatFetchedStockDetails(self, symbol):
        self.data['id'] = symbol

        self.data = characterModificationUtil.changeUnsupportedCharactersForDictKey(self.data)

        # format data
        self._formatFinancialReports()
        self._formatSummary()
        self._formatDividends()
        self._formatEarningsFinancialChart()
        self._formatHistoricalMetrics()
        self._formatMutualFundHolders()
        self._formatInstitutionalHolder()
        self.data['recommendation'].reverse()

        # change: nan, infinity -> null
        self.data = characterModificationUtil.check_value_correction(self.data)

        # remove data
        self._removeUnnecessaryData()
        return self.data

    def _formatInstitutionalHolder(self):
        self.data['institutionalHolders'] = sorted(self.data['institutionalHolders'], key=lambda k: k['shares'], reverse=True)[0:15]

    def _formatMutualFundHolders(self):
        self.data['mutualFundHolders'] = sorted([holder for holder in self.data['mutualFundHolders'] if holder['weightPercent'] is not None],
                                                key=lambda k: k['shares'],
                                                reverse=True)[0:15]

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

    def _formatSummary(self):
        try:
            summary_all = self.data['companyData']
            detail = summary_all.get('summaryDetail')
            stats = {} if summary_all.get('defaultKeyStatistics') is None else summary_all.get('defaultKeyStatistics')
            financialData = summary_all.get('financialData')
            events = summary_all.get('calendarEvents')
            earnings = events.get('earnings').get('earningsDate')
            profile = self.data['companyOutlook']['profile']

            summary = {
                'id': summary_all.get('symbol'),
                'shortRatio': stats.get('shortRatio'),
                'sandPFiveTwoWeekChange': stats.get('sandPFiveTwoWeekChange'),
                'lastSplitFactor': stats.get('lastSplitFactor'),
                'exchangeName': profile.get('exchangeShortName'),
                'lastSplitDate': stats.get('lastSplitDate'),
                'website': profile.get('website'),
                'residance': {
                    'city': profile.get('city'),
                    'state': profile.get('state'),
                    'country': profile.get('country'),
                    'addressOne': profile.get('address'),
                    'zip': profile.get('zip'),
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
                'pERatioTTM': detail.get('trailingPE'),
                'forwardPE': stats.get('forwardPE'),
                'volume': detail.get('volume'),
                'currency': profile.get('currency'),
                'industry': profile.get('industry'),
                'logo_url': profile.get('image'),
                'ceo': profile.get('ceo'),
                'fullTimeEmployees': profile.get('fullTimeEmployees'),
                'ipoDate': profile.get('ipoDate'),
                'marketPrice': financialData.get('currentPrice'),
                'previousClose': detail.get('previousClose'),
                'recommendationKey': financialData.get('recommendationKey'),
                'recommendationMean': financialData.get('recommendationMean'),
                'sector': profile.get('sector'),
                'symbol': summary_all.get('symbol'),
                'targetEstOneyPercent': characterModificationUtil.force_round(
                    financialData.get('currentPrice') / financialData.get('targetMeanPrice'), 2) if financialData.get(
                    'targetMeanPrice') is not None else None,
                'weekRangeFiveTwoMax': detail.get('fiftyTwoWeekHigh'),
                'weekRangeFiveTwoMin': detail.get('fiftyTwoWeekLow'),
                'companyName': profile.get('companyName'),
                'marketCap': detail.get('marketCap'),
                'sharesOutstanding': stats.get('sharesOutstanding'),
                'longBusinessSummary': profile.get('description'),
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
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))
