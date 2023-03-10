/*
 * @Description:Footer
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-08 19:55:41
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-10 13:30:08
 * @FilePath: \newssystem\src\components\OwnFooter.jsx
 */
import React from 'react'
import { Layout} from 'antd';

const { Footer } = Layout;

export default function OwnFooter() {
  return (
    <Footer style={{ textAlign: 'center', "flexShrink": 0,
     }}>✨✨ShuShu Background management  ©2023 Created by <a href='https://github.com/xysccc' target='_blank' className='text-blue-300'>XYSCCC</a>🎈🎈</Footer>
  )
}
