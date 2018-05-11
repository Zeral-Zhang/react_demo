import { Layout } from "antd";
import * as React from "react";
import LoadingBar from "react-redux-loading-bar";

import "./header.css";

const { Header } = Layout;

export default class HeaderComponent extends React.Component {

  render() {
    return (
      <div>
        <LoadingBar className="loading-bar"/>
        <Header style={{ background: '#fff', padding: 0 }} />
      </div>
    );
  }
}