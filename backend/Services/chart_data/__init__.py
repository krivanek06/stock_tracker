from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import YahooFinance, Quandl

#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
YahooFinance = YahooFinance.YahooFinance()
Quandl = Quandl.Quandl()


@app.route('/historical_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(chartData=YahooFinance.getChartDataWithPeriod(symbol,period))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')

@app.route('/sp500_statistics')
def getSP500Statistics():
    try:
        return json_response(chartData=Quandl.getSP500Statistics())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for sp500')

@app.route('/investor_sentiment')
def getInvestorSentiment():
    try:
        return json_response(chartData=Quandl.getInvestorSentiment())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for investors sentiments')

@app.route('/treasury_yield_curve_rates')
def getTreasuryYieldCurveRates():
    try:
        return json_response(chartData=Quandl.getTreasuryYieldCurveRates())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for treasury yield curve rates')

@app.route('/bitcoin_data')
def getBitcoinData():
    try:
        return json_response(chartData=Quandl.getBitcoinData())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for bitcoin')

@app.route('/misery_index')
def getMiseryIndex():
    try:
        return json_response(chartData=Quandl.getMiseryIndex())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for misery index')

@app.route('/employment_data')
def getEmploymentData():
    try:
        return json_response(chartData=Quandl.getEmploymentData())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for employment data')

if __name__ == '__main__':
    print('Chart data controller app is running')
    app.run()


