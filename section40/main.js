//array
let arr = ['a', 'b', 'c', 'd']
console.log(arr[0])
//object
let obj = {
  //key : value
  'a': 'apple',
  'b': 'butter',
  'c': 'color'
}
console.log(obj.a)
console.log(obj[0]) //=> error
for (let key in obj) {
  console.log('object :', key, 'value :', obj[key])
}