from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
from ExternalAPI import YahooFinance

#yf.pdr_override()
app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# CUSTOM singleton
YahooFinance = YahooFinance.YahooFinance()


@app.route('/api/ticker/chart_data')
def getStockHistoricalDataWithPeriod():
    try:
        symbol = request.args.get('symbol')
        period = request.args.get('period')
        return json_response(chartData=YahooFinance.getChartDataWithPeriod(symbol,period))
    except Exception as e:
        print(e)
        raise JsonError(status=500, error='Error while finding chart data')




if __name__ == '__main__':
    app.run(port=5003)


