/*
 * @Description: SideMenu
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:31:27
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 19:45:41
 * @FilePath: \newssystem\src\components\SideMenu.jsx
 */
import React,{useState} from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Logo from '../assets/images/htlogo.svg'
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

export default function SideMenu() {
  const nav = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const items=[
    {
      key: '/home',
      icon: <UserOutlined />,
      label: '首页',
    },
    {
      key: '/user-manage/list',
      icon: <VideoCameraOutlined />,
      label: '用户列表',
    },
    {
      key: '/authority-manage',
      icon: <UploadOutlined />,
      label: '权限管理',
      children:[ {
        key: '/authority-manage/authorityList',
        icon: <UserOutlined />,
        label: '权限列表',
      },
      {
        key: '/authority-manage/rolesList',
        icon: <VideoCameraOutlined />,
        label: '角色列表',
      },]
    },
  ]
  const ItemClick=({  key })=>{
    console.log(key);
    nav(key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <a href="#" title='树树后台管理系统'>
          <p style={{textIndent:'-9999px',margin:0}}>树树后台管理系统</p>
          <img src={Logo} alt=""/>
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          items={items}
          onClick={ItemClick}
        />
      </Sider>
  )
}
