/*
 * @Description: 路由表配置
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 16:18:14
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-06 10:52:11
 * @FilePath: \react practive\newssystem\src\router\routerConfig.jsx
 */

import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { AuthWrapComponent } from "./authRoute";
const Login = lazy(() => import("../views/login/Login"));
const NewsSandBox = lazy(() => import("../views/sandbox/NewsSandBox"));
const NotFound = lazy(() => import("../views/notFound/NotFound"));


export const routes = [
  { index:true, element: <Navigate to={"/login"} /> },
  {
    path: "/login",
    element: <Login/>,
  },
  { path: "/newsandbox",   element:  <NewsSandBox/>,needAuth:true},
  { path: "*",  element: <NotFound/>},
];
const dealRouters=(routes)=>{
  const handleRouters=[]
  routes.map((route)=>{
    handleRouters.push({
      path: route.path,
      index:!!route.index,
      element:(
        route.needAuth?
        <AuthWrapComponent >
          {route.element}
        </AuthWrapComponent>
        : route.element
      ),
      children: route.children && dealRouters(route.children),
    })
    return handleRouters
  })
  return handleRouters
}

export default function RouterConfig() {
  return useRoutes(dealRouters(routes));
}
