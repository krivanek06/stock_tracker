from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from Services import FundamentalsService

fundamentals = FundamentalsService.FundamentalsService()

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Fundamentals controller, method: '

@app.route('/all')
def getStockFundamentals():
    try:
        return json_response(**fundamentals.getStockDetails(request.args.get('symbol')))
    except Exception as e:
        raise JsonError(status=500, error=ERROR_MESSAGE + 'getStockFundamentals(), message: ' + str(e))


if __name__ == '__main__':
    print('Fundamentals controller app is running')
    app.run()


