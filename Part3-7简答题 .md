 1、请简述 React 16 版本中初始渲染的流程 
JSX转化为React.createlement的调用，此时传入元素的类型属性等。createlement创建Virtual DOM。渲染Virtual DOM为真实DOM。
 2、为什么 React 16 版本中 render 阶段放弃了使用递归 
使用递归render无法中止渲染过程，由于JS的单线程特点。会阻塞线程，导致页面卡顿。
 3、请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情 
1、before mutation(执行DOM操作前)
调用类组建的beforeUpdated生命周期函数
2、mutation (执行DOM操作)
将workInProgress Fiber 变成current Fiber树
3、layout(执行DOM操作后)
调用类组建的生命周期函数、以及函数组件的钩子函数
 4、请简述 workInProgress Fiber 树存在的意义是什么 
React中使用了双缓存的技术，workInProgress Fiber 树在内存中构建，用来替换缓存中现有的Fiber树。