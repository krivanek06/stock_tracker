from flask import Flask, request
from flask_json import FlaskJSON, json_response
from flask_cors import CORS
from Services.FundamentalService import FundamentalService

app = Flask(__name__)
FlaskJSON(app)
#CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Fundamentals controller, method: '


@app.route('/all')
def getStockFundamentals():
    try:
        symbol = request.args.get('symbol')
        return json_response(**FundamentalService().getStockDetails(symbol))
    except Exception as e:
        print(f'{ERROR_MESSAGE} getStockFundamentals(), message: {e}')
        return json_response(summary=None)


@app.route('/stock_closed_price')
def getStockClosedPrice():
    try:
        symbol = request.args.get('symbol')
        return json_response(data=FundamentalService().getStockClosedPrice(symbol))
    except Exception as e:
        print(f'{ERROR_MESSAGE} getStockClosedPrice(), message: {e}')
        return json_response(data=None)


@app.route('/stock_news')
def getStockNews():
    try:
        symbol = request.args.get('symbol')
        return json_response(data=FundamentalService().getStockNews(symbol)['stockNews'])
    except Exception as e:
        print(f'{ERROR_MESSAGE} getStockNews(), message: {e}')
        return json_response(data=None)

