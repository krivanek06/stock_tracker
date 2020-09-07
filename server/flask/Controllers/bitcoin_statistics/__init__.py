from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import Quandl_Bitcoin


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Bitcoin = Quandl_Bitcoin.Quandl_Bitcoin()


@app.route('/costPerTransaction')
def getCostPerTransaction():
    try:
        return json_response(**Quandl_Bitcoin.getCostPerTransaction())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding cost per transaction for bitcoin')

@app.route('/exchangeTradingVolume')
def getExchangeTradingVolume():
    try:
        return json_response(**Quandl_Bitcoin.getExchangeTradingVolume())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding exchange trading volume for bitcoin')

@app.route('/marketCap')
def getMarketCap():
    try:
        return json_response(**Quandl_Bitcoin.getMarketCap())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding market cap for bitcoin')


@app.route('/marketPrice')
def getMarketPrice():
    try:
        return json_response(**Quandl_Bitcoin.getMarketPrice())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding market price for bitcoin')


@app.route('/numberOfTransactionsPerDay')
def getNumberOfTransactionsPerDay():
    try:
        return json_response(**Quandl_Bitcoin.getNumberOfTransactionsPerDay())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding number of transaction per day for bitcoin')


@app.route('/transactionFeesUSD')
def getTransactionFeesUSD():
    try:
        return json_response(**Quandl_Bitcoin.getTransactionFeesUSD())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding transaction fees for bitcoin')


@app.route('/transactionTime')
def getTransactionTime():
    try:
        return json_response(**Quandl_Bitcoin.getTransactionTime())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding transaction time for bitcoin')

@app.route('/partialDataFromAllCategory')
def getPartialDataFromAllCategory():
    try:
        return json_response(**Quandl_Bitcoin.getPartialDataFromAllCategory())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding partial data for all category for bitcoin statistics')




