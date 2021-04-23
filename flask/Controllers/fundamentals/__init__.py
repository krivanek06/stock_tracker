from flask import Flask, request
from flask_json import FlaskJSON, json_response
from flask_cors import CORS
from Services.FundamentalService import FundamentalService


app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/all')
def getStockFundamentals():
    symbol = 'None'
    try:
        symbol = request.args.get('symbol')
        return json_response(**FundamentalService().getStockDetails(symbol))
    except Exception as e:
        print('Error in Fundamentals controller, method: getStockFundamentals(), symbol: '
              + symbol + ' , message: ' + str(e))
        return json_response(summary=None)


if __name__ == '__main__':
    print('Fundamentals controller app is running')
    app.run()
