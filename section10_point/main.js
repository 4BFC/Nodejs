//해당 기능이 동작하는 원리를 파악해야한다
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id)
    if (_url == '/') {
        _url = '/index.html';
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + _url));
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + url);
    response.end(queryData.id);
});
app.listen(3000);
