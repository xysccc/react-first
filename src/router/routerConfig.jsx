/*
 * @Description: 路由表配置
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 16:18:14
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 21:59:13
 * @FilePath: \newssystem\src\router\routerConfig.jsx
 */

import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { AuthWrapComponent } from "./authRoute";
const Login = lazy(() => import("../views/login/Login"));
const Layout = lazy(() => import("../views/layout/OwnLayout"));
const NotFound = lazy(() => import("../views/notFound/NotFound"));
const Home = lazy(() => import("../views/layout/home/Home"));
const UserList = lazy(() => import("../views/layout/user-manage/UserList"));
const RightList = lazy(() => import("../views/layout/right-manage/RightList"));
const RolesList = lazy(() => import("../views/layout/right-manage/RolesList"));

export const routes = [
  { index: true, element: <Navigate to={"/home"} /> },
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
    children: [
      { path: "/home", element: <Home /> },
      { path: "/user-manage/list",element:<UserList/> },
      { path: "/right-manage/right/list",element:<RightList/> },
      { path: "/right-manage/role/ist",element:<RolesList/> },
    ],
  },

  { path: "*", element: <NotFound /> },
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
