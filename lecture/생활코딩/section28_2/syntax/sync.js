let fs = require('fs');

console.log('A');
// let result = fs.readFileSync('syntax/sample.txt', 'utf8');//동기적 방식
/*
* 비동기 방식
fs.readFile('sample.txt', 'utf8', function (err, result) {
  console.log(result);
});*/

// Promise() then절을 사용해서 출력하기
/**
const fs = require('fs');

function readFilePromise(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// 이제 프로미스 기반으로 파일을 읽어보겠습니다.
readFilePromise('sample.txt', 'utf8')
  .then(data => {
    console.log(data);  // 파일의 내용을 출력
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

 */