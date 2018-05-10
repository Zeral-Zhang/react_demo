使用 [Create React App](https://github.com/facebookincubator/create-react-app) 创建的第一个 Demo

demo 中实现了一个简单的基于 ZTree 风格的树，并完成了折叠/点击事件，还包含一个简单的请求 Github API 来展示个人信息的面板。

---

这个 Demo 主要是学习一下几个内容：
- 父子组件的交互
- 异步请求
- es6 语法

## 项目集成插件

* [axios](https://github.com/axios/axios) 异步请求
* [classnames](https://github.com/JedWatson/classnames) 判断切换属性
* [react-bootstrap](https://react-bootstrap.github.io) react 封装的 bootstrap UI 插件

## 树组件组成

- `TreeComponent` 负责渲染整个树
  - 传参：
    - `TreeId` tree 标识
    - `NodeList` tree 所有数据
   - 方法：
    - `onClickFunc` 节点点击事件
- `NodeComponent` 负责渲染树的一个节点
- `SubTreeComponent` 负责渲染子树的，大致和 Tree 组件相同，重写是为了和 Tree 组件有不同的功能和样式

为每个组件添加 `key` 或 `id` 的目的是为了在重新渲染时加快 react diff 算法速度，即比较虚拟 Dom 和真实 Dom，具体查看
[keys](https://doc.react-china.org/docs/lists-and-keys.html#keys)

## 异步加载

使用 es6 的 `async/await` 结合 axios 请求 Github API 查找用户信息，查看更多 `async/await` 请查看 *阮一峰的* [async/await](http://es6.ruanyifeng.com/#docs/async)