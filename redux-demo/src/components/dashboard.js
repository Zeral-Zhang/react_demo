import React, { Component } from "react";
import { Breadcrumb } from 'antd';

class DashBoardComponent extends Component {

  render() {
    return (
      <div>
        <Breadcrumb style={ { margin: "16px 0" } }>
          <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
        </Breadcrumb>
        <div style={ { padding: 24, background: "#fff", minHeight: 360 } }>
          Dashboard.
        </div>
      </div>
    );
  }

}

export default DashBoardComponent;