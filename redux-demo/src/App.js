import { Breadcrumb, Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./shared/layout/header/header";
import SiderComponent from "./shared/layout/siderbar/siderbar";

const { Content,Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={ { minHeight: "100vh" } }>
        <SiderComponent/>
        <Layout>
          <HeaderComponent/>
          <Content style={ { margin: "0 16px" } }>
            <Breadcrumb style={ { margin: "16px 0" } }>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={ { padding: 24, background: "#fff", minHeight: 360 } }>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={ { textAlign: "center" } }>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
