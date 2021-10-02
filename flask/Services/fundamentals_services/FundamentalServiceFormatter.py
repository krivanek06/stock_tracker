from Utils import characterModificationUtil


class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatFetchedStockDetails(self, symbol):
        self.data['id'] = symbol

        self.data = characterModificationUtil.changeUnsupportedCharactersForDictKey(self.data)

        # format data
        self._formatSummary()
        self._formatDividends()
        self._formatEarningsFinancialChart()
        self._formatHistoricalMetrics()
        self._formatMutualFundHolders()
        self._formatInstitutionalHolder()
        self.data['recommendation'].reverse()


        if self.data['companyOutlook'].get('rating') is not None:
            self.data['companyOutlook']['rating'] = self.data['companyOutlook']['rating'][0] if len(self.data['companyOutlook']['rating']) > 0 else None
            self.data['companyOutlook']['ratios'] = self.data['companyOutlook']['ratios'][0] if len(self.data['companyOutlook']['ratios'][0]) > 0 else None
        else:
            self.data['companyOutlook']['rating'] = []

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
            summary_all = self.data.get('companyData') if self.data.get('companyData') is not None else {}
            stats = summary_all.get('defaultKeyStatistics', {})
            financialData = summary_all.get('financialData', {})

            companyOutlook = self.data['companyOutlook']
            companyQuote =  self.data['companyQuote'][0]
            profile = self.data['companyOutlook']['profile']
            splitHistory = companyOutlook['splitHistory'][0] if companyOutlook['splitHistory'] is not None else {}
            ratios = companyOutlook['ratios'][0]
            stockDividend = self.data['companyOutlook']['stockDividend'][0] if self.data['companyOutlook']['stockDividend'] is not None  else {}
            summaryProfile = summary_all.get('summaryProfile', {})
            

            summary = {
                'id': profile.get('symbol'),
                'shortRatio': stats.get('shortRatio'),
                'sandPFiveTwoWeekChange': stats.get('sandPFiveTwoWeekChange'),
                'lastSplitFactor': f"{splitHistory.get('numerator')} / {splitHistory.get('denominator')}" if splitHistory.get('numerator') is not None else None,
                'exchangeName': profile.get('exchangeShortName'),
                'lastSplitDate': splitHistory.get('date'),
                'website': profile.get('website'),
                'beta': profile.get('beta'),
                'countryFullName': summaryProfile.get('country'),
                'residance': {
                    'city': profile.get('city'),
                    'state': profile.get('state'),
                    'country': profile.get('country'),
                    'addressOne': profile.get('address'),
                    'zip': profile.get('zip'),
                },
                'avgVolume': profile.get('volAvg'),
                'ePSTTM': companyQuote.get('eps'),
                'forwardEPS': stats.get('forwardEps'),
                'earningsDate': companyQuote.get('earningsAnnouncement'),
                'dividendDate': stockDividend.get('paymentDate'),
                'exDividendDate': stockDividend.get('date'),
                'forwardDividendYield': ratios.get('dividendYieldTTM'),
                'forwardDividendRate': ratios.get('dividendPerShareTTM'),
                'fiveTwoWeekRange': str(companyQuote.get('yearLow')) + ' - ' + str(companyQuote.get('yearHigh')),
                'oneyTargetEst': financialData.get('targetMeanPrice'),
                'pERatioTTM': companyQuote.get('pe'),
                'forwardPE': stats.get('forwardPE'),
                'volume': companyOutlook['metrics'].get('volume'),
                'currency': profile.get('currency'),
                'industry': profile.get('industry'),
                'logo_url': profile.get('image'),
                'ceo': profile.get('ceo'),
                'fullTimeEmployees': profile.get('fullTimeEmployees'),
                'ipoDate': profile.get('ipoDate'),
                'marketPrice': companyQuote.get('price'),
                'previousClose': companyQuote.get('previousClose'),
                'recommendationKey': financialData.get('recommendationKey'),
                'recommendationMean': financialData.get('recommendationMean'),
                'sector': profile.get('sector'),
                'symbol': profile.get('symbol'),
                'targetEstOneyPercent': characterModificationUtil.force_round(
                    companyQuote.get('price') / financialData.get('targetMeanPrice'), 2) if financialData.get(
                    'targetMeanPrice') is not None else None,
                'weekRangeFiveTwoMax': companyQuote.get('yearHigh'),
                'weekRangeFiveTwoMin': companyQuote.get('yearLow'),
                'companyName': profile.get('companyName'),
                'marketCap': companyQuote.get('marketCap'),
                'sharesOutstanding': companyQuote.get('sharesOutstanding'),
                'longBusinessSummary': profile.get('description'),
                'yearToDatePriceReturn': stats.get('fiveTwoWeekChange'),
                'yearToDatePrice': characterModificationUtil.force_round(
                    companyQuote.get('price') - 
                    (companyQuote.get('price') / (1 + stats.get('fiveTwoWeekChange', 0))
                ), 2)
            }
            self.data['summary'] = summary
        except Exception as e:
            print('formatSummary exception: ' + str(e))

    def _formatDividends(self):
        try:
            summaryDetail = self.data.get('companyData', {}).get('summaryDetail', {})
            metric = self.data.get('metric', {})
            self.data['dividends'] = {
                'dividendGrowthRateFiveY': metric.get('dividendGrowthRateFiveY'),
                'currentDividendYieldTTM': metric.get('currentDividendYieldTTM'),
                'dividendPerShareAnnual': metric.get('dividendPerShareAnnual'),
                'dividendPerShareFiveY': metric.get('dividendPerShareFiveY'),
                'dividendYieldFiveY': metric.get('dividendYieldFiveY'),
                'dividendPayoutRatioTTM': metric.get('payoutRatioTTM'),
                'dividendYieldIndicatedAnnual': metric.get('dividendYieldIndicatedAnnual'),
                'dividendsPerShareTTM': metric.get('dividendsPerShareTTM'),
                'exDividendDate': self.data['summary'].get('exDividendDate'),
                'forwardDividendYield': self.data['summary'].get('forwardDividendYield'),
                'trailingAnnualDividendRate': summaryDetail.get('trailingAnnualDividendRate'),
                'trailingAnnualDividendYield': summaryDetail.get('trailingAnnualDividendYield'),
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

            metric = self.data.get('metric', {})
            metric.pop("currentDividendYieldTTM", None)
            metric.pop("dividendGrowthRateFiveY", None)
            metric.pop("dividendPerShareAnnual", None)
            metric.pop("dividendPerShareFiveY", None)
            metric.pop("dividendYieldFiveY", None)
            metric.pop("dividendYieldIndicatedAnnual", None)
            metric.pop("dividendsPerShareTTM", None)
            metric.pop("forwardAnnualDividendYieldFour", None)
            metric.pop("trailingAnnualDividendRateThree", None)
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))
