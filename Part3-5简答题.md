## 1、Vue 3.0 性能提升主要是通过哪几方面体现的？
- 响应式系统升级
Vue3.0采用proxy对象重写响应式系统，可以监听新增的动态属性、可以监听删除的属性、可以监听数组的索引和length。
- 编译优化
Vue3.0中标记和提升所有静态根节点，diff时仅需对比动态节点。
- 源码体积优化
移除了一些不常用的API
## 2、Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？
●  Composition Api 是基于函数的API
● 可以更灵活的组织组件逻辑
## 3、Proxy 相对于 Object.defineProperty 有哪些优点？
● 采用proxy对象实现属性监听。
● 在初始化的时候不需要遍历所有属性，不需要使用defineProxy转化为getter与setter。
● 存在属性嵌套的情况时，只有访问某个属性时才有递归嵌套处理。所以Vue3比Vue2好。
● 默认监听动态添加的属性。
● 默认监听属性的删除操作。
● 默认监听数组索引与length属性。
● 可以作为单独模块使用。

## 4、Vue 3.0 在编译方面有哪些优化？
Fragments
标记根节点静态提升
Patch flag
缓存时间处理函数

## 5、Vue.js 3.0 响应式系统的实现原理？

1、使用reactive() 创造响应式数据，将传入的数据转换成proxy对象，当代理对象发生变化时会触发对应的getter与setter。
2、使用toRefs:把一个代理对象的每一个属性转化成响应式数据后，并且可以解构。
3、使用ref：将一个基本类型转化为响应式的对象，值在object.value中
以reactive方法为例，方法中自定义了proxy的第二个参数：handle方法。其中在reflrct的get时收集依赖，并在set的时候触发