from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS

from ExternalAPI.YahooFinance.YahooFinanceRequesterApi import YahooFinanceRequesterApi
from ExternalAPI.QuandlApi import QuandlApi
from ExternalAPI.AlphaVantageApi import AlphaVantageApi


# yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Chart_data controller, method: '

'''
    Return [open, high, low, closed, volume]
'''
@app.route('/historical_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(**YahooFinanceRequesterApi().get_chart_data(symbol, period, False))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getStockHistoricalDataWithPeriod(), message: ' + str(e))

'''
    Return only closed prices for symbol
'''
@app.route('/historical_closed_data')
def getStockHistoricalClosedDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(**YahooFinanceRequesterApi().get_chart_data(symbol, period, True))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getStockHistoricalClosedDataWithPeriod(), message: ' + str(e))


@app.route('/quandl')
def getAllDataForkey():
    try:
        documentKey = request.args.get('documentKey')
        return json_response(**QuandlApi().getAllDataForDocumentKey(documentKey))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllDataForQundalKey(), message: ' + str(e))


@app.route('/technical_indicator')
def getDataForTechnicalIndicator():
    try:
        symbol = request.args.get('symbol')
        indicator = request.args.get('indicator')
        interval = request.args.get('interval')
        return json_response(**AlphaVantageApi().getData(symbol, indicator, interval))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getDataForTechnicalIndicator(), message: ' + str(e))

if __name__ == '__main__':
    print('Chart data controller app is running')
    app.run()
