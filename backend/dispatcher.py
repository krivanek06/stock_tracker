from flask import Flask
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.exceptions import NotFound
from flask_cors import CORS
from flask_json import FlaskJSON

from Controllers.fundamentals import app as fundamentals
from Controllers.chart_data import app as chart_data
from Controllers.search import app as search
from Controllers.bitcoin_statistics import app as bitcoin_statistics
from Controllers.sp500_statistics import app as sp500_statistics
from Controllers.employment_statistics import app as employment_statistics

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.wsgi_app = DispatcherMiddleware(NotFound(), {
    "/api/fundamentals": fundamentals,
    '/api/chart_data': chart_data,
    '/api/chart_data/sp500_statistics': sp500_statistics,
    '/api/chart_data/bitcoin_statistics': bitcoin_statistics,
    '/api/chart_data/employment_statistics': employment_statistics,
    '/api/search': search
})

# https://stackoverflow.com/questions/30906489/how-to-implement-flask-application-dispatching-by-path-with-wsgi/30915745
if __name__ == "__main__":
    app.run()