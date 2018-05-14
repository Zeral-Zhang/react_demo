import { Breadcrumb } from "antd";
import React, { Component } from "react";

class HomeComponent extends Component {

  render() {
    return (
      <div>
        <Breadcrumb style={ { margin: "16px 0" } }>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div style={ { padding: 24, background: "#fff", minHeight: 360 } }>
          Hello World.
        </div>
      </div>
    );
  }

}

export default HomeComponent;