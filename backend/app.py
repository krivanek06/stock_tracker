from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
#custom imports
from ExternalAPI import EconomicNews, YahooFinance, Finhub, Twelvedata
from Services import StockDetailsService

#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# CUSTOM singleton
StockNews = EconomicNews.EconomicNews()
stockDetails = StockDetailsService.StockDetailsService()
Finhub = Finhub.Finhub()
YahooFinance = YahooFinance.YahooFinance()
Twelvedata = Twelvedata.Twelvedata()

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
'''
@app.route('/api/ticker/day_top_cryto')
def getTopCrypto():
    try:
        return json_response(topCrypto=YahooFinance.getTopCrypto())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top crypto')
'''

@app.route('/api/ticker/details/overview')
def getWatchlistTickerSummary():
    try:
        return json_response(**stockDetails.getStockStockOverview(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find summary for ticker')


@app.route('/api/ticker/details/financial_report')
def getStockFinancialReport():
    try:
        return json_response(**stockDetails.getStockFinancialReport(request.args.get('symbol'), request.args.get('financialReportName')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting financial report, '
                                          'please contact administrator to check logs ')

@app.route('/api/ticker/details/fundamentals')
def getStockFundamentals():
    try:
        return json_response(**stockDetails.getStockDetails(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting fundamentals, '
                                          'please contact administrator to check logs ')


@app.route('/api/ticker/details/stockNews')
def getStockNews():
    try:
        symbol = request.args.get('symbol')
        olderThan = int(request.args.get('olderThan'))
        return json_response(**stockDetails.getStockNewsFromFirestore(symbol, olderThan))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not find any news for data')


if __name__ == '__main__':
    app.run()
    #hour = 60 * 60
    #rt.RepeatedTimer(hour, StockNews.fetchAndSaveNews())


