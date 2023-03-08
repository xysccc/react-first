/*
 * @Description:app
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 12:29:39
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-08 13:20:45
 * @FilePath: \newssystem\src\App.jsx
 */
import React, { useEffect } from 'react'
import axios from 'axios'
import Router from './router';
import './App.scss'
export default function App() {
  useEffect(()=>{
    axios.get('/ajax/mostExpected?ci=583&limit=10&offset=0&token=&optimus_uuid=9C778B10BB1911ED973457DC90CBDE5583DE2D14D9B14FCFBC03CA9A73A53106&optimus_risk_level=71&optimus_code=10').then(res=>console.log(res))
  },[])
  return (
     <>
      <Router />
     </>
  )
}
