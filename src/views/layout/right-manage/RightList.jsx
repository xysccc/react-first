/*
 * @Description:权限列表
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 09:14:05
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-09 23:17:08
 * @FilePath: \newssystem\src\views\layout\right-manage\RightList.jsx
 */
import React,{useState,useEffect} from 'react'
import { Table, Tag,Button, Space } from 'antd'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function AuthorityList() {
  const [DataInfo, setDataInfo] = useState([]);
  //columns  dataIndex和key 对应后端数据的属性名

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      render:(key)=>(<Tag color='orange'>{key}</Tag>)
    },
    {
      title: '操作',
     render:()=><>
      <Space size='middle'>
      <Button danger shape="circle" icon={<DeleteOutlined />} />
      <Button type="primary" shape="circle" icon={<EditOutlined />} />
      </Space>
     </>
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/rights').then(({data})=>setDataInfo(data))
  }, []);

  return (
    <>
    <Table dataSource={DataInfo} columns={columns} />
    </>
  )
}
