import { Icon, Layout, Menu } from "antd";
import { NavLink as Link } from "react-router-dom";
import * as React from "react";

import "./siderbar.css";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderComponent extends React.Component {

  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        id="app-sider"
        collapsible
        collapsed={ this.state.collapsed }
        onCollapse={ this.onCollapse }>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={ ["1"] } mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="pie-chart"/>
              <span>DashBoard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user">
              <Icon type="desktop"/>
              <span>DashBoard</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={ <span><Icon type="user"/><span>User</span></span> }>
            <Menu.Item key="3"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={ <span><Icon type="team"/><span>Team</span></span> }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file"/>
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}