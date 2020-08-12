from flask import Flask
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.exceptions import NotFound
from flask_cors import CORS
from flask_json import FlaskJSON
from Services.fundamentals import app as fundamentals
from Services.chart_data import app as chart_data
from Services.search import app as search

app = Flask(__name__)
FlaskJSON(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.wsgi_app = DispatcherMiddleware(NotFound(), {
    "/api/fundamentals": fundamentals,
    '/api/chart_data': chart_data,
    '/api/search': search
})

# https://stackoverflow.com/questions/30906489/how-to-implement-flask-application-dispatching-by-path-with-wsgi/30915745
if __name__ == "__main__":
    app.run()