/*
 * @Description:路由入口文件
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 14:09:42
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-09 19:26:00
 * @FilePath: \newssystem\src\router\index.jsx
 */

import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
// import Login from "../views/login/Login";
// import NewsSandBox from "../views/sandbox/NewsSandBox";
import RouterConfig from "./routerConfig";
import {
  LoadingOutlined
} from "@ant-design/icons";
export default function Router() {
  return (
    // <HashRouter>
    //    <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/" element={<NewsSandBox />} />
    //   </Routes>
    //   <RouterConfig/>
    // </HashRouter>
    <Suspense fallback={<div className="flex justify-center items-center w-full h-full"><LoadingOutlined  style={{fontSize:'30px'}}/></div>}>
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </Suspense>
  );
}
