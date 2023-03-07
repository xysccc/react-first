/*
 * @Description:鉴权组件
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 18:46:58
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-06 12:01:22
 * @FilePath: \react practive\newssystem\src\router\authRoute.jsx
 */

import { Navigate } from "react-router-dom";
import { Fragment } from "react";
export const AuthWrapComponent = ({route,children}) => {
  route?.meta?.title && (document.title = route.meta.title)
  const token = localStorage.getItem("token") || "";
  return (
    <Fragment>
      {token ? children : <Navigate to="/login" replace />}
    </Fragment>
  );
};
