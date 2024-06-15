var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;//각 console.log를 통해서 해당 값이 어떤 것을 내포하는지 확인 할 것. => 현 url값을 반환,/id=?~
  var queryData = url.parse(_url, true).query;//각 console.log를 통해서 해당 값이 어떤 것을 내포하는지 확인 할 것. => 현 url의 id값만 반환
  var pathname = url.parse(_url, true).pathname;//각 console.log를 통해서 해당 값이 어떤 것을 내포하는지 확인 할 것. => localhost3000의 url의 시작?점을 인식하는 반환 '/'

  console.log("_url : ", _url);
  console.log("queryData : ", queryData);
  console.log("pathname : ", pathname);

  if (pathname === '/') {
    if (queryData.id === undefined) { //id가 없을 때
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        var title = 'Welcome';  //id가 없을 때 Welcome
        var description = 'Hello, Node.js';
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        var title = queryData.id; //해당 queryData.id값
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }



});
app.listen(3000);
