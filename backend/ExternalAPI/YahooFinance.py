
from downloaded_libs import yfinance as yf
from yahoo_fin import stock_info as si
import math
from datetime import datetime

class YahooFinance:
    def __init__(self):
       self.yahooFinanceDataModification = YahooFinanceDataModification()

    # Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    # Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    def getChartDataWithPeriod(self, symbol, period):
        if period == '1d':
            chart_data = yf.download(tickers=symbol, period=period, interval="5m")
        elif period == '5d':
            chart_data = yf.download(tickers=symbol, period=period, interval="30m")
        elif period in ['1mo', '3mo', '6mo', '1y']:
            chart_data = yf.download(tickers=symbol, period=period, interval="1d")
        elif period in ['2y', '5y']:
            chart_data = yf.download(tickers=symbol, period=period, interval="1wk")
        else:
            chart_data = yf.download(tickers=symbol, period=period, interval="1mo")

        chart_data['currentPercentReturn'] = round(((chart_data.get('Adj Close') / chart_data.get('Adj Close').shift(1)) - 1) * 100, 2)
        chart_data['currentPercentReturn'][0] = 0 # NaN -> 0
        chart_data['currentPrice'] = chart_data['Adj Close']

        # remove unnecessary data
        chart_data = self.yahooFinanceDataModification.formatChartData(chart_data, period in ['1d', '5d'])
        return chart_data

    def getTopGains(self):
        topGainers = si.get_day_gainers()[0:10]
        topGainers['volume_change'] = self.yahooFinanceDataModification.getPercentigeChangeInVolume(topGainers)
        return self.yahooFinanceDataModification.formatTopGainersOrLoosersOrActive(topGainers)

    def getTopLosers(self):
        topLosers = si.get_day_losers()[0:10]
        topLosers['volume_change'] = self.yahooFinanceDataModification.getPercentigeChangeInVolume(topLosers)
        return self.yahooFinanceDataModification.formatTopGainersOrLoosersOrActive(topLosers)

    def getMostActive(self):
        mostActive = si.get_day_most_active()[0:10]
        mostActive['volume_change'] = self.yahooFinanceDataModification.getPercentigeChangeInVolume(mostActive)
        return self.yahooFinanceDataModification.formatTopGainersOrLoosersOrActive(mostActive)

    def getTickerSummary(self, symbol):
        data = si.get_quote_table(symbol)
        data['symbol'] = symbol
        return self.yahooFinanceDataModification.formatWatchList(data)

    def getTickerInfo(self, symbol):
        res = yf.Ticker(symbol).get_info()
        res['WeekChange52'] = res['52WeekChange']
        del res['52WeekChange']
        return res

    def getTickerStat(self, symbol):
        # remove white space, last number and format into {attribute: value}
        tickerStat = {"".join(rec[1].split())[:-1] if rec[1][-1].isdigit() else "".join(rec[1].split()): rec[2] for rec
                      in si.get_stats(symbol).to_records()}
        tickerStat = self.yahooFinanceDataModification.formatTickerStat(tickerStat)
        self.yahooFinanceDataModification.formatNanValues(tickerStat)
        return self.yahooFinanceDataModification.changeUnsupportedChart(tickerStat)

    def getBalanceSheet(self, symbol):
        balanceSheet = si.get_balance_sheet(symbol)
        return {'balanceSheet': self.yahooFinanceDataModification.formatSheetData(balanceSheet)}

    def getCashFlow(self, symbol):
        cashFlow = si.get_cash_flow(symbol)
        return {'cashFlow': self.yahooFinanceDataModification.formatSheetData(cashFlow)}

    def getIncomeStatement(self, symbol):
        incomeStatement = si.get_income_statement(symbol)
        data = self.yahooFinanceDataModification.formatSheetData(incomeStatement)
        # typescript cloud not recognize
        if 'Net_Income_from_Continuing_&_Discontinued_Operation' in data:
            data['Net_Income_from_Continuing_And_Discontinued_Operation'] = data['Net_Income_from_Continuing_&_Discontinued_Operation']
            del data['Net_Income_from_Continuing_&_Discontinued_Operation']
        return {'incomeStatement': data}

    def getTopCrypto(self):
        #TODO
        topCrypto = si.get_top_crypto()[0:10]
        return topCrypto

    def getAnalystsInfo(self, symbol):
        analysis = si.get_analysts_info(symbol)
        return {'analysis': self.yahooFinanceDataModification.modifyAnalysis(analysis, symbol)}



