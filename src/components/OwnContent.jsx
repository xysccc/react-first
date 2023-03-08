/*
 * @Description:main盒子
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-08 14:11:56
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 14:13:58
 * @FilePath: \newssystem\src\components\OwnContent.jsx
 */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd';
const { Content } = Layout;
export default function OwnContent() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <>
     <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
    </>
  )
}
