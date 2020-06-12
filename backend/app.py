
import time, signal
from datetime import timedelta

import yfinance as yf
from yahoo_fin import stock_info as si
from flask import Flask, request, abort, jsonify, make_response
from flask_json import FlaskJSON, JsonError, json_response, as_json
from time import sleep
from flask_cors import CORS
#custom imports
import data_modification as data_modification
import stock_news
import RepeatedTimer as rt


#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# CUSTOM singleton
StockNews = stock_news.StockNews()



#-----------------------------------
@app.route('/api/economics/news')
def getEconomicNews():
    try:
        return json_response(stockNews=StockNews.getJsonDataFromFile())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get economic news')

#------------------------------------
# DATA
@app.route('/api/ticker/chart_data')
def getChartDataWithPeriod():
    # Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    # Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
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
        #data_modification.removeKeys(chart_data, ['High', 'Low', 'Open', 'Close', 'Adj Close'])
        chart_data = data_modification.formatChartData(chart_data, period in ['1d', '5d'])
        return json_response(chartData=chart_data)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')

'''
@app.route('/ticker/get_current_price')
def getLivePrice():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        current_price = si.get_live_price(symbol)    
        return json_response(current_price=current_price)
    except:
        raise JsonError(status=400, error='Could not find current price for ticker {0}'.format(symbol))
'''

#----------------------------------------
# GET DATA INTO TABLES --> TOP LOSERS / GAINERS / ACTIVE + WATCHLIST DATA
@app.route('/api/ticker/day_top_gains')
def getTopGains():
    try:
        topGainers = si.get_day_gainers()[0:10]
        topGainers['volume_change'] = data_modification.getPercentigeChangeInVolume(topGainers)
        data_modification.removeKeys(topGainers, ['Change', 'Market Cap', 'Avg Vol (3 month)', 'Volume'])
        res = data_modification.formatTopGainersOrLoosersOrActive(topGainers)
        return json_response(topGains=res)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top gainers')

@app.route('/api/ticker/day_top_losers')
def getTopLosers():
    try:
        topLosers = si.get_day_losers()[0:10]
        topLosers['volume_change'] = data_modification.getPercentigeChangeInVolume(topLosers)
        data_modification.removeKeys(topLosers, ['Change', 'Market Cap', 'Avg Vol (3 month)', 'Volume'])
        res = data_modification.formatTopGainersOrLoosersOrActive(topLosers)
        return json_response(topLosers=res)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top losers')


@app.route('/api/ticker/day_most_active')
def getMostActive():
    try:
        mostActive = si.get_day_most_active()[0:10]
        mostActive['volume_change'] = data_modification.getPercentigeChangeInVolume(mostActive)
        data_modification.removeKeys(mostActive, ['Change', 'Market Cap', 'Avg Vol (3 month)', 'Volume'])
        res = data_modification.formatTopGainersOrLoosersOrActive(mostActive)
        return json_response(mostActive=res)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get most active')

@app.route('/api/ticker/day_top_cryto')
def getTopCrypto():
    try:
        topCrypto = si.get_top_crypto()[0:10]
        res = data_modification.formatCrypto(topCrypto)
        return json_response(topCrypto=res)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top crypto')



@app.route('/api/ticker/watchlist_summary')
def getWatchlistTickerSummary():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        data = si.get_quote_table(symbol)
        data['symbol'] = symbol
        res = data_modification.formatWatchList(data)
        return json_response(watchlistData=res)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find summary for ticker {0}'.format(symbol))



#------------------------------------------------
# statistics

@app.route('/api/ticker/info')
def getTickerInfo():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        ticker = yf.Ticker(symbol)
        tickerInfo = ticker.get_info()
        return json_response(tickerInfo=tickerInfo)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find stats for ticker {0}'.format(symbol))


@app.route('/api/ticker/summary')
def getTickerSummary():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        tickerSummary = si.get_quote_table(symbol)
        return json_response(tickerSummary=tickerSummary)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find summary for ticker {0}'.format(symbol))


@app.route('/api/ticker/stat')
def getTickerStat():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        # remove white space, last number and format into {attribute: value}
        tickerStat = {"".join(rec[1].split())[:-1] if rec[1][-1].isdigit() else "".join(rec[1].split()): rec[2] for rec
                      in si.get_stats(symbol).to_records()}
        return json_response(tickerStat=tickerStat)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find stats for ticker {0}'.format(symbol))

#------------------------------------------------
# ANALYSIS

#TODO
@app.route('/api/ticker/analysis')
def getAnalystsInfo():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        analysis = si.get_analysts_info(symbol)
        return json_response(analysis=analysis)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find analysis for ticker {0}'.format(symbol))

#TODO
@app.route('/api/ticker/recommendation')
def getRecommendations():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        ticket = yf.Ticker(symbol)
        recommendation = ticket.get_recommendations()
        return json_response(recommendation=recommendation)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find any recommendation for ticker {0}'.format(symbol))

#TODO
@app.route('/api/ticker/sustainability')
def getSustainability():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        ticker = yf.Ticker(symbol)
        sustainability = ticker.get_sustainability()
        return json_response(sustainability=sustainability)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not sustainability for ticker {0}'.format(symbol))

#------------------------------------------------
# SHEETS

@app.route('/api/ticker/balance_sheet')
def getBalanceSheet():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        balanceSheet = si.get_balance_sheet(symbol)
        result = data_modification.formatSheetData(balanceSheet)
        return json_response(balanceSheet=result)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find balance sheet for ticker {0}'.format(symbol))

@app.route('/api/ticker/cash_flow')
def getCashFlow():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        cashFlow = si.get_cash_flow(symbol)
        result = data_modification.formatSheetData(cashFlow)
        return json_response(cashFlow=result)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find cash flow data for ticker {0}'.format(symbol))


@app.route('/api/ticker/income_statement')
def getIncomeStatement():
    symbol = ''
    try:
        symbol = request.args.get('symbol')
        incomeStatement = si.get_income_statement(symbol)
        result = data_modification.formatSheetData(incomeStatement)
        return json_response(incomeStatement=result)
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find income statement for ticker {0}'.format(symbol))



if __name__ == '__main__':
    app.run()
    #hour = 60 * 60
    #rt.RepeatedTimer(hour, StockNews.fetchAndSaveNews())


'''
WatchList:
    - si.get_quote_table('MSFT') - (100 / prevClose * Quote Price) - 100 -> % price change

detaily MSFT:
    - summary
        - si.get_quote_table('MSFT') - summary stats 
        - si.get_data('ccl', start_date="2020-06-03", end_date="2020-06-05") - graf cien + volume
        - msft.info // msft = yf.Ticker("MSFT")
        - si.get_stats('ccl') // https://finance.yahoo.com/quote/CCL/key-statistics?p=CCL
    - analytics
        - si.get_analysts_info('ccl')
        - msft.get_recommendations() // msft = yf.Ticker("MSFT")
        - msft.sustainability ???  // msft = yf.Ticker("MSFT")
    - Sheets -> Balance sheet + CashFlow + Income statement (pod sebou v tabulkach)
        - si.get_balance_sheet('MSFT')
        - si.get_cash_flow('MSFT')
        - si.get_income_statement('MSFT')


- alternatives - top gainers / loosers
                - https://financialmodelingprep.com/api/v3/stock/gainers?apikey=demo
                - https://financialmodelingprep.com/developer/docs/
'''
