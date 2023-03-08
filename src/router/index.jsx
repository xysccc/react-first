/*
 * @Description:路由入口文件
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 14:09:42
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 19:52:22
 * @FilePath: \newssystem\src\router\index.jsx
 */

import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
// import Login from "../views/login/Login";
// import NewsSandBox from "../views/sandbox/NewsSandBox";
import RouterConfig from "./routerConfig";
export default function Router() {
  return (
    // <HashRouter>
    //    <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/" element={<NewsSandBox />} />
    //   </Routes>
    //   <RouterConfig/>
    // </HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </Suspense>
  );
}
