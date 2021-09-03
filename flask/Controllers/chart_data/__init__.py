from ExternalAPI.QuandlApi import QuandlApi
from flask import Flask, Response, request
from flask_json import FlaskJSON, JsonError, json_response

app = Flask(__name__)
FlaskJSON(app)
# CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Chart_data controller, method: '



@app.route('/quandl')
def getAllDataForkey():
    try:
        documentKey = request.args.get('documentKey')
        return json_response(**QuandlApi().getAllDataForDocumentKey(documentKey))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getAllDataForQundalKey(), message: ' + str(e))
