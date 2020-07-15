import yfinance as yf
from yahoo_fin import stock_info as si
from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
#custom imports
from ExternalAPI import StockNews, YahooFinance, Finhub, Twelvedata
from Services import StockDetailsService

#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# CUSTOM singleton
StockNews = StockNews.StockNews()
YahooFinance = YahooFinance.YahooFinance()
Finhub = Finhub.Finhub()
Twelvedata = Twelvedata.Twelvedata()
stockDetails = StockDetailsService.StockDetailsService()

#-----------------------------------
#Economic data
@app.route('/api/economics/news')
def getEconomicNews():
    try:
        return json_response(economicNews=StockNews.getJsonDataFromFile())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get economic news')
'''
@app.route('/api/economics/ipo')
def getIPOlist():
    try:
        return json_response(ipo=Finhub.getIpoOneMonthCalendar())
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find IPO data')
'''
@app.route('/api/economics/earnings')
def getEarningsCalendarForTwoWeeks():
    try:
        return json_response(earnings=Finhub.getEarningsCalendarForOneWeeks())
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find any earnings')

#------------------------------------
# DATA
@app.route('/api/ticker/chart_data')
def getChartDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(chartData=YahooFinance.getChartDataWithPeriod(symbol,period))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')


@app.route('/api/ticker/search_symbol')
def searchSymbol():
    try:
        return json_response(stockNews=Twelvedata.searchSymbol(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not search any stock for symbol')

#----------------------------------------
# GET DATA INTO TABLES --> TOP LOSERS / GAINERS / ACTIVE + WATCHLIST DATA
@app.route('/api/ticker/day_top_gains')
def getTopGains():
    try:
        return json_response(topGains=YahooFinance.getTopGains())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top gainers')

@app.route('/api/ticker/day_top_losers')
def getTopLosers():
    try:
        return json_response(topLosers=YahooFinance.getTopLosers())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top losers')


@app.route('/api/ticker/day_most_active')
def getMostActive():
    try:
        return json_response(mostActive=YahooFinance.getMostActive())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get most active')

@app.route('/api/ticker/day_top_cryto')
def getTopCrypto():
    try:
        return json_response(topCrypto=YahooFinance.getTopCrypto())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top crypto')


@app.route('/api/ticker/watchlist_summary')
def getWatchlistTickerSummary():
    try:
        return json_response(stockTableData=YahooFinance.getTickerSummary(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find summary for ticker')


@app.route('/api/ticker/details/fundamentals')
def getStockFundamentals():
    try:
        return json_response(stockDetails=stockDetails.getStockDetails(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side, please contact administrator to '
                                          'check logs ')

@app.route('/api/ticker/details/news')
def getStockNews():
    try:
        return json_response(**Finhub.getNewsForSymbol(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not find any news for data')

#------------------------------------------------
# statistics & analysis

'''
@app.route('/api/ticker/details/info')
def getTickerInfo():
    try:
        return json_response(tickerInfo=YahooFinance.getTickerInfo(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find info for ticker')
'''

'''
@app.route('/api/ticker/details/stat')
def getTickerStat():
    try:
        return json_response(tickerStat=YahooFinance.getTickerStat(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find stats for ticker')
'''

'''
@app.route('/api/ticker/details/analysis')
def getAnalystsInfo():
    try:
        return json_response(analysis=YahooFinance.getAnalystsInfo(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find analysis for ticker')
'''

'''
@app.route('/api/ticker/details/recommendation')
def getRecommendations():
    try:
        return json_response(recomendation=Finhub.getRecomendationForSymbol(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find any recommendation for ticker')
'''

'''
@app.route('/api/ticker/details/mergeInfo')
def getMergedDetailsInfo():
    try:
        return json_response(mergeInfo=YahooFinance.getMergedFundamentals(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Server failed to return detailed information about stock symbol')
'''
#------------------------------------------------
# SHEETS

'''
@app.route('/api/ticker/balance_sheet')
def getBalanceSheet():
    try:
        return json_response(balanceSheet=YahooFinance.getBalanceSheet(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find balance sheet for ticker')

@app.route('/api/ticker/cash_flow')
def getCashFlow():
    try:
        return json_response(cashFlow=YahooFinance.getCashFlow(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find cash flow data for ticker')


@app.route('/api/ticker/income_statement')
def getIncomeStatement():
    try:
        return json_response(incomeStatement=YahooFinance.getIncomeStatement(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find income statement for ticker')
'''


if __name__ == '__main__':
    app.run()
    #hour = 60 * 60
    #rt.RepeatedTimer(hour, StockNews.fetchAndSaveNews())


