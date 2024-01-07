let http = require('http');
// let fs = require('fs');
let url = require('url');
// let qs = require('querystring');
// const path = require('path');
let template = require('./lib/template.js')

let app = http.createServer((request, response) => {
  //요청 처리
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  // console.log(queryData.id)
  let pathname = url.parse(_url, true).pathname;
  // console.log(pathname)
  if (pathname === '/') {

    //page_1부분 생성하기
    if (queryData.id === undefined) {

      let HTML = template.html(queryData.id, template.list(queryData.id), queryData.id);

      response.writeHead(200);
      response.end(HTML);
    }

    else {
      let HTML = template.html(queryData.id, template.list(queryData.id));

      response.writeHead(200);
      response.end(HTML);
    }
  } else if (pathname === `/description`) {
    let queryData = url.parse(_url, true).query;
    console.log(queryData.id)

    let HTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>test</title>
    </head>
    <body>
      <h1>This is test</h1>
      <a href="/description/?id=test">test page</a><br>
    </body>
    </html>
  `;
    response.writeHead(200);
    response.end(HTML);
  }
});
//서버 리스닝
app.listen(3000);
