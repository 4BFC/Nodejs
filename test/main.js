let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');
const path = require('path');

let app = http.createServer((request, response) => {
  //요청 처리
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      let HTML = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Test</title>
        </head>
        <body>
        <h1>This is main page</h1>
        <a href="/1st_page">1st page</a>
        <a href="/2nd_page">2nd page</a>
        <a href="/3th_page">3th page</a>
        <a href="/4th_page">4th page</a>
        </body>
      </html>
      `
      response.writeHead(200);
      response.end(HTML);
    }
  }//if(pathname === '/')
  else if (pathname === '/1st_page') {
    if (queryData.id === undefined) {
      let HTML = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>1st_page</title>
        </head>
        <body>
        <h1>This is 1st_page</h1>
        <a href="/">main page</a>
        <a href="/2nd_page">2nd page</a>
        <a href="/3th_page">3th page</a>
        <a href="/4th_page">4th page</a>
        </body>
      </html>
      `
      response.writeHead(200);
      response.end(HTML);
    }
  }//else if (pathname === '/')

});
//서버 리스닝
app.listen(3000);
