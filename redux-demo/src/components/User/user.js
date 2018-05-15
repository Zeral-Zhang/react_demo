import { Breadcrumb } from "antd";

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { getEntities } from "./user.redux";

class UserComponent extends Component {

  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb style={ { margin: "16px 0" } }>
          <Breadcrumb.Item><Link to="/user">User</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div style={ { padding: 24, background: "#fff", minHeight: 360 } }>
          user.
        </div>
      </Fragment>
    );
  }

}

const mapStateToProps = ({ dashboard }) => ({
  dashBoardInfo: dashboard.entities
});

const mapDispatchToProps = {
  getEntities
};
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);