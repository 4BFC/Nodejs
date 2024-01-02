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
});
//서버 리스닝
app.listen(3000);
