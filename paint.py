from bottle import run, route, static_file

@route('/')
def index():
    return static_file('index.html', root='')

@route('/CSS/<filename:re:.*\.css>', method='GET')
def stylesheet(filename):
    return static_file(filename, root='CSS')

@route('/JS/<filename:re:.*\.js>', method='GET')
def stylesheet(filename):
    return static_file(filename, root='JS')

if __name__ == "__main__":
    run(host='localhost', port=7000)