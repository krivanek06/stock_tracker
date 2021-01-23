from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.Quandl import Quandl_General
from ExternalAPI.YahooFinance import YahooFinance

# yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
YahooFinance = YahooFinance.YahooFinance()
QuandlGeneral = Quandl_General.QuandlGeneral()


'''
    Return [open, high, low, closed, volume]
'''
@app.route('/historical_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(**YahooFinance.getChartDataWithPeriod(symbol, period))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')

'''
    Return only closed prices for symbol
'''
@app.route('/historical_closed_data')
def getStockHistoricalClosedDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(**YahooFinance.getChartDataWithPeriod(symbol, period, True))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')


@app.route('/investor_sentiment')
def getInvestorSentiment():
    try:
        return json_response(**QuandlGeneral.getInvestorSentiment(), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for investors sentiments')


@app.route('/treasury_yield_curve_rates')
def getTreasuryYieldCurveRates():
    try:
        return json_response(**QuandlGeneral.getTreasuryYieldCurveRates(), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for treasury yield curve rates')


@app.route('/misery_index')
def getMiseryIndex():
    try:
        return json_response(**QuandlGeneral.getMiseryIndex(), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for misery index')


if __name__ == '__main__':
    print('Chart data controller app is running')
    app.run()
