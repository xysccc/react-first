/*
 * @Description: TopHeader
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:32:24
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-10 13:29:34
 * @FilePath: \newssystem\src\components\TopHeader.jsx
 */
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Space, Avatar } from "antd";
const { Header, Sider, Content } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleIcon = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          超级管理员
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "退出登录",
    },
  ];
  return (
    <>
      <Header
        style={{
          padding: "0 30px 0 20px",
          background: colorBgContainer,
          "flexShrink": 0,
          height: "64px"
        }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggleIcon} className="text-lg"/>
        ) : (
          <MenuFoldOutlined onClick={toggleIcon}  className="text-lg"/>
        )}
        {/* 欢迎文本 */}
        <div style={{ float: "right" }}>
          <span className="text-blue-400 mr-2 select-none">欢迎admin</span>
          {/* 头像退出区域 */}
          <Dropdown menu={{ items }}>
            <Avatar size={40} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
