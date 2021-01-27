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


@app.route('/social_security')
def getSocialSecurityPartialData():
    try:
        return json_response(**quandl.getSocialSecurityPartialData())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getSocialSecurityPartialData(), message: ' + str(e))


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


@app.route('/consumer_price_index_states')
def getConsumerPriceIndexByStates():
    try:
        return json_response(**quandl.getConsumerPriceIndexByStates())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getConsumerPriceIndex(), message: ' + str(e))

@app.route('/consumer_us_price_index')
def getConsumerUSPriceIndex():
    try:
        return json_response(**quandl.getConsumerUSPriceIndex())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getConsumerUSPriceIndex(), message: ' + str(e))


@app.route('/producer_us_price_index')
def getProducerUSPriceIndex():
    try:
        return json_response(**quandl.getProducerUSPriceIndex())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getProducerUSPriceIndex(), message: ' + str(e))

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

@app.route('/all_keys')
def getAllKeys():
    try:
        return None
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getAllKeys(), message: ' + str(e))

@app.route('/search')
def getAllDataForkey():
    try:
        quandlKey = request.args.get('quandlKey')
        documentKey = request.args.get('documentKey')
        if quandlKey is not None:
            return json_response(**quandl.getAllDataForQundalKey(quandlKey))
        if documentKey is not None:
            return json_response(**quandl.getAllDataForDocumentKey(documentKey))
        raise Exception('No key was provided for quandl seach')
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getAllDataForQundalKey(), message: ' + str(e))


@app.route('/categories')
def getAllCategories():
    try:
        return json_response(**quandl.getAllCategories())
    except Exception as e:
        raise JsonError(status=500, error='Error in Quandl controller, getAllCategories(), message: ' + str(e))