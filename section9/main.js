//해당 기능이 동작하는 원리를 파악해야한다
var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + request.url);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
