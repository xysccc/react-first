/*
 * @Description:一级布局
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 08:23:24
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 19:58:05
 * @FilePath: \newssystem\src\views\layout\OwnLayout.jsx
 */
import React from 'react'

import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import { Layout, Menu, theme } from 'antd';
import OwnContent from '../../components/OwnContent';
import './OwnLayout.css'
import OwnFooter from '../../components/OwnFooter';
export default function OwnLayout() {
  return (
    <>
     <Layout>
       {/* 侧栏 */}
       <SideMenu/>
        <Layout>
        {/* 头部 */}
        <TopHeader/>
      {/* 二级路由出口 */}
      <OwnContent/>
      <OwnFooter/>
        </Layout>
     </Layout>
    </>
  )
}
