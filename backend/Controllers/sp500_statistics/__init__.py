from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import Quandl_SP500


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_SP500 = Quandl_SP500.Quandl_SP500()
def __parseArgs():
    numberOfDataSet = int(request.args.get('numberOfDataSet'))
    allData = request.args.get('allData') == 'True' or request.args.get('allData') == 'true'
    return numberOfDataSet, allData


@app.route('/priceToSale')
def getPriceToSaleQrt():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getPriceToSaleQrt(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding price to sale for sp500')


@app.route('/bookValue')
def getBookValueQrt():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getBookValueQrt(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding book value for sp500')


@app.route('/salesGrowth')
def getSalesGrowthQrt():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getSalesGrowthQrt(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding sales growth for sp500')

@app.route('/dividend')
def getDividendPerMonth():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getDividendPerMonth(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding dividend for sp500')

@app.route('/priceToBook')
def getPriceToBookQrt():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getPriceToBookQrt(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding price to book for sp500')

@app.route('/earningsYield')
def getEarningsYieldMonth():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getEarningsYieldMonth(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding earnings yield for sp500')

@app.route('/dividendYield')
def getDividendYieldMonth():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getDividendYieldMonth(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding dividend yield for sp500')

@app.route('/peRatio')
def getPeRatioMonth():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_SP500.getPeRatioMonth(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding PE ratio for sp500')

@app.route('/partialDataFromAllCategory')
def getPartialDataFromAllCategory():
    try:
        return json_response(**Quandl_SP500.getPartialDataFromAllCategory())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding partial data for all category for S&P 500 statistics')