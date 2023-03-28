/*
 * @Description:权限列表
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 09:14:05
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-10 21:16:57
 * @FilePath: \newssystem\src\views\layout\right-manage\RightList.jsx
 */
import React, { useState, useEffect } from "react";
import { Table, Tag, Button, Space, Switch } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import axios from "axios";
import { Modal } from "antd";
const { confirm } = Modal;

export default function AuthorityList() {
  const [DataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/rights?_embed=children")
      .then(({ data }) => setDataInfo(filterChildren(data)));
  }, []);
  //  dataIndex 对应后端数据的属性名

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "权限名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "权限路径",
      dataIndex: "key",
      key: "key",
      render: (key) => <Tag color="orange">{key}</Tag>,
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
              onClick={() => delItem(item)}
            />
            <Switch
              checked={item.pagepermisson}
              onClick={() => toggleSwitch(item)}
              disabled={item.pagepermisson===undefined}
            />
          </Space>
        </>
      ),
    },
  ];
  function filterChildren(data) {
    return data.map((item) => {
      !item.children?.length && delete item.children;
      return item;
    });
  }
  // 删除权限
  const delItem = (item) => {
    confirm({
      title: "提示",
      icon: <ExclamationCircleFilled />,
      content: "确认删除？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        if (item.grade === 1) {
          axios.delete(`http://localhost:5000/rights/${item.id}`);
          setDataInfo(DataInfo.filter((dataObj) => dataObj.id !== item.id));
        } else {
          const parentObj = DataInfo.find(
            (dataObj) => dataObj.id === item.rightId
          );
          parentObj.children = parentObj.children.filter(
            (dataObj) => dataObj.id !== item.id
          );
          setDataInfo([...DataInfo]);
          axios.delete(`http://localhost:5000/children/${item.id}`);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //编辑权限
  const toggleSwitch = (item) => {
    item.pagepermisson === 1
      ? (item.pagepermisson = 0)
      : (item.pagepermisson = 1);
    setDataInfo([...DataInfo]);
    item.grade === 1
      ? axios.patch(`http://localhost:5000/rights/${item.id}`, {
          pagepermisson: item.pagepermisson,
        })
      : axios.patch(`http://localhost:5000/children/${item.id}`, {
          pagepermisson: item.pagepermisson,
        });
  };

  return (
    <>
      <Table
        dataSource={DataInfo}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}
