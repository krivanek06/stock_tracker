from dotenv import load_dotenv
from flask_cors import CORS
from flask_json import FlaskJSON
from werkzeug.exceptions import NotFound
from werkzeug.middleware.dispatcher import DispatcherMiddleware

from Controllers.calculator import app as calculator
from Controllers.chart_data import app as chart_data
from Controllers.fundamentals import app as fundamentals
from Controllers.search import app as search
from flask import Flask

load_dotenv('./env')
app = Flask(__name__)
FlaskJSON(app)
# CORS(app, resources={r"*": {"origins": "*"}})
# CORS(app, automatic_options=True)

app.wsgi_app = DispatcherMiddleware(NotFound(), {
    "/fundamentals": fundamentals,
    '/chart_data': chart_data,
    '/search': search,
    '/calculator': calculator
})

# https://stackoverflow.com/questions/30906489/how-to-implement-flask-application-dispatching-by-path-with-wsgi/30915745
if __name__ == "__main__":
    app.run(debug=False, threaded=True)
