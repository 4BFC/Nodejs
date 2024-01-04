## require 파트
```
let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');
const path = require('path');
```
* http 모듈: http 모듈은 HTTP 서버 및 클라이언트를 생성하기 위한 기능을 제공한다. HTTP 서버를 만들고 웹 요청을 처리하며, 클라이언트로부터 HTTP 요청을 만들어 서버로 전송하는 데 사용된다.

* fs 모듈: fs 모듈은 파일 시스템에 접근하기 위한 기능을 제공한다. 파일 읽기, 쓰기, 삭제, 디렉토리 조작 등과 같은 파일 시스템 관련 작업을 수행할 수 있다.

* url 모듈: url 모듈은 URL 문자열을 파싱하고 조작하기 위한 기능을 제공한다. 주로 HTTP 요청의 URL을 파싱하여 경로(pathname), 쿼리 매개변수(query), 해시 등을 추출하는 데 사용된다.

* qs 모듈: qs 모듈은 쿼리 문자열을 파싱하고 문자열로 변환하는 기능을 제공한다. 주로 HTTP 요청의 쿼리 매개변수를 처리하는 데 사용되며, querystring 모듈과 유사한 역할을 한다.

* path 모듈: path 모듈은 파일 경로와 관련된 작업을 수행하는 기능을 제공한다. 파일 경로의 구성 요소를 추출하거나 조작하는 데 사용되며, 플랫폼 간의 경로 구분자를 관리하는 등의 기능을 제공한다.

## Server 생성 파트

```

let app = http.createServer((request, response) => {
  //요청 처리
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
});
//서버 리스닝
app.listen(3000);

```

* 서버 생성: 
```
let app = http.createServer((request, response) => {...})
```
http.createServer 메서드를 사용하여 HTTP 서버를 생성한다. 이 서버는 클라이언트의 요청에 대해 콜백 함수를 호출하여 응답을 처리한다.

* 요청 처리 :
```
let _url = request.url;
let queryData = url.parse(_url, true).query;
let pathname = url.parse(_url, true).pathname;

```
클라이언트로부터의 요청(request)에서 URL을 추출하고, url.parse를 사용하여 URL을 파싱한다. query에는 URL의 쿼리 매개변수가 객체 형태로 저장되고, pathname에는 URL의 경로가 저장된다.

* 서버 리스닝 :
```
app.listen(3000);
```
서버를 3000번 포트에서 리스닝하도록 설정한다. 클라이언트가 이 포트로 HTTP 요청을 보낼 경우, 서버는 해당 요청에 대한 응답을 생성하게 된다.

* queryData.id :
queryData.id는 클라이언트로 부터 받는 URL이다. 즉, a태그로 부터 받은 href=?id= 값에 따라 queryData.id가 변동된다.
```
<a href="/1st_page">1st page</a>
```
위와 같이 코드를 작성하면 queryData.id는 계속해서 undefined를 출력할 것이다. 이를 수정하면 아래와 같이 a태그를 변경 해야한다.
```
<a href="/?id=1st_page">1st page</a>
```
