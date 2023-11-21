var testFolder = './data';
var fs = require('fs');
//읽어낼 폴더 위치, 함수 매개변수는 error 이후 filelist라는 변수에 반환 받은 값 저장
fs.readdir(testFolder, function (error, filelist) {
  console.log(filelist);
})