//array function
let f = function () {
  console.log(1 + 1);
  console.log(1 + 2);
}

let a = [f];
a[0](); //배열로 저장된 함수

let o = {
  func: f
}

o.func();