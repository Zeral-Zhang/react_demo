import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// reducer
import reducer from "./shared/reducers";
// antd 国际化
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
// 中间件
import { loadingBarMiddleware } from "react-redux-loading-bar";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import errorMiddleware from "./config/error-middleware";

import Mock from 'mockjs';

// 默认中间件
const defaultMiddlewares = [
  thunkMiddleware,
  errorMiddleware,
  promiseMiddleware(),
  loadingBarMiddleware()
];

const composedMiddlewares = middlewares => compose(applyMiddleware(...defaultMiddlewares, ...middlewares));
// 初始化所有的 reducer 和中间件
const initialize = (initialState = {}, middlewares = []) => createStore(reducer, initialState, composedMiddlewares(middlewares));

// 初始化 store，初始化时加入中间件
// 用于维护 state tree
const store = initialize();

// 在根节点渲染
const rootEl = document.getElementById("root");

// 定义容器
const render = Component =>
  ReactDOM.render(
    <Provider store={ store }>
      <LocaleProvider locale={ zh_CN }>
        <Component/>
      </LocaleProvider>
    </Provider>,
    rootEl
  );

render(App);
registerServiceWorker();
