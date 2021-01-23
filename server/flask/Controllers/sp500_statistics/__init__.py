from flask import Flask
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.Quandl import Quandl_SP500

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_SP500 = Quandl_SP500.Quandl_SP500()


@app.route('/priceToSale')
def getPriceToSaleQrt():
    try:
        return json_response(**Quandl_SP500.getPriceToSaleQrt())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding price to sale for sp500')


@app.route('/bookValue')
def getBookValueQrt():
    try:
        return json_response(**Quandl_SP500.getBookValueQrt())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding book value for sp500')


@app.route('/salesGrowth')
def getSalesGrowthQrt():
    try:
        return json_response(**Quandl_SP500.getSalesGrowthQrt())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding sales growth for sp500')

@app.route('/dividend')
def getDividendPerMonth():
    try:
        return json_response(**Quandl_SP500.getDividendPerMonth())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding dividend for sp500')

@app.route('/priceToBook')
def getPriceToBookQrt():
    try:
        return json_response(**Quandl_SP500.getPriceToBookQrt())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding price to book for sp500')

@app.route('/earningsYield')
def getEarningsYieldMonth():
    try:
        return json_response(**Quandl_SP500.getEarningsYieldMonth())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding earnings yield for sp500')

@app.route('/dividendYield')
def getDividendYieldMonth():
    try:
        return json_response(**Quandl_SP500.getDividendYieldMonth())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding dividend yield for sp500')

@app.route('/peRatio')
def getPeRatioMonth():
    try:
        return json_response(**Quandl_SP500.getPeRatioMonth())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding PE ratio for sp500')

@app.route('/dataFromAllCategory')
def getDataFromAllCategory():
    try:
        return json_response(**Quandl_SP500.getDataFromAllCategory())
    except Exception as e:
        print('error', e)
        raise JsonError(status=500, error='Error while finding partial data for all category for S&P 500 statistics')