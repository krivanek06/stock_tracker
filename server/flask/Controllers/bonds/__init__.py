from flask import Flask
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI.Quandl import Quandl_Bonds

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


Quandl_Bonds = Quandl_Bonds.Quandl_Bonds()

@app.route('/dataFromAllCategory')
def getDataFromAllCategory():
    try:
        return json_response(**Quandl_Bonds.getDataFromAllCategory())
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error Controller getDataFromAllCategory()')