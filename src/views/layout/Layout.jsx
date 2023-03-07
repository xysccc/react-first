/*
 * @Description:一级布局
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:23:24
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-07 09:05:11
 * @FilePath: \react practive\newssystem\src\views\layout\Layout.jsx
 */
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'

export default function Layout() {
  return (
    <div>
      {/* 侧栏 */}
      <SideMenu/>
      {/* 头部 */}
      <TopHeader/>
      {/* 二级路由出口 */}
      <div className="main">
      <Outlet/>
      </div>
    </div>
  )
}
