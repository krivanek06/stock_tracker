from functools import reduce

from Utils import characterModificationUtil


class FundamentalServiceFormatter:
    def __init__(self, data):
        self.data = data

    def formatFetchedStockDetails(self, symbol):
        self.data['id'] = symbol

        self.data = characterModificationUtil.changeUnsupportedCharactersForDictKey(self.data)

        # format data
        self._formatSummary()
        
        # check if etf or fund then just return
        if self.data['summary']['symbolType'] == 'ETF' or self.data['summary']['symbolType'] == 'FUND':
            self.data = characterModificationUtil.check_value_correction(self.data)
            self._notStockRemoveUnusedData()
            return self.data

        # format data
        self._formatDividends()
        self._formatEarningsFinancialChart()
        self._formatHistoricalMetrics()
        self._formatMutualFundHolders()
        self._formatInstitutionalHolder()
        self._formatCompanyOutlook()

        if self.data.get('recommendation'):
            self.data['recommendation'].reverse()
        
        if self.data.get('analystEstimates'):
            self.data['analystEstimates'].reverse()

        # change: nan, infinity -> null
        self.data = characterModificationUtil.check_value_correction(self.data)

        # remove data
        self._removeUnnecessaryData()
        return self.data

    def _notStockRemoveUnusedData(self):
        self.data.pop('companyOutlook', None)
        self.data.pop('companyQuote', None)

    def _formatCompanyOutlook(self):
        outlook = self.data['companyOutlook']
        outlook['splitHistory'] =  outlook['splitHistory'] if outlook.get('splitHistory') is not None else []
        outlook['stockDividend'] =  outlook['stockDividend'] if outlook.get('stockDividend') is not None else []
        outlook['stockNews'] =  outlook['stockNews'] if outlook.get('stockNews') is not None else []
        outlook['rating'] = outlook['rating'][0] if len(outlook['rating']) > 0 else None
        outlook['ratios'] = outlook['ratios'][0] if len(outlook['ratios']) > 0 else None

    def _formatInstitutionalHolder(self):
        self.data['institutionalHolders'] = sorted(self.data['institutionalHolders'], key=lambda k: k['shares'], reverse=True)[0:15]

    def _formatMutualFundHolders(self):
        self.data['mutualFundHolders'] = sorted([holder for holder in self.data['mutualFundHolders'] if holder['weightPercent'] is not None],
                                                key=lambda k: k['shares'],
                                                reverse=True)[0:15]

    def _formatHistoricalMetrics(self):
        if self.data.get('historicalMetrics') is None:
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
    
    def _getSymbolType(self):
        profile = self.data['companyOutlook'].get('profile', {})
        if profile.get('isEtf') == True:
            return 'ETF'
        if profile.get('isFund') == True:
            return 'FUND'
        if profile.get('isAdr') == True:
            return 'ADR'
        if profile.get('isEtf') == False and profile.get('isFund') == False and profile.get('isAdr') == False:
            return 'STOCK'
        return 'Unknown'

    def _formatSummary(self):
        try:
            summary_all = self.data.get('companyData') if self.data.get('companyData') is not None else {}
            stats = summary_all.get('defaultKeyStatistics', {})
            financialData = summary_all.get('financialData', {})

            companyOutlook = self.data['companyOutlook']
            companyQuote =  self.data['companyQuote'][0]
            profile = self.data['companyOutlook'].get('profile', {})
            splitHistory = companyOutlook['splitHistory'][0] if companyOutlook['splitHistory'] is not None else {}
            ratios = companyOutlook['ratios'][0]
            stockDividend = self.data['companyOutlook']['stockDividend'][0] if self.data['companyOutlook']['stockDividend'] is not None  else {}
            summaryProfile = summary_all.get('summaryProfile', {})
            

            summary = {
                'id': profile.get('symbol'),
                'symbolType': self._getSymbolType(),
                'isActivelyTrading': profile.get('isActivelyTrading'),
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
                'logo_url': profile.get('image', ''),
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
            companyOutlook  = self.data.get('companyOutlook', {})
            ratios = companyOutlook.get('ratios', [{}])[0]
            stockDividend = list(map(lambda x: x.get('adjDividend'), companyOutlook.get('stockDividend', [])[:4]))
            stockDividendAnnual = reduce(lambda acc, val: acc + val, stockDividend)
            ePSTTM = self.data.get('summary', {}).get('ePSTTM', None)
            self.data['dividends'] = {
                'currentDividendYieldTTM': ratios.get('dividendYielTTM'),
                'dividendPerShareAnnual': ratios.get('dividendPerShareTTM'),
                'dividendPayoutRatioTTM':  stockDividendAnnual / ePSTTM if ePSTTM is not None else 0,
                'dividendsPerShareTTM': stockDividendAnnual,
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
            if self.data.get('companyData') is not None:
                self.data['companyData'].pop("calendarEvents", None)
                self.data['companyData'].pop("recommendationTrend", None)
                self.data['companyData'].pop("financialsTemplate", None)
                self.data['companyData'].pop("quoteType", None)
                self.data['companyData'].pop("price", None)
                self.data['companyData'].pop("summaryDetail", None)
        except Exception as e:
            print('Exception in removeUnnecessaryData: ' + str(e))
