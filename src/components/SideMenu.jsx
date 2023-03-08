/*
 * @Description: SideMenu
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:31:27
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 22:55:00
 * @FilePath: \newssystem\src\components\SideMenu.jsx
 */
import React, { useState, useEffect } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Logo from "../assets/images/htlogo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const { Sider } = Layout;

export default function SideMenu() {
  const nav = useNavigate();
  const [SildeInfo, setSildeInfo] = useState([]);
  const dataMap = (data) => {
    return data.map((item) => ({
      key: item.key,
      label: item.title,
      [item.children?.length?'children':delete[item.children]]: item.children&&dataMap(item.children),
    }));
  };
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:5000/rights?_embed=children"
      );
      console.log("data",data);
      console.log("mapdata",dataMap(data));
      setSildeInfo(dataMap(data));
    })();
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: "/home",
      icon: <UserOutlined />,
      label: "首页",
    },
    {
      key: "/user-manage/list",
      icon: <VideoCameraOutlined />,
      label: "用户列表",
    },
    {
      key: "/authority-manage",
      icon: <UploadOutlined />,
      label: "权限管理",
      children: [
        {
          key: "/authority-manage/authorityList",
          icon: <UserOutlined />,
          label: "权限列表",
        },
        {
          key: "/authority-manage/rolesList",
          icon: <VideoCameraOutlined />,
          label: "角色列表",
        },
      ],
    },
  ];
  const ItemClick = ({ key }) => {
    console.log(key);
    nav(key);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <a href="#" title="树树后台管理系统">
          <p style={{ textIndent: "-9999px", margin: 0 }}>树树后台管理系统</p>
          <img src={Logo} alt="" />
        </a>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        items={SildeInfo}
        onClick={ItemClick}
      />
    </Sider>
  );
}
