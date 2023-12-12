var http = require('http');
var fs = require('fs');
var url = require('url');
const path = require('path');

function templateHTML(title, list, body) {//list는 받아온 list를 return을 통해서 제작된다.
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list} 
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}
//filelist를 생성하는 코드
function templateList(filelist) {
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData)
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname)

  //url주소를 통해서 주고 받는 id의 값이나 매개변수에 따라서 달라지는 조건문
  if (pathname === '/') {
    if (queryData.id === undefined) { //url(queryData.id주소)이 정해진 것 없는 상태
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist); //해당 매개변수로 받아온다. 이는 상위 templateList함수를 참고하면 된다.
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);//html 구문을 생성하는 함수인데 직접 생성한 함수이기에 상위에 있는 함수를 참고
        response.writeHead(200); //200이란 web브라우저의 승인으로 생성
        response.end(template);
      })
    } else {
      fs.readdir('./data', function (error, filelist) {
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if (pathname === '/create') { //pathname(url.parse(_url, true).pathname)이 create일 경우 아래 코드 실행
    fs.readdir('./data', function (error, filelist) {
      var title = 'WEB - create';
      // var description = 'Hello, Node.js';
      var list = templateList(filelist); //해당 매개변수로 받아온다. 여기서 이해가 안감.
      var template = templateHTML(title, list, `
      <form action="http://http://localhost:3000/process_create" method="POST">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>`);//html 구문을 생성하는 코드
      response.writeHead(200); //200이란 web브라우저의 승인으로 생성
      response.end(template);
    })
  }
  else {
    response.writeHead(404); //아무 것도 아닐때 404를 호출
    response.end('Not found');
  }



});
app.listen(3000);