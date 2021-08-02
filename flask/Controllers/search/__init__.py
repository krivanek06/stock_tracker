from flask import Flask, request, Response
from flask_json import FlaskJSON, JsonError, json_response
from json import dumps
# from flask_cors import CORS
from ExternalAPI.EconomicNewsApi import EconomicNewsApi
from ExternalAPI.FinhubApi import FinhubApi
from ExternalAPI.FinancialModelingApi import FinancialModelingApi
from ExternalAPI.QuandlApi import QuandlApi
from ExternalAPI.YahooFinance.YahooFinanceTopSymbolsApi import YahooFinanceTopSymbolsApi
from Services.TechnicalIndicatorsService import TechnicalIndicatorsService
from Services.TradingStrategiesService import TradingStrategiesService
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


@app.route('/technical_indicators')
def getAllTechnicalIndicators():
    try:
        return json_response(**TechnicalIndicatorsService().getIndicators())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllDataForQundalKey(), message: ' + str(e))


@app.route('/trading_strategies')
def getAllTradingStrategies():
    try:
        return json_response(**TradingStrategiesService().getStrategies())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllTradingStrategies(), message: ' + str(e))


@app.route('/quandl_categories')
def getAllCategories():
    try:
        onlyMain = request.args.get('onlyMain') in ['True', 'true']
        return json_response(**QuandlApi().getAllCategories(onlyMain))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllCategories(), message: ' + str(e))


'''
@app.route('/news')
def get_economic_news():
    try:
        return json_response(news=EconomicNewsApi().getNews())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_economic_news(), message: ' + str(e))


@app.route('/calendar_events')
def get_calendar():
    try:
        date = request.args.get('date')
        return json_response(events=YahooFinanceTopSymbolsApi().get_calendar_events(date))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_calendar(), message: ' + str(e))


@app.route('/calendar_events_earnings')
def get_calendar_events_earnings():
    try:
        date = request.args.get('date')
        return json_response(earnings=YahooFinanceTopSymbolsApi().get_calendar_events_earnings(date))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_calendar_events_earnings(), message: ' + str(e))

'''


@app.route('/search_symbols')
def search_symbols():
    try:
        symbolsPrefix = request.args.get('symbolsPrefix')
        financialModeling = FinancialModelingApi()
        searchedResult = financialModeling.searchSymbolsByPrefix(symbolsPrefix)
        searchedResult = [result for result in searchedResult if result.get('exchangeShortName') not in ['ETF', 'MUTUAL_FUND']]
        batchResult = financialModeling.getCompanyQuoteBatch([s['symbol'] for s in searchedResult])
        return Response(dumps(batchResult), mimetype='application/json')
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'search_symbols(), message: ' + str(e))


@app.route('/top_crypto')
def get_top_crypto():
    try:
        return json_response(top_crypto=YahooFinanceTopSymbolsApi().get_top_crypto())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_top_crypto(), message: ' + str(e))


'''

@app.route('/stocks_day_gainers')
def get_day_gainers():
    try:
        return json_response(stocks_day_gainers=YahooFinanceTopSymbolsApi().get_day_gainers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_day_gainers(), message: ' + str(e))


@app.route('/stocks_day_losers')
def get_day_losers():
    try:
        return json_response(stocks_day_losers=YahooFinanceTopSymbolsApi().get_day_losers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_day_losers(), message: ' + str(e))


@app.route('/stocks_day_active')
def get_most_active():
    try:
        return json_response(stocks_day_active=YahooFinanceTopSymbolsApi().get_most_active())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_most_active(), message: ' + str(e))


@app.route('/stocks_undervalued_growth_stocks')
def get_undervalued_growth_stocks():
    try:
        return json_response(stocks_undervalued_growth_stocks=YahooFinanceTopSymbolsApi().get_undervalued_growth_stocks())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_undervalued_growth_stocks(), message: ' + str(e))


@app.route('/stocks_growth_technology_stocks')
def get_growth_technology_stocks():
    try:
        return json_response(stocks_growth_technology_stocks=YahooFinanceTopSymbolsApi().get_growth_technology_stocks())
    except Exception as e:
        raise JsonError(status=500,
                        error=ERROR_MESSAGE + 'get_undervalued_growth_stocks(), message: ' + str(e))


@app.route('/stocks_undervalued_large_caps')
def get_undervalued_large_caps():
    try:
        return json_response(stocks_undervalued_large_caps=YahooFinanceTopSymbolsApi().get_undervalued_large_caps())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_undervalued_large_caps(), message: ' + str(e))


@app.route('/stocks_aggressive_small_caps')
def get_aggressive_small_caps():
    try:
        return json_response(stocks_aggressive_small_caps=YahooFinanceTopSymbolsApi().get_aggressive_small_caps())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_aggressive_small_caps(), message: ' + str(e))


@app.route('/stocks_small_cap_gainers')
def get_small_cap_gainers():
    try:
        return json_response(stocks_small_cap_gainers=YahooFinanceTopSymbolsApi().get_small_cap_gainers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_small_cap_gainers(), message: ' + str(e))


@app.route('/top_index_states')
def get_top_index_states():
    try:
        return json_response(data=YahooFinanceTopSymbolsApi().get_top_index_states())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_top_index_states(), message: ' + str(e))
'''
