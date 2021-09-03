from json import dumps

# from flask_cors import CORS
from ExternalAPI.EconomicNewsApi import EconomicNewsApi
from ExternalAPI.FinancialModelingApi import FinancialModelingApi
from ExternalAPI.FinhubApi import FinhubApi
from ExternalAPI.QuandlApi import QuandlApi
from ExternalAPI.YahooFinance.YahooFinanceTopSymbolsApi import \
    YahooFinanceTopSymbolsApi
from flask import Flask, Response, request
from flask_json import FlaskJSON, JsonError, json_response
from Services.QuandlService import QuandlService

app = Flask(__name__)
FlaskJSON(app)
# CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton


ERROR_MESSAGE = 'Error in Search controller, method: '


@app.route('/market_history_overview')
def getMarketOverview():
    try:
        return json_response(**QuandlService().getMarketOverview())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getMarketOverview(), message: ' + str(e))


@app.route('/quandl_categories')
def getAllCategories():
    try:
        onlyMain = request.args.get('onlyMain') in ['True', 'true']
        return json_response(**QuandlApi().getAllCategories(onlyMain))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllCategories(), message: ' + str(e))



@app.route('/top_crypto')
def get_top_crypto():
    try:
        return json_response(top_crypto=YahooFinanceTopSymbolsApi().get_top_crypto())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_top_crypto(), message: ' + str(e))