class YahooFinanceDataModification:

    def createOverviewDict(self, merge):
        result = {
            'logoUrl': merge.get('logo_url', None),
            'summary': merge.get('longBusinessSummary', None),
            'symbol': merge.get('symbol', None),
            'volume': merge.get('volume', None),
            'averageVolume': merge.get('averageVolume', None),
            'volumePercent': merge.get('volumePercent', None),
            'currentPrice': merge.get('currentPrice', None),
            'currentPriceChange': merge.get('currentPriceChange', None),
            'weekHigh52': merge.get('weekRange52Max', None),
            'weekLow52': merge.get('weekRange52Min', None),
            'previousClose': merge.get('previousClosedPrice', None),
            'peRatioTTM': merge.get('peRatioTTM', None),
            'targetEst1y': merge.get('targetEst1y', None),
            'targetEst1yPercent': merge.get('targetEst1yPercent', None),
            'earningsDate': merge.get('earningsDate', None),
            'exDividendDate': merge.get('exDividendDate', None),
            'forwardDividendAndYield': merge.get('forwardDividendAndYield', None)
        }
        return result

    def modifyCustomMakeDeepInfo(self, merge, symbol):
        # calculate PE
        pe = 0
        if 'earnings' in  merge['analysis'] and 'epsActual' in merge['analysis']['earnings']:
            for value in merge['analysis']['earnings']['epsActual']:
                pe += float(value)
        pe = round(merge['currentPrice'] / pe, 2) if pe != 0 else None

        # compose result
        result = {
        'overview': self.createOverviewDict(merge),
        'basicInfo': {
            'shortName': merge.get('shortName', None),
            'industry': merge.get('industry', None),
            'sector': merge.get('sector', None),
            'fullTimeEmployees': merge.get('fullTimeEmployees', None),
            'exchangeTimezoneName': merge.get('exchangeTimezoneName', None),
            'website': merge.get('website', None),
            'address1': merge.get('address1', None),
            'city': merge.get('city', None),
            'zip': merge.get('zip', None),
            'state': merge.get('state', None),
            'country': merge.get('country', None)
        }, 'moneyInfo': {
            'marketCap': merge.get('MarketCap(intraday)', None),
            'revenueTTM': merge.get('Revenue(ttm)', None),
            'grossProfitTTM': merge.get('GrossProfit(ttm)', None),
            'netIncomeAvitoCommonTTM': merge.get('NetIncomeAvitoCommon(ttm)', None),
            'totalCashMRQ': merge.get('TotalCash(mrq)', None),
            'totalDebtMRQ': merge.get('TotalDebt(mrq)', None),
            'operatingCashFlowTTM': merge.get('OperatingCashFlow(ttm)', None),
            'leveredFreeCashFlowTTM': merge.get('LeveredFreeCashFlow(ttm)', None),
            'ebitda': merge.get('EBITDA', None)
        }, 'dividendInfo': {
            'dividendDate': merge.get('DividendDate', None),
            'exDividendDate': merge.get('ExDividendDate', None),
            'payoutRatio': merge.get('PayoutRatio', None),
            'forwardAnnualDividendRate': merge.get('ForwardAnnualDividendRate', None),
            'forwardAnnualDividendYield': merge.get('ForwardAnnualDividendYield', None),
            'trailingAnnualDividendRate': merge.get('TrailingAnnualDividendRate', None),
            'trailingAnnualDividendYield': merge.get('TrailingAnnualDividendYield', None),
            'fiveYearAverageDividendYield': merge.get('YearAverageDividendYield5', None)
        }, 'ratioInfo': {
            'customPE': pe,
            'forwardPE':  float(merge['ForwardPE']) if merge.get('ForwardPE', None) is not None else None,
            'trailingPE': float(merge['TrailingPE']) if merge.get('TrailingPE', None) is not None else None,
            'pegRatioFiveYearExpected': float(merge['PEGRatio(5yrexpected)'])  if merge.get('PEGRatio(5yrexpected)', None) is not None else None,
            'bookValuePerShareMRQ': float(merge['BookValuePerShare(mrq)'])  if merge.get('BookValuePerShare(mrq)', None) is not None else None,
            'priceToBookMRQ': float(merge['PriceBook(mrq)'])  if merge.get('PriceBook(mrq)', None) is not None else None,
            'priceToSalesTTM': float(merge['PriceSales(ttm)'])  if merge.get('PriceSales(ttm)', None) is not None else None,
            'revenuePerShareTTM':  float(merge['RevenuePerShare(ttm)'])  if merge.get('RevenuePerShare(ttm)', None) is not None else None,
            'totalCashPerShareMRQ':  float(merge['TotalCashPerShare(mrq)'])  if merge.get('TotalCashPerShare(mrq)', None) is not None else None,
            'enterpriseValueToRevenue': float(merge['EnterpriseValueRevenue'])  if merge.get('EnterpriseValueRevenue', None) is not None else None,
            'enterpriseValueToEBITDA': float(merge['EnterpriseValueEBITDA'])  if merge.get('EnterpriseValueEBITDA', None) is not None else None,
            'totalDebtToEquityMRQ':  float(merge['TotalDebtEquity(mrq)'])  if merge.get('TotalDebtEquity(mrq)', None) is not None else None
        }, 'percentageInfo': {
            'profitMargin': merge.get('ProfitMargin', None),
            'operatingMarginTTM': merge.get('OperatingMargin(ttm)', None),
            'quarterlyRevenueGrowthYOY': merge.get('QuarterlyRevenueGrowth(yoy)', None),
            'quarterlyEarningsGrowthYOY': merge.get('QuarterlyEarningsGrowth(yoy)', None),
            'returnOnAssetsTTM': merge.get('ReturnonAssets(ttm)', None),
            'returnOnEquityTTM': merge.get('ReturnonEquity(ttm)', None),

            'profitMarginNumber': 0 if merge.get('ProfitMargin', None) is None else float(merge['ProfitMargin'][:-1]),
            'operatingMarginTTMNumber': 0 if merge.get('OperatingMargin(ttm)', None) is None else float(merge['OperatingMargin(ttm)'][:-1]),
            'quarterlyRevenueGrowthYOYNumber': 0 if merge.get('QuarterlyRevenueGrowth(yoy)', None) is None else float(merge['QuarterlyRevenueGrowth(yoy)'][:-1]),
            'quarterlyEarningsGrowthYOYNumber': 0 if merge.get('QuarterlyEarningsGrowth(yoy)', None) is None else float(merge['QuarterlyEarningsGrowth(yoy)'][:-1]),
            'returnOnAssetsTTMNumber': 0 if merge.get('ReturnonAssets(ttm)', None) is None else float(merge['ReturnonAssets(ttm)'][:-1]),
            'returnOnEquityTTMNumber': 0 if merge.get('ReturnonEquity(ttm)', None) is None else float(merge['ReturnonEquity(ttm)'][:-1])
        }, 'chartInfo': {
            'assetsToDebtInfo': {
                'totalAssets': merge['balanceSheet'].get('Total_Assets', [None])[0],
                'totalDebt': merge['balanceSheet'].get('Total_Debt', [None])[0],
                'prctDiff': 0 if  merge['balanceSheet'].get('Total_Assets', [None])[0] is None or
                                  merge['balanceSheet'].get('Total_Debt', [None])[0] is None else
                                    round( 100 / (merge['balanceSheet']['Total_Debt'][0] + merge['balanceSheet']['Total_Assets'][0] ) *
                                           merge['balanceSheet']['Total_Assets'][0], 2)
            },
            'equityToAssets': {
                'totalAssets': merge['balanceSheet'].get('Total_Assets', [None])[0],
                'totalEquity': merge['balanceSheet'].get('Total_Equity_Gross_Minority_Interest', [None])[0],
                'prctDiff': 0 if merge['balanceSheet'].get('Total_Assets', [None])[0] is None or
                                 merge['balanceSheet'].get('Total_Equity_Gross_Minority_Interest', [None])[0] is None else
                                round(100 / merge['balanceSheet']['Total_Assets'][0] * merge['balanceSheet']['Total_Equity_Gross_Minority_Interest'][0], 2)
            }
        }
        }

        return result

    def modifyAnalysis(self, data, symbol):
        container = {} # tmp container for modified data
        res = {'growthEstimatesPercent': {}, 'revenueEstimate': {}, 'earnings': {}}
        for k in data:
            tmp = {}
            for period in data[k]:
                tmp[period] = [None if type(v) is float and math.isnan(v) else v for v in data[k][period]]
            container[k] = tmp

        # save growth
        res['growthEstimatesPercent']['quarter'] = {'current': float(container['Growth Estimates'][symbol][0][:-1]),
                                             'next': float(container['Growth Estimates'][symbol][1][:-1])}
        res['growthEstimatesPercent']['year'] = {'current': float(container['Growth Estimates'][symbol][2][:-1]),
                                             'next': float(container['Growth Estimates'][symbol][3][:-1])}
        res['growthEstimatesPercent']['fiveYear'] = {'current': float(container['Growth Estimates'][symbol][5][:-1]),
                                             'next': float(container['Growth Estimates'][symbol][4][:-1])}

        #save revenue
        for k in container['Revenue Estimate'].keys():
            if k == 'Revenue Estimate':
                continue

            tmp = {}
            tmp['numberOfAnalysis'] = container['Revenue Estimate'][k][0]
            tmp['average_string'] = container['Revenue Estimate'][k][1]
            tmp['low_string'] = container['Revenue Estimate'][k][2]
            tmp['high_string'] = container['Revenue Estimate'][k][3]
            tmp['yearAgo'] = container['Revenue Estimate'][k][4]

            # format -12.1M -> -12.1, replace negative sign
            tmp['growthPercent'] = None if container['Revenue Estimate'][k][5] is None else float(container['Revenue Estimate'][k][5][:-1])
            tmp['average'] = None if container['Revenue Estimate'][k][1] is None else float(container['Revenue Estimate'][k][1][:-1])
            tmp['low'] =  None if container['Revenue Estimate'][k][2] is None else float(container['Revenue Estimate'][k][2][:-1])
            tmp['high'] = None if container['Revenue Estimate'][k][3] is None else float(container['Revenue Estimate'][k][3][:-1])

            tmp['timeEstimation'] = k
            if k.startswith('Current Qtr.'):
                res['revenueEstimate']['currentQuarter'] = tmp
            elif k.startswith('Next Qtr.'):
                res['revenueEstimate']['nextQuarter'] = tmp
            elif k.startswith('Current Year'):
                res['revenueEstimate']['currentYear'] = tmp
            elif k.startswith('Next Year'):
                res['revenueEstimate']['nextYear'] = tmp

        # earnings
        res['earnings']['dates'] = [datetime.strptime(k, '%m/%d/%Y').strftime('%d/%m/%Y') for k in container['Earnings History'].keys() if not k.startswith('Earnings')]
        res['earnings']['epsActual'] = []
        res['earnings']['epsEst'] = []
        #res['earnings']['epsPctDiff'] = []
        for k in container['Earnings History'].keys():
            if k.startswith('Earnings'):
                continue
            res['earnings']['epsActual'].append(float(container['Earnings History'][k][1]))
            res['earnings']['epsEst'].append(float(container['Earnings History'][k][0]))
            #res['earnings']['epsPctDiff'].append(container['Earnings History'][k][3])

        # EPS estimate current and next quarter
        for k in container['Earnings Estimate'].keys():
            if not (k.startswith('Current Qtr.') or k.startswith('Next Qtr.') ):
                continue

            res['earnings']['dates'].append(k)
            #res['earnings']['epsActual'].append(str(-99))
            res['earnings']['epsEst'].append(float(container['Earnings Estimate'][k][1]))
            #res['earnings']['epsPctDiff'].append(str(-99))
        return res

    #change key: -, /, &, %,  to: _
    def changeUnsupportedChart(self, data):
        res = {}
        for k, v in data.items():
            k = k.translate(str.maketrans({'-': '', '/': '', '*': '', '%': '', '&': '', ',': '', ' ': ''}))
            res[k] = v
        return res

    def formatTickerStat(self, data):
        res = data
        res['PctHeldbyInsiders'] = res['%HeldbyInsiders']
        res['PctHeldbyInstitutions'] = res['%HeldbyInstitutions']
        res['DayMovingAverage200'] = res['200-DayMovingAverage']
        res['DayMovingAverage50'] = res['50-DayMovingAverage']
        res['WeekChange52'] = res['52-WeekChange']
        res['WeekHigh52'] = res['52WeekHigh']
        res['WeekLow52'] = res['52WeekLow']
        res['YearAverageDividendYield5'] = res['5YearAverageDividendYield']


        removeWords = ['SharesShort', 'SharesShort', 'Short%ofFloat', 'Short%ofSharesOutstanding', 'ShortRatio',
                       '%HeldbyInsiders', '%HeldbyInstitutions', '200-DayMovingAverage', '50-DayMovingAverage',
                       '52-WeekChange', '52WeekHigh', '52WeekLow', '5YearAverageDividendYield']
        keys = [k for k in res.keys()]
        for k in keys:
            for word in removeWords:
                if k.startswith(word):
                    res.pop(k, None)

        return res

    def getPercentigeChangeInVolume(self, data):
        return round((100 / data['Avg Vol (3 month)'] * data['Volume'] - 100), 2)

    def formatTopGainersOrLoosersOrActive(self, data):
        res = []
        for i in range(len(data['Symbol'])):
            tmp = {}
            tmp['symbol'] = str(data['Symbol'][i])
            tmp['name'] = str(data['Name'][i])
            tmp['currentPrice'] = float(round(data['Price (Intraday)'][i], 2))
            tmp['currentPriceChange'] = float(round(data['% Change'][i], 2))
            tmp['volumeChange'] = float(round(data['volume_change'][i], 2))
            #tmp['peRatio'] = -1 if math.isnan(data['PE Ratio (TTM)'][i]) else float(data['PE Ratio (TTM)'][i])

            res.append(tmp)
        return res

    def formatChartData(self, data, includeMinutes):
        #res = {'currentTime': [], 'currentPrice': [], 'currentVolumeInMillion': [], 'currentPercentReturn': []}
        res = {'price': [], 'volume': [], 'change': [], 'livePrice': 0}
        timestamp = data['currentPrice'].keys()

        # total % return from start to end
        #res['totalReturn'] = float(round(100 / data['Open'][0] * data['currentPrice'][len(data['currentPrice']) - 1] - 100, 2))
        # difference in price form start to end
        #res['livePriceDiff'] = round(data['currentPrice'][-1] - data['Open'][0], 2)
        res['livePrice'] = round(data['currentPrice'][-1], 2)

        for i in range(len(timestamp)):
            #print(timestamp[i])
            #tmpDate = datetime.fromtimestamp(timestamp[i].timestamp())
            #tmpDate = datetime.strptime(timestamp[i], "%m/%d/%Y %H:%M").timestamp()
            tmpDate = timestamp[i].timestamp() * 1000

            #tmpDate = tmpDate.strftime("%d/%m/%Y %H:%M") if includeMinutes else tmpDate.strftime("%d/%m/%Y").split(' ')[0]
            res['price'].append([tmpDate, round(data['currentPrice'][i], 2)])
            res['volume'].append([tmpDate, 0 if math.isnan(data['Volume'][i]) else int(data['Volume'][i])])
            res['change'].append([tmpDate, round(data['currentPercentReturn'][i], 2)])

            #res['currentTime'].append(tmpDate)
            #res['currentPrice'].append(round(data['currentPrice'][i], 2))
            #res['currentVolumeInMillion'].append(round(data['Volume'][i] / 1000000, 2))
            #res['currentVolumeInMillion'].append(str(data['Volume'][i]) )
            #res['currentPercentReturn'].append(data['currentPercentReturn'][i])

        return res

    def removeKeys(self, data, keys):
        for k in keys:
            del data[k]

    def formatCrypto(self, data):
        res = []
        for i in range(10):
            tmp = {}
            tmp['symbol'] = str(data['Symbol'][i])
            tmp['name'] = str(data['Name'][i])
            tmp['currentPrice'] = float(round(data['Price (Intraday)'][i], 2))
            tmp['currentPriceChange'] = float(round(data['% Change'][i], 2))

            res.append(tmp)
        return res

    def formatWatchList(self, data):
        res = {}
        res['weekRange52'] = str(data['52 Week Range'])
        res['earningsDate'] = str(data['Earnings Date'])
        res['symbol'] = str(data['symbol'])
        res['exDividendDate'] = str(data['Ex-Dividend Date'])
        res['forwardDividendAndYield'] = str(data['Forward Dividend & Yield'])
        res['currentPriceChange'] = float(round(100 / data['Previous Close'] * data['Quote Price'] - 100, 2))
        res['currentPrice'] = float(round(data['Quote Price'], 2))
        res['previousClosedPrice'] = float(round(data['Previous Close'], 2))
        res['targetEst1y'] = float(data['1y Target Est'])
        res['volume'] = float(data['Volume'])
        res['averageVolume'] = float(data['Avg. Volume'])
        res['volumePercent'] = float(round(100 / data['Avg. Volume'] * data['Volume'], 2))
        res['earningsDate'] = data['Earnings Date']
        res['peRatioTTM'] = data['PE Ratio (TTM)']
        res['targetEst1yPercent'] = float(round(100 / data['1y Target Est'] * data['Quote Price'], 2))
        res['weekRange52Min'] = float(res['weekRange52'].split(' - ')[0])
        res['weekRange52Max'] = float(res['weekRange52'].split(' - ')[1])

        # check for NaN
        self.formatNanValues(res)

        return res

    def formatNanValues(self, data):
        for k in data.keys():
            if type(data[k]) is float and math.isnan(data[k]):
                data[k] = None

    # balance sheet / cash flow / income statement
    def formatSheetData(self, data):
        timestamp = list(data.to_dict().keys())[1:]
        result = {'date': timestamp}
        for i in range(len(data['Breakdown'])):
            tmpDictKey = ''
            # Breakdown / 2020/ 2019 / 2018 / 2017
            for k in data.keys():
                if k == 'Breakdown':
                    tmpDictKey = data[k][i].replace(" ", "_")
                    result[tmpDictKey] = []
                else:
                    try:
                        result[tmpDictKey].append(float(data[k][i]))
                    except:
                        result[tmpDictKey].append(0)

        return result

