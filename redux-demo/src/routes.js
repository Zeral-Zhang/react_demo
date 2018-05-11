import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// switch 会渲染匹配到的一个路由组件
// PrivateRoute 增加 route，增加权限判断，成功渲染对应组件，未授权跳转登录，权限不匹配显示权限不足
const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Route path="/" component={ Home }/>
      <Route component={ 404 }/>
    </Switch>
  </div>
);

export default Routes;