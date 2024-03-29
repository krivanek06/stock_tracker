
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

@app.route('/calculate_symbol_risk')
def calculateMetrics():
    try:
        symbol = request.args.get('symbol')
        return json_response(data=calculatorFacade.calculateAdditionalData(symbol))
    except Exception as e:
        print(f'{ERROR_MESSAGE} calculateMetrics(), message: {e}')
        return json_response(data=None)


@app.route('/calculate_portfolio_risk', methods = ['POST'])
def calculatePortfolioMetrics():
    try:
        data = request.get_json(force=True)
        symbols = data.get('symbols')
        weights = [float(x) for x in data.get('weights', [])]
        symbolsBeta = [float(x) for x in data.get('symbolsBeta', [])]
        clearCache = bool(data.get('clearCache', False))
        return json_response(data=calculatorFacade.calculatePortfolioRisk(symbols, weights, symbolsBeta, clearCache))
    except Exception as e:
        print(f'{ERROR_MESSAGE} calculatePortfolioMetrics(), message: {e}')
        return json_response(data=None)
