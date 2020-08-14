from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import Quandl_Bitcoin


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Bitcoin = Quandl_Bitcoin.Quandl_Bitcoin()

def __parseArgs():
    numberOfDataSet = int(request.args.get('numberOfDataSet'))
    allData = request.args.get('allData') == 'True' or request.args.get('allData') == 'true'
    return numberOfDataSet, allData

@app.route('/costPerTransaction')
def getCostPerTransaction():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getCostPerTransaction(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding cost per transaction for bitcoin')

@app.route('/exchangeTradingVolume')
def getExchangeTradingVolume():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getExchangeTradingVolume(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding exchange trading volume for bitcoin')

@app.route('/marketCap')
def getMarketCap():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getMarketCap(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding market cap for bitcoin')


@app.route('/marketPrice')
def getMarketPrice():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getMarketPrice(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding market price for bitcoin')


@app.route('/numberOfTransactionsPerDay')
def getNumberOfTransactionsPerDay():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getNumberOfTransactionsPerDay(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding number of transaction per day for bitcoin')


@app.route('/transactionFeesUSD')
def getTransactionFeesUSD():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getTransactionFeesUSD(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding transaction fees for bitcoin')


@app.route('/transactionTime')
def getTransactionTime():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Bitcoin.getTransactionTime(numberOfDataSet, allData))
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




