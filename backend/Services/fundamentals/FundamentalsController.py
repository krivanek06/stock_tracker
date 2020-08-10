from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
#custom imports
from ExternalAPI import EconomicNews
from Services.fundamentals import FundamentalsService

#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# CUSTOM singleton
stockDetails = FundamentalsService.FundamentalsService()

@app.route('/api/ticker/details/financial_report')
def getStockFinancialReport():
    try:
        return json_response(**stockDetails.getStockFinancialReport(request.args.get('symbol'), request.args.get('financialReportName')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting financial report, '
                                          'please contact administrator to check logs ')

@app.route('/api/ticker/details/fundamentals')
def getStockFundamentals():
    try:
        return json_response(**stockDetails.getStockDetails(request.args.get('symbol')))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='An error occurred on the server side when getting fundamentals, '
                                          'please contact administrator to check logs ')


@app.route('/api/ticker/details/stockNews')
def getStockNews():
    try:
        symbol = request.args.get('symbol')
        olderThan = int(request.args.get('olderThan'))
        return json_response(**stockDetails.getStockNewsFromFirestore(symbol, olderThan))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Could not find any news for data')


if __name__ == '__main__':
    app.run(port=5001)


