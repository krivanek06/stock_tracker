
import websocket
import os
import enviroments
from flask_socketio import SocketIO, emit, send
from flask import Flask

# pip install eventlet
# pip install redis

app = Flask(__name__)
socketio = SocketIO(app)

# snippests > https://gist.github.com/punchagan/53600958c1799c2dcf26
@socketio.on('connect')
def connect(message = None):
    print('Client connected')
    print('connect', message)
    socketio.send(message)

def on_message(ws, message):
    print(message)
    #emit('echo', message, namespace='/stockdata', broadcast=True, include_self=False)
    connect(message)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    ws.send('{"type":"subscribe","symbol":"TSLA"}') #^GSPC

if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://ws.finnhub.io?token=" + os.environ['FINHUB_SECRET_KEY'],
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
    socketio.run(app, debug=True)