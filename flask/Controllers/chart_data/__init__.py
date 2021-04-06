from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.YahooFinance import YahooFinanceRequester

YahooFinanceRequester = YahooFinanceRequester.YahooFinanceRequester()

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
        return json_response(**YahooFinanceRequester.get_chart_data(symbol, period, False))
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
        return json_response(**YahooFinanceRequester.get_chart_data(symbol, period, True))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getStockHistoricalClosedDataWithPeriod(), message: ' + str(e))


if __name__ == '__main__':
    print('Chart data controller app is running')
    app.run()
