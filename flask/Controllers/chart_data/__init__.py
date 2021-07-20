from flask import Flask, request, Response
from flask_json import FlaskJSON, JsonError, json_response
import json
# from flask_cors import CORS

from ExternalAPI.YahooFinance.YahooFinanceRequesterApi import YahooFinanceRequesterApi
from ExternalAPI.QuandlApi import QuandlApi
from ExternalAPI.FinancialModelingApi import FinancialModelingApi
from Services.TechnicalIndicatorsService import TechnicalIndicatorsService
from Services.TradingStrategiesService import TradingStrategiesService

app = Flask(__name__)
FlaskJSON(app)
# CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Chart_data controller, method: '

'''
@app.route('/historical_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        onlyClosed = request.args.get('onlyClosed') in ['True', 'true']
        if period in ['1y', '5y', 'all']:
            return Response(json.dumps(FinancialModelingApi().getHistoricalDailyPrices(symbol, period)), mimetype='application/json')
        if period in ['1min', '5min', '15min', '30min', '1h', '4h']:
            return Response(json.dumps(FinancialModelingApi().getHistoricalPrices(symbol, period)), mimetype='application/json')
        #  Return [open, high, low, closed, volume]
        return Response(json.dumps([]), mimetype='application/json')
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getStockHistoricalDataWithPeriod(), message: ' + str(e))


@app.route('/live_price')
def getStockLivePrice():
    try:
        symbol = request.args.get('symbol')
        return json_response(price=YahooFinanceRequesterApi().get_live_price(symbol), symbol=symbol)
    except Exception as e:
        return JsonError(status=500, error=ERROR_MESSAGE + 'getStockLivePrice(), message: ' + str(e))


@app.route("/live_prices", methods=["POST"])
def getStocksLivePrice():
    try:
        data = json.loads(request.data)
        return json_response(data=YahooFinanceRequesterApi().get_live_prices(data['symbols']))
    except Exception as e:
        return JsonError(status=500, error=ERROR_MESSAGE + 'getStocksLivePrice(), message: ' + str(e))
'''

@app.route('/quandl')
def getAllDataForkey():
    try:
        documentKey = request.args.get('documentKey')
        return json_response(**QuandlApi().getAllDataForDocumentKey(documentKey))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllDataForQundalKey(), message: ' + str(e))


@app.route('/technical_indicator')
def getDataForIndicator():
    try:
        symbol = request.args.get('symbol')
        indicator = request.args.get('indicator')
        data_aggregation = request.args.get('data_aggregation')  # number of periods to aggregate data
        period = request.args.get('period')  # 1d, 1y, etc.
        return json_response(**TechnicalIndicatorsService().getDataForIndicator(symbol, indicator, period, data_aggregation))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getDataForIndicator(), message: ' + str(e))


@app.route('/trading_strategy')
def getDataForStrategy():
    try:
        symbol = request.args.get('symbol')
        strategy = request.args.get('strategy')
        return json_response(data=TradingStrategiesService().getDataForStrategy(symbol, strategy))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getDataForStrategy(), message: ' + str(e))
