let fs = require('fs');

console.log('A');
// let result = fs.readFileSync('syntax/sample.txt', 'utf8');//동기적 방식
fs.readFile('syntax/sample.txt', 'utf8', function (err, result) {
  console.log(result)
});//비동기적 방식
console.log('C')