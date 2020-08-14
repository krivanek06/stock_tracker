from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from Services import FundamentalsService

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"*": {"origins": "*"}})

# CUSTOM singleton
fundamentals = FundamentalsService.FundamentalsService()


@app.route('/financial_report')
def getStockFinancialReport():
    try:
        return json_response(**fundamentals.getStockFinancialReport(request.args.get('symbol'), request.args.get('financialReportName')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting financial report, '
                                          'please contact administrator to check logs ')

@app.route('/all')
def getStockFundamentals():
    try:
        return json_response(**fundamentals.getStockDetails(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting fundamentals, '
                                          'please contact administrator to check logs ')


@app.route('/stockNews')
def getStockNews():
    try:
        symbol = request.args.get('symbol')
        olderThan = int(request.args.get('olderThan'))
        return json_response(**fundamentals.getStockNewsFromFirestore(symbol, olderThan))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not find any news for data')




if __name__ == '__main__':
    print('Fundamentals controller app is running')
    app.run()


