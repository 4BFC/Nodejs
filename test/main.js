let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');
const path = require('path');
let list = require('./lib/template.js')

let app = http.createServer((request, response) => {
  //요청 처리
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  // console.log(queryData.id)
  let pathname = url.parse(_url, true).pathname;
  // console.log(pathname)
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
        <a href="/?id=1st_page">1st page</a>
        <a href="/?id=2nd_page">2nd page</a>
        <a href="/?id=3th_page">3th page</a>
        <a href="/?id=4th_page">4th page</a>
        </body>
      </html>
      `
      response.writeHead(200);
      response.end(HTML);
    } else {
      let HTML = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${queryData.id}</title>
        </head>
        <body>
        <h1>This is ${queryData.id}</h1>
        <a href="/?id=1_page">1 page</a>
        <a href="/?id=2_page">2 page</a>
        <a href="/?id=3_page">3 page</a>
        <a href="/?id=4_page">4 page</a>
        <a href="/other">other page</a>
        </body>
      </html>
      `
      response.writeHead(200);
      response.end(HTML);
    }
  }//if(pathname === '/')
  else if (pathname === '/other') {

    let HTML = list.list();

    response.writeHead(200);
    response.end(HTML);
  }
});
//서버 리스닝
app.listen(3000);
