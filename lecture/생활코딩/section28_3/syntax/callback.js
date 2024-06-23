let a = function () {
  console.log('A');
}
function slowfunc(callback) {//매개변수로 함수를 가져올 때 ()없이 사용해야한다.
  callback()
}
slowfunc(a);