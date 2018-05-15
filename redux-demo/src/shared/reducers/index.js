import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import dashboard from '../../components/Dashboard/dashboard.redux';
import user from '../../components/User/user.redux';

export default combineReducers({
  /* 项目的 reducer */
  dashboard,
  user,

  /* 插件的 reducer */
  loadingBar
});