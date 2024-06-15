//파일을 읽는 코드
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
  console.log(data);
})
//여기서 우리가 node nodejs/fileread.js로 실행하면 undefine이 나온다. 이유는 nodejs의 fileread.js에서 sample.txt 파일을 찾는데 문제는 node를 실행 하면 nodejs 디렉토리 상위에서 sample.txt파일을 찾는다.
//따라서 우리는 fileread.js가 있는 nodejs로 cd를 한 후에 실행 해야 한다.