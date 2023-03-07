/*
 * @Description: 路由表配置
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 16:18:14
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-07 09:52:45
 * @FilePath: \react practive\newssystem\src\router\routerConfig.jsx
 */

import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { AuthWrapComponent } from "./authRoute";
const Login = lazy(() => import("../views/login/Login"));
const Layout = lazy(() => import("../views/layout/Layout"));
const NotFound = lazy(() => import("../views/notFound/NotFound"));
const Home = lazy(() => import("../views/layout/home/Home"));

export const routes = [
  { index:true, element: <Navigate to={"/home"} /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    needAuth: true,
    meta: {
      title: "welcome😝",
    },
    children: [{ path: "/home", element: <Home />},],
  },

  { path: "*",  element: <NotFound/>},
];

const dealRouters = (routes) => {
  const handleRouters = [];
  routes.forEach((route) => {
    handleRouters.push({
      path: route.path,
      index: !!route.index,
      element: route.needAuth ? (
        <AuthWrapComponent route={route}>{route.element}</AuthWrapComponent>
      ) : (
        route.element
      ),
      children: route.children && dealRouters(route.children),
    });
  });
  return handleRouters;
};

export default function RouterConfig() {
  // console.log("deal", dealRouters(routes));
  return useRoutes(dealRouters(routes));
}
