from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import EconomicNewsApi, FinhubApi, QuandlApi
from ExternalAPI.YahooFinance import YahooFinanceTopSymbolsApi
from ExternalAPI.AlphaVantageApi import AlphaVantageApi

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
StockNews = EconomicNewsApi.EconomicNewsApi()
YahooFinanceTopSymbols = YahooFinanceTopSymbolsApi.YahooFinanceTopSymbolsApi()
Finhub = FinhubApi.FinhubApi()
quandl = QuandlApi.QuandlApi()
ERROR_MESSAGE = 'Error in Search controller, method: '

@app.route('/technical_indicators')
def getAllTechnicalIndicators():
    try:
        return json_response(**AlphaVantageApi().getIndicators())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllDataForQundalKey(), message: ' + str(e))


@app.route('/quandl_categories')
def getAllCategories():
    try:
        onlyMain = request.args.get('onlyMain') in ['True', 'true']
        return json_response(**quandl.getAllCategories(onlyMain))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllCategories(), message: ' + str(e))


@app.route('/news')
def get_economic_news():
    try:
        return json_response(news=StockNews.getNews())
    except Exception as e:
        raise JsonError(status=500, error='Failed to get economic news')


@app.route('/calendar_events')
def get_calendar():
    try:
        date = request.args.get('date')
        return json_response(events=YahooFinanceTopSymbols.get_calendar_events(date))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_calendar(), message: ' + str(e))


@app.route('/calendar_events_earnings')
def get_calendar_events_earnings():
    try:
        date = request.args.get('date')
        return json_response(earnings=YahooFinanceTopSymbols.get_calendar_events_earnings(date))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_calendar_events_earnings(), message: ' + str(e))


@app.route('/search_symbol')
def search_symbol():
    try:
        return json_response(data=Finhub.searchSymbol(request.args.get('symbol').upper()))
    except Exception as e:
        raise JsonError(status=500, error='Could not search any stock for symbol')


@app.route('/search_all_symbols')
def search_all_symbols():
    try:
        return json_response(data=Finhub.searchAllSymbols())
    except Exception as e:
        raise JsonError(status=500, error='Could not search any stock for symbol')


@app.route('/top_crypto')
def get_top_crypto():
    try:
        return json_response(top_crypto=YahooFinanceTopSymbols.get_top_crypto())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_top_crypto(), message: ' + str(e))


@app.route('/stocks_day_gainers')
def get_day_gainers():
    try:
        return json_response(stocks_day_gainers=YahooFinanceTopSymbols.get_day_gainers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_day_gainers(), message: ' + str(e))


@app.route('/stocks_day_losers')
def get_day_losers():
    try:
        return json_response(stocks_day_losers=YahooFinanceTopSymbols.get_day_losers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_day_losers(), message: ' + str(e))


@app.route('/stocks_day_active')
def get_most_active():
    try:
        return json_response(stocks_day_active=YahooFinanceTopSymbols.get_most_active())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_most_active(), message: ' + str(e))


@app.route('/stocks_undervalued_growth_stocks')
def get_undervalued_growth_stocks():
    try:
        return json_response(stocks_undervalued_growth_stocks=YahooFinanceTopSymbols.get_undervalued_growth_stocks())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_undervalued_growth_stocks(), message: ' + str(e))


@app.route('/stocks_growth_technology_stocks')
def get_growth_technology_stocks():
    try:
        return json_response(stocks_growth_technology_stocks=YahooFinanceTopSymbols.get_growth_technology_stocks())
    except Exception as e:
        raise JsonError(status=500,
                        error=ERROR_MESSAGE + 'get_undervalued_growth_stocks(), message: ' + str(e))


@app.route('/stocks_undervalued_large_caps')
def get_undervalued_large_caps():
    try:
        return json_response(stocks_undervalued_large_caps=YahooFinanceTopSymbols.get_undervalued_large_caps())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_undervalued_large_caps(), message: ' + str(e))


@app.route('/stocks_aggressive_small_caps')
def get_aggressive_small_caps():
    try:
        return json_response(stocks_aggressive_small_caps=YahooFinanceTopSymbols.get_aggressive_small_caps())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_aggressive_small_caps(), message: ' + str(e))


@app.route('/stocks_small_cap_gainers')
def get_small_cap_gainers():
    try:
        return json_response(stocks_small_cap_gainers=YahooFinanceTopSymbols.get_small_cap_gainers())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_small_cap_gainers(), message: ' + str(e))


@app.route('/top_index_states')
def get_top_index_states():
    try:
        return json_response(data=YahooFinanceTopSymbols.get_top_index_states())
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'get_top_index_states(), message: ' + str(e))


if __name__ == '__main__':
    print('Search controller app is running')
    app.run()
