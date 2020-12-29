from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import EconomicNews, Finhub
from ExternalAPI.YahooFinance import YahooFinance

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
StockNews = EconomicNews.EconomicNews()
Finhub = Finhub.Finhub()
YahooFinance = YahooFinance.YahooFinance()


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
        raise JsonError(status=500, error='Could not find any earnings')


@app.route('/search_symbol')
def searchSymbol():
    try:
        return json_response(data=Finhub.searchSymbol(request.args.get('symbol').upper()))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not search any stock for symbol')

@app.route('/search_all_symbol')
def searchSymbolAll():
    try:
        return json_response(data=Finhub.searchAllSymbols())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not search any stock for symbol')

@app.route('/day_top_gains')
def getTopGains():
    try:
        return json_response(data=YahooFinance.getTopGains())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top gainers')

@app.route('/day_top_losers')
def getTopLosers():
    try:
        return json_response(data=YahooFinance.getTopLosers())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Failed to get top losers')


@app.route('/day_most_active')
def getMostActive():
    try:
        return json_response(data=YahooFinance.getTopActive())
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


