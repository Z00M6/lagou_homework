## 1、说说 application/json 和 application/x-www-form-urlencoded 二者之间的区别。
- application/json作为请求头，用来告诉服务端消息主体是序列化的JSON字符串，除了低版本的IE，基本都支持。服务端有处理JSON的函数。例如：$_POST['title'] 。
- 浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。
Vue3.0中标记和提升所有静态根节点，diff时仅需对比动态节点。
## 2、说一说在前端这块，角色管理你是如何设计的。
1、点击角色，进入角色管理页面传入用户ID。增删改查时此ID作为参数传给后端查库
2、用户的添加，编辑使用弹出框组件。
3、分配菜单与分配资源点击时，跳转子路由传入ID，使用$ref拿到组件实例中的内容再进行下一步操作。

## 3、@vue/cli 跟 vue-cli 相比，@vue/cli 的优势在哪？
● 将Webpack的配置和逻辑全部封装在依赖中，同时允许用户通过 Vue.config.js 配置进行修改 Webpack,并不会影响到其他插件
● 通过插件支持多个功能，维护多个模版，使CLi的可维护性提高

## 4、详细讲一讲生产环境下前端项目的自动化部署的流程。
腾讯云部署:
1: 安装云开发 CloudBase CLI
2: 在项目根目录运行以下命令部署 Vue CLI 创建的应用
3: CloudBase CLI 首先跳转到控制台进行登录授权
4: 确认信息后会立即进行部署，部署完成后，可以获得一个自动 SS

## 5、你在开发过程中，遇到过哪些问题，又是怎样解决的？请讲出两点。
1、分类ID冲突，使用math.random重制ID
2、application/json数据格式读取问题，使用qs.stringify()转化为x-www-form-urlencoded格式

## 6、针对新技术，你是如何过渡到项目中？
1、提前实现demo验证可行性
2、接入时验证稳定性与兼容性
3、做好兜底逻辑与兼容处理