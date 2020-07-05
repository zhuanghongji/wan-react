import React, { PropsWithChildren } from "react"
import { Layout, Menu } from "antd"
import { RouteComponentProps, Link } from "@reach/router"

const { Header, Content, Footer } = Layout

type Props = {
  // ignore
} & RouteComponentProps

export const MainPage = (props: PropsWithChildren<Props>) => {
  const { children } = props 
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/square">广场</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/navi">导航</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/wenda">问答</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/tree">体系</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/project">项目</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/mp">公众号</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/tools">工具</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        { children }
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

