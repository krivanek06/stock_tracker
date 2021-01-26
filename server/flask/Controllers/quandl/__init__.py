from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.Quandl import Quandl

quandl = Quandl.Quandl()

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/bonds')
def getBondsPartialData():
    try:
        return json_response(**quandl.getBondsPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getBondsPartialData(), message: ' + str(e))


@app.route('/employment')
def getEmploymentPartialData():
    try:
        return json_response(**quandl.getEmploymentPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getEmploymentPartialData(), message: ' + str(e))


@app.route('/exports')
def getExportsPartialData():
    try:
        return json_response(**quandl.getExportsPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getExportsPartialData(), message: ' + str(e))


@app.route('/manufacturing')
def getManufacturingPartialData():
    try:
        return json_response(**quandl.getManufacturingPartialData())
    except Exception as e:
        raise JsonError(status=500,
                        error='Error in Quandl controller, getManufacturingPartialData(), message: ' + str(e))


@app.route('/sp500')
def getSP500PartialData():
    try:
        return json_response(**quandl.getSP500PartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getSp500PartialData(), message: ' + str(e))


@app.route('/inflation_rate')
def getInflationRate():
    try:
        return json_response(**quandl.getInflationRate())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getInflationRate(), message: ' + str(e))


@app.route('/consumer_price_index')
def getConsumerPriceIndex():
    try:
        return json_response(**quandl.getConsumerPriceIndex())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getConsumerPriceIndex(), message: ' + str(e))


@app.route('/misery_index')
def getMiseryIndexPartialData():
    try:
        return json_response(**quandl.getMiseryIndexPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getMiseryIndexPartialData(), message: ' + str(e))


@app.route('/treasury_yield')
def getTreasuryYieldPartialData():
    try:
        return json_response(**quandl.getTreasuryYieldPartialData())
    except Exception as e:
        raise JsonError(status=500,
                        error='Error in Quandl controller, getTreasuryYieldPartialData(), message: ' + str(e))


@app.route('/investor_sentiment')
def getInvestorSentimentPartialData():
    try:
        return json_response(**quandl.getInvestorSentimentPartialData())
    except Exception as e:
        raise JsonError(status=500,
                        error='Error in Quandl controller, getInvestorSentimentPartialData(), message: ' + str(e))


@app.route('/bitcoin')
def getBitcoinPartialData():
    try:
        return json_response(**quandl.getBitcoinPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getBitcoinPartialData(), message: ' + str(e))
