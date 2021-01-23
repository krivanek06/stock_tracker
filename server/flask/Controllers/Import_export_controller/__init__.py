from flask import Flask
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.Quandl import Quandl_Export

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Export = Quandl_Export.Quandl_Export()

@app.route('/dataFromAllManufacturing')
def getDataFromAllManufactoring():
    try:
        return json_response(**Quandl_Export.getDataFromAllManufactoring())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error in Import_export_controller, method: getDataFromAllManufactoring()')

@app.route('/dataFromAllExports')
def getDataFromAllExports():
    try:
        return json_response(**Quandl_Export.getDataFromAllExports())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error in Import_export_controller, method: getDataFromAllExports()')