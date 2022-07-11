/*
  将下面异步代码使用 Promise 的方法改进
  尽量用看上去像同步代码的方式
  setTimeout(function () {
    var a = 'hello'
    setTimeout(function () {
      var b = 'lagou'
      setTimeout(function () {
        var c = 'I ♥ U'
        console.log(a + b +c)
      }, 10)
    }, 10)
  }, 10)
*/
const x = {};
console.log()

// const promise1 =new Promise ((resolve)=>{
//   setTimeout(() => {
//     var a = 'hello'
//     resolve(a)
//   }, 10);
// })
// const promise2 =new Promise ((resolve)=>{
//   setTimeout(() => {
//     var b = 'lagou'
//     resolve(b)
//   }, 10);
// })
// const promise3 =new Promise ((resolve)=>{
//   setTimeout(() => {
//     var c = 'I ♥ U'
//     resolve(c)
//   }, 10);
// })
// Promise.all([promise1,promise2,promise3]).then((value) => console.log(value[0] + value[1] + value[2]))