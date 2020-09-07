from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import Quandl_Employment


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Employment = Quandl_Employment.Quandl_Employment()



@app.route('/goodsProducingIndustry')
def getGoodsProducingIndustry():
    try:
        return json_response(**Quandl_Employment.getGoodsProducingIndustry())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for goods producing industry')

@app.route('/governmentIndustry')
def getGovernmentIndustry():
    try:
        return json_response(**Quandl_Employment.getGovernmentIndustry())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for government industry')

@app.route('/privateIndustry')
def getPrivateIndustry():
    try:
        return json_response(**Quandl_Employment.getPrivateIndustry())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding employment for private industry')

@app.route('/serviceProvidingIndustry')
def getServiceProvidingIndustry():
    try:
        return json_response(**Quandl_Employment.getServiceProvidingIndustry())
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