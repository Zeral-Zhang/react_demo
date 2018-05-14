import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppRoutes from "./routes";
import HeaderComponent from "./shared/layout/header/header";
import SiderComponent from "./shared/layout/siderbar/siderbar";
// 路由器
import { HashRouter as Router } from "react-router-dom";

const { Content, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <Layout style={ { minHeight: "100vh" } }>
          <SiderComponent/>
          <Layout>
            <HeaderComponent/>
            <Content style={ { margin: "24px 24px 0", height: "100%" } }>
              <AppRoutes/>
            </Content>
            <Footer style={ { textAlign: "center" } }>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
