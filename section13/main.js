//해당 기능이 동작하는 원리를 파악해야한다
let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let title = queryData.id;
  console.log(queryData.id)
  if (_url == '/') {
    // _url = '/index.html';
    title = 'Welcome';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  //readFile
  fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
    let template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>

    `;
    response.end(template);
  })
});
app.listen(3000);
