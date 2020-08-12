from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import EconomicNews, YahooFinance, Finhub, Twelvedata
from Services.fundamentals import FundamentalsService


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
StockNews = EconomicNews.EconomicNews()
Finhub = Finhub.Finhub()
YahooFinance = YahooFinance.YahooFinance()
Twelvedata = Twelvedata.Twelvedata()


@app.route('/news')
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

@app.route('/earnings')
def getEarningsCalendarForTwoWeeks():
    try:
        return json_response(earnings=Finhub.getEarningsCalendarForOneWeeks())
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not find any earnings')


@app.route('/search_symbol')
def searchSymbol():
    try:
        return json_response(stockNews=Twelvedata.searchSymbol(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=400, error='Could not search any stock for symbol')


@app.route('/day_top_gains')
def getTopGains():
    try:
        return json_response(topGains=YahooFinance.getTopGains())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top gainers')

@app.route('/day_top_losers')
def getTopLosers():
    try:
        return json_response(topLosers=YahooFinance.getTopLosers())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top losers')


@app.route('/day_most_active')
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

if __name__ == '__main__':
    print('Search controller app is running')
    app.run()


