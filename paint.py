from bottle import run, route, static_file, debug
import os
from sys import argv

DEBUG = os.environ.get("DEBUG")

debug(True)

@route('/')
def index():
    return static_file('index.html', root='')

@route('/CSS/<filename:re:.*\.css>', method='GET')
def stylesheet(filename):
    return static_file(filename, root='CSS')

@route('/JS/<filename:re:.*\.js>', method='GET')
def stylesheet(filename):
    return static_file(filename, root='JS')

if DEBUG:
    run(host='localhost', port=7000)
else:
    run(host='0.0.0.0', port=argv[1])