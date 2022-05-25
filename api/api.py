import time
from flask import Flask

app = Flask(__name__)

@app.route('/sign_up')
def get_current_time():
    return {'time': time.time()}

@app.route('/log_in')
def get_current_time2():
    return {'time': time.time()}