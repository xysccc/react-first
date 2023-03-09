/*
 * @Description: SideMenu
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:31:27
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-09 20:03:23
 * @FilePath: \newssystem\src\components\SideMenu.jsx
 */
import React, { useState, useEffect } from "react";
import {
  UnorderedListOutlined,
  HomeOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Logo from "../assets/images/htlogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const { Sider } = Layout;

export default function SideMenu() {
  useEffect(() => {
    // useEffect中不能直接使用async await 这里使用自执行函数
    (async () => {
      const { data } = await axios.get(
        "http://localhost:5000/rights?_embed=children"
      );
      setSildeInfo(dataMap(data));
    })();
  }, []);
  const nav = useNavigate();
  const loc=useLocation()
  const [collapsed, setCollapsed] = useState(false);
  const [SildeInfo, setSildeInfo] = useState([]);
  const selectKey=[loc.pathname]
  const openKey=['/'+loc.pathname.split('/')[1]]
  const iconMap={
    '/home':<HomeOutlined />,
    '/user-manage':<UserOutlined />,
    '/user-manage/list':<UnorderedListOutlined />,
    '/right-manage':<IdcardOutlined />,
    '/right-manage/role/list':<UnorderedListOutlined />,
    '/right-manage/right/list':<UnorderedListOutlined />,
  }
  // 处理后端数据函数
  const dataMap = (data) => {
    return data.map((item) => {
      return (
        item.pagepermisson && {
          key: item.key,
          icon:iconMap[item.key],
          label: item.title,
          [item.children?.length ? "children" : delete [item.children]]:
            item.children && dataMap(item.children),
        }
      );
    });
  };
  // const items = [
  //   {
  //     key: "/home",
  //     icon: <UserOutlined />,
  //     label: "首页",
  //   },
  //   {
  //     key: "/user-manage/list",
  //     icon: <VideoCameraOutlined />,
  //     label: "用户列表",
  //   },
  //   {
  //     key: "/authority-manage",
  //     icon: <UploadOutlined />,
  //     label: "权限管理",
  //     children: [
  //       {
  //         key: "/authority-manage/authorityList",
  //         icon: <UserOutlined />,
  //         label: "权限列表",
  //       },
  //       {
  //         key: "/authority-manage/rolesList",
  //         icon: <VideoCameraOutlined />,
  //         label: "角色列表",
  //       },
  //     ],
  //   },
  // ];
  const ItemClick = ({ key }) => {
  //  跳转到相应路由
    nav(key);
    console.log("loc",loc,"key",key);

  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div  className=" flex flex-col h-full w-full">
      <div className="logo">
        <a href="#" title="树树后台管理系统">
          <p style={{ textIndent: "-9999px"}}>树树后台管理系统</p>
          <img src={Logo} alt="" />
        </a>
      </div>
     <div className="flex-1 overflow-auto">
     <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectKey}
        defaultOpenKeys={openKey}
        items={SildeInfo}
        onClick={ItemClick}
      />
     </div>
      </div>
    </Sider>
  );
}
