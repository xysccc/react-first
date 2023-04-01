/*
 * @Description: 用户列表
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 09:08:40
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-28 20:05:54
 * @FilePath: \newssystem\src\views\layout\user-manage\UserList.jsx
 */
import React, { useState, useEffect } from "react";
import { Table, Space, Switch,Button, Form, Input, Modal, Radio,Select } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import axios from "axios";

export default function UserList() {
const { confirm } = Modal;
const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [region, setRegions] = useState([]);
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/users?_expand=role`).then(({data})=>setDataSource(data))
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/regions`).then(({data})=>setRegions(data))
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/roles`).then(({data})=>setRoles(data))
  }, []);
  const columns=[ {
    title: "区域",
    dataIndex: "region",
    render:(region) => (region===''?'全球':region)
  },
  {
    title: "角色名称",
    dataIndex: "role",
    render:(role) => role.roleName
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "用户状态",
    render:(item)=>(<>
     <Switch
             checked={item.roleState}
             disabled={item.default}
            />
    </>)
  },
  {
    title: "操作",
    render: (item) => (
      <>
        <Space size="middle">
          <Button
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            disabled={item.default}
            // onClick={() => delItem(item)}
          />
          <Button
            type="primary"
            disabled={item.default}
            // onClick={() => editRight(item)}
            shape="circle"
            icon={<EditOutlined />}
          />
        </Space>
      </>
    ),
  },]
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <>
    <Button type="primary" onClick={(item)=>{setOpen(true)}}>添加新用户</Button>
    <Modal
      open={open}
      title="添加用户"
      okText="确定"
      cancelText="取消"
      onCancel={()=>{setOpen(false)}}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: '请输入账号',
            },
          ]}
        >
          <Input type="text"/>
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{
          required: true,
          message: '请输入密码'
        }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item name="region" label="区域" rules={[{
          required: true,
          message: '请选择区域'
        }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item name="roleId" label="角色" rules={[{
          required: true,
          message: '请选择角色'
        }]}>
          <Input type="password" />
        </Form.Item>
        
      </Form>
    </Modal>
     <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}
        pagination={{ pageSize: 5 }}
      />
    </>
  )
}
