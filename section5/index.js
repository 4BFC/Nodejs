var http = require('http');//HTTP 서버를 생성하고 통신을 처리하는 모듈
var fs = require('fs');//파일 시스템에 접근하여 파일을 읽고 쓰는 모듈
var app = http.createServer(function (request, response) {
  //http.createServer함수를 사용하여 서버를 생성합니다. 이 함수는 매개변수 request 이벤트 핸드러를 포함하는 서버 객체를 반환한다.
  //요청(request)이 들어왔을 때 호출는 콜백 함수를 정의합니다. 이 콜백 함수는 request, response 매개변수를 받습니다.
  //request(클라이언트의 HTTP요청, 담고있는 정보)
  //request는 객체 '클라이언트'로부터 온 HTTP요청에 관한 정보를 포함한다.
  //요청한 url, http메서드(GET,POST,등),헤더.쿼리 매개변수, 요청 본문 등의 정보를 담고 있다.
  //이 객체를 통해 서버는 클라이언트의 요청에 따라 적절한 처리를 할 수 있다.

  //response(서버가 클라이언트에게 응답, 정보 전달)
  //response 객체는 '서버'가 클라이언트에게 응답할 때 사용한다.
  //서버는 response 객체를 통해 응답 헤더, 상태 코드, 응답 본문 등을 설정하여 클라이언트에게 전달한다.
  //클라이언트의 요청에 대한 응답을 생성하고, 이 응답을 response 객체를 통해 클라이언트에게 보내 웹 페이지를 표시하거나 다른 동작을 수행합니다.
  var url = request.url;
  if (request.url == '/') {
    url = '/index.html';
  }
  //?? 요청된 URL을 확인하고, 루트 경로('/')로의 요청인 경우 기본적으로 index.html파일을 반환하도록 합니다.

  if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  }//favicon.ico 파일에 대한 요청이 들어온 경우 404 응답을 보냅니다.

  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
  //HTTP 상태 코드 200으로 응답 헤더를 설정하고, 요청된 파일을 읽어 들여 응답 본문으로 전송합니다.
});
app.listen(3000); //서버를 특정 포트(여기서는 3000)에서 리스닝하도록 합니다.