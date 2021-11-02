
from flask import Flask, request
from flask_cors import CORS
from flask_json import FlaskJSON, json_response
from Services.fundamentals_services.FundamentalServiceCalculationFacade import \
    FundamentalServiceCalculationFacade

app = Flask(__name__)
FlaskJSON(app)
# CORS(app, resources={r"*": {"origins": "*"}})

ERROR_MESSAGE = 'Error in Fundamentals controller, method: '

# need to be global because FundamentalServiceCalculator will cache data
# data should be cleaned after cloud run (docker) will go to sleep
calculatorFacade = FundamentalServiceCalculationFacade()

@app.route('/calculate_metrics')
def calculateMetrics():
    try:
        symbol = request.args.get('symbol')
        return json_response(data=calculatorFacade.calculateAdditionalData(symbol))
    except Exception as e:
        print(f'{ERROR_MESSAGE} calculateMetrics(), message: {e}')
        return json_response(data=None)


@app.route('/calculate_portfolio_metrics', methods = ['POST'])
def calculatePortfolioMetrics():
    try:
        data = request.json
        symbols = data.get('symbols')
        weights = data.get('weights')
        clearCache = data.get('clearCache', False)
        return json_response(data=calculatorFacade.calculatePortfolioMetrics(symbols, weights, clearCache))
    except Exception as e:
        print(f'{ERROR_MESSAGE} calculatePortfolioMetrics(), message: {e}')
        return json_response(data=None)
