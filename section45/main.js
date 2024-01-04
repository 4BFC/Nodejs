let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring'); //querystring모듈
const path = require('path');
let template = require('./lib/template.js')

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  console.log(queryData.id)
  let pathname = url.parse(_url, true).pathname;
  console.log(pathname)

  //url주소를 통해서 주고 받는 id의 값이나 매개변수에 따라서 달라지는 조건문
  if (pathname === '/') { //전반적으로 라우팅 로직이 사용되었다.
    if (queryData.id === undefined) { //클라이언트로 부터 받은 url(queryData.id주소)이 정해진 것 없는 상태
      // console.log(queryData.id)
      fs.readdir('./data', function (error, filelist) {
        let title = 'Welcome';
        let description = 'Hello, Node.js';

        /**
        let list = template.List(filelist); //해당 매개변수로 받아온다. 이는 상위 template.List함수를 참고하면 된다.
        let template = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`);//html 구문을 생성하는 함수인데 직접 생성한 함수이기에 상위에 있는 함수를 참고
        response.writeHead(200); //200이란 web브라우저의 승인으로 생성
        response.end(template);
        */

        let list = template.List(filelist); //해당 매개변수로 받아온다. 이는 상위 template.List함수를 참고하면 된다.
        let HTML = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`);//html 구문을 생성하는 함수인데 직접 생성한 함수이기에 상위에 있는 함수를 참고
        response.writeHead(200); //200이란 web브라우저의 승인으로 생성
        response.end(HTML);

      });
    } else {
      // console.log(queryData.id)
      fs.readdir('./data', function (error, filelist) {
        //이부분이 아직 완벽히 이해가 안감 어떻게 id=?구문을 생략할 수 있지?
        //그 이유는 url모듈(let url = require('url');)을 사용해서 id=?구문을 따로 구분할 수 있기 때문이다.
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          let title = queryData.id;
          let list = template.List(filelist);
          let HTML = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a> 
            <a href="/update?id=${title}">update</a>
            <!-- <a href="/delete?id=${title}">delete</a> -->
            <form action="delete_process" method="POST" onsubmit="">
              <input type="hidden" name = "id" value="${title}">
              <input type="submit" value="delete">
            </form>`
          );
          response.writeHead(200);
          response.end(HTML);
        });
      });
    };
  } else if (pathname === '/create') { //create 할 때의 경로
    //pathname(url.parse(_url, true).pathname)이 create일 경우 아래 코드 실행
    // console.log(queryData.id)
    fs.readdir('./data', function (error, filelist) {
      let title = 'WEB - create';
      // let description = 'Hello, Node.js';
      let list = template.List(filelist); //해당 매개변수로 받아온다. 여기서 이해가 안감.
      let HTML = template.HTML(title, list, `
      <form action="/create_process" method="POST">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>`, '');//html 구문을 생성하는 코드
      response.writeHead(200); //200이란 web브라우저의 승인으로 생성
      response.end(HTML);
    });
    //create_process를 하는 부분
  } else if (pathname === '/create_process') { //create에서 POST한 데이터 가져오기
    let body = ''
    request.on('data', function (data) {
      body = body + data
    });
    request.on('end', function () {
      let post = qs.parse(body) //querystring 모듈을 통해서 create에서 post로 전송받은 값을 가져올 수 있다.
      let title = post.title;
      let description = post.description;
      // console.log(post)
      //글을 create하는 함수
      fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
        response.writeHead(302, { Location: `/?id=${title}` }); //200이란 web브라우저의 승인으로 생성
        response.end();
      });

    });

  } else if (pathname === '/update') {
    fs.readdir('./data', function (error, filelist) {
      //이부분이 아직 완벽히 이해가 안감 어떻게 id=?구문을 생략할 수 있지?
      //그 이유는 url모듈(let url = require('url');)을 사용해서 id=?구문을 따로 구분할 수 있기 때문이다.
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) { //형태가 마치 fetch와 같다.
        let title = queryData.id;
        let list = template.List(filelist);
        let HTML = template.HTML(title, list,
          `
          <!--업데이트할 때 원본 data의 기준이 있어야한다. 즉, 본래의 title이름이 동일한 파일인지 확인이 되어야하기 때문에 input이 하나 더 있는 것이다.-->
          <form action="/update_process" method="POST">
            <input type="hidden" name="id" value="${title}"> 
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(HTML);
      });
    });
  } else if (pathname === '/update_process') {
    let body = ''
    request.on('data', function (data) {//이부분이 이해가 안감
      body = body + data
    });
    request.on('end', function () {
      let post = qs.parse(body) //querystring 모듈을 통해서 create에서 post로 전송받은 값을 가져올 수 있다.
      let id = post.id;
      let title = post.title;
      let description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        //새로 작성하는 파일
        fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
          response.writeHead(302, { Location: `/?id=${title}` }); //200이란 web브라우저의 승인으로 생성
          response.end();
        })
      })
      // console.log(post); //post가 되었는지 확인
    });
  } else if (pathname === '/delete_process') {
    let body = ''
    request.on('data', function (data) {//이부분이 이해가 안감
      body = body + data
    });

    request.on('end', function () {
      let post = qs.parse(body) //querystring 모듈을 통해서 create에서 post로 전송받은 값을 가져올 수 있다.
      let id = post.id;
      fs.unlink(`data/${id}`, function (error) {
        response.writeHead(302, { Location: `/` });
        response.end();
      })
      // console.log(post); //post가 되었는지 확인
    });
  } else {
    response.writeHead(404); //아무 것도 아닐때 404를 호출
    response.end('Not found');
  };



});
app.listen(3000);