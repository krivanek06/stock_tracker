from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import Quandl_Employment


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Employment = Quandl_Employment.Quandl_Employment()

def __parseArgs():
    numberOfDataSet = int(request.args.get('numberOfDataSet'))
    allData = request.args.get('allData') == 'True' or request.args.get('allData') == 'true'
    return numberOfDataSet, allData

@app.route('/goodsProducingIndustry')
def getGoodsProducingIndustry():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Employment.getGoodsProducingIndustry(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for goods producing industry')

@app.route('/governmentIndustry')
def getGovernmentIndustry():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Employment.getGovernmentIndustry(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for government industry')

@app.route('/privateIndustry')
def getPrivateIndustry():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Employment.getPrivateIndustry(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for private industry')

@app.route('/serviceProvidingIndustry')
def getServiceProvidingIndustry():
    try:
        numberOfDataSet, allData = __parseArgs()
        return json_response(**Quandl_Employment.getServiceProvidingIndustry(numberOfDataSet, allData))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for service providing industry')

@app.route('/partialDataFromAllCategory')
def getPartialDataFromAllCategory():
    try:
        return json_response(**Quandl_Employment.getPartialDataFromAllCategory())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding partial data for all category in employment')