var http = require('http');
var fs = require('fs');
var url = require('url');

//서버 생성
var app = http.createServer(
  function(request, response){
    var _url = request.url;
    var pathName = url.parse(_url,true).pathname;
    var queryName = url.parse(_url,true).query;

    //서버 path 설정
    if(pathName === '/'){
      //query의 id
      if(queryName.id === undefined){
        var template = `
        <!doctype html>
        <html>
          <head>
            <title>Home</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>Home</h1>
          </body>
        </html>
        `
        response.writeHead(200);
        response.end(template);
      }else if(queryName.id === 'test'){
        /**
        * url : http://localhost:8080/?id=test
        * urI : /?id=test
        */

        var template = `
        <!doctype html>
        <html>
          <head>
            <title>test</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>test</h1>
          </body>
        </html>
        `
        response.writeHead(200);
        response.end(template);
      }
    }else if(pathName === '/main'){
      if(queryName.id === undefined){
        var template = `
        <!doctype html>
        <html>
          <head>
            <title>Main</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>Main</h1>
          </body>
        </html>
        `
        response.writeHead(200);
        response.end(template);
      }
    }
  }
);

app.listen(8080);