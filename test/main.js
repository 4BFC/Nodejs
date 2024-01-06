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
  let queryData_id = queryData.id
  if (pathname === '/') {

    //page_1부분 생성하기
    if (queryData.id === undefined) {

      let HTML = template.html(queryData.id, template.list(queryData.id), queryData.id);

      response.writeHead(200);
      response.end(HTML);
    }

    else {
      let HTML = template.html(queryData.id, template.list(queryData.id), queryData.id);

      response.writeHead(200);
      response.end(HTML);
    }
  } else if (pathname === `/page_1`) {
    console.log(queryData.id)
    let HTML = `<h1>${pathname} description</h1>`

    response.writeHead(200);
    response.end(HTML);
  }
});
//서버 리스닝
app.listen(3000);
