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

def __parseArgs():
    try:
        numberOfDataSet = int(request.args.get('numberOfDataSet'))
        return numberOfDataSet
    except:
        return None


@app.route('/historical_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(chartData=YahooFinance.getChartDataWithPeriod(symbol,period))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')



@app.route('/investor_sentiment')
def getInvestorSentiment():
    try:
        numberOfDataSet = __parseArgs()
        return json_response(chartData=Quandl.getInvestorSentiment(numberOfDataSet), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for investors sentiments')

@app.route('/treasury_yield_curve_rates')
def getTreasuryYieldCurveRates():
    try:
        numberOfDataSet = __parseArgs()
        return json_response(chartData=Quandl.getTreasuryYieldCurveRates(numberOfDataSet), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for treasury yield curve rates')


@app.route('/misery_index')
def getMiseryIndex():
    try:
        numberOfDataSet = __parseArgs()
        return json_response(chartData=Quandl.getMiseryIndex(numberOfDataSet), multipleData=True)
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data for misery index')



if __name__ == '__main__':
    print('Chart data controller app is running')
    app.run()


