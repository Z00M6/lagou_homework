/*
尽可能还原 Promise 中的每一个 API, 并通过注释的方式描述思路和原理.
*/
const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'
// PROMISE为一个类
class MyPromise {
	// 定义一个状态，默认pending
	status = PENDING;
	value = undefined;
	reason = undefined;
	// 定义存放回调的数组
	sucCallback = [];
	failCallback = [];
	// 执行器函数，两个入参
	constructor(fun) {
		fun(this.resolve, this.reject)
	}
	// 定义resolve方法，接受外部的值
	resolve = (value) => {
		// 状态拦截
		if (this.status !== PENDING) {
			return
		}
		// 改变状态
		this.status = RESOLVE;
		this.value = value;
		// 在resolve 结束时，将储存的回调函数依次调用
		while(this.sucCallback.length) this.sucCallback.shift()()
	}
	// 定义reject方法，接受外部的值
	reject = (reason) => {
		// 状态拦截
		if (this.status !== PENDING) {
			return
		}
		// 改变状态
		this.status = REJECT;
		this.reason = reason;
		while(this.failCallback.length) this.failCallback.shift()()
	}
	// 使用then方法执行，promise 之后的回调。
	// 接收两个回调函数，但是并不在此处执行，而是存储等待resolve之后执行
	// 此为promise 处理异步函数的方案
	then = (resolveCallback, rejectCallback) => {
		// 处理then参数为空的状态
		resolveCallback ? resolveCallback : resolveCallback = value => value
		rejectCallback ? rejectCallback : rejectCallback = value => value
		// 为了可以正常return,在异步函数中拿到新的实例
		const promise2 = new MyPromise((resolve, reject) => {
			if (this.status === RESOLVE) {
				// 为了能够拿到promise2 本身，设置异步
				setTimeout(() => {
					try {
						// 成功回调
						let callback = successCallback(this.value);
						handlePromise(promise2, callback, resolve, reject)
					} catch (error) {
						reject(error)
					}
				}, 0);
			}else if(this.status === REJECT) {
				// 为了能够拿到promise2 本身，设置异步
				setTimeout(() => {
					try {
						// 成功回调
						let callback = successCallback(this.reason);
						handlePromise(promise2, callback, resolve, reject)
					} catch (error) {
						reject(error)
					}
				}, 0);
			}else{
				// 等待
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let callback = successCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promise2, callback, resolve, reject)
            }catch (e) {
              reject(e);
            }
          }, 0)
        });
			}
		})
	}
}

// 处理多种回调返回值的方法
function handlePromise(proself, callback, resolve, reject) {
	if (proself === callback) {
		// 处理在回调中错误返回promise本身的问题
		return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
	}
	// 返回了一个promise对象，直接解析此对象
	else if (callback instanceof MyPromise) {
		callback.then(resolve, reject)
	}
	else {
		// 返回常数则直接处理
		resolve(callback)
	}
}