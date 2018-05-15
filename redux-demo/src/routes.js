import * as React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/Dashboard/dashboard";
import User from "./components/User/user";
import DocumentTitle from "react-document-title";

/**
 * 添加 title 支持
 *
 * @param WrappedComponent 被包裹组件
 * @param title 标题
 * @returns {{new(): WrapTitle, prototype: WrapTitle}}
 * @constructor
 */
function WrapTitle(WrappedComponent, title = "React Demo") {
  return class WrapTitle extends React.Component {
    render() {
      return (<DocumentTitle title={ title }><WrappedComponent { ...this.props } /></DocumentTitle>);
    }
  };
}

// switch 会渲染匹配到的第一个路由组件
const Routes = () => (
  <Switch>
    <Route exact path="/" component={ WrapTitle(DashBoard, "控制面板") }/>
    <Route path="/user" component={ WrapTitle(User, "用户管理") }/>
    <Route render={ () => <h3>404 Not Found.</h3> }/>
  </Switch>
);

export default Routes;