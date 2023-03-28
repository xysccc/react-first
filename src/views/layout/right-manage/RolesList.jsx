/*
 * @Description:角色列表
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-07 09:12:00
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-28 18:07:02
 * @FilePath: \newssystem\src\views\layout\right-manage\RolesList.jsx
 */
    import React,{useState,useEffect} from 'react'
    import axios from 'axios';
    import { Table, Tag, Button, Space, Switch,Tree } from "antd";
    import {
      EditOutlined,
      DeleteOutlined,
      ExclamationCircleFilled,
    } from "@ant-design/icons";
    import { Modal } from "antd";
    const { confirm } = Modal;
    export default function RolesList() {
      const [DataSource, setDataSource] = useState([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [treeData, settreeData] = useState([]);
      const [checkedKeys, setCheckedKeys] = useState([]);
      let [checkedId, setCheckedId] = useState(0);
      useEffect(() => {
        axios
        .get("http://localhost:5000/roles")
        .then(({ data }) => setDataSource(data));
      }, []);
      useEffect(() => {
        axios
        .get("http://localhost:5000/rights?_embed=children")
        .then(({ data }) => settreeData(data));
      }, []);
      const columns = [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "角色名称",
          dataIndex: "roleName",
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
                <Button
                  type="primary"
                  onClick={() => editRight(item)}
                  shape="circle"
                  icon={<EditOutlined />}
                />
              </Space>
            </>
          ),
        },
      ];
      // 删除权限
  const delItem = (item) => {
    confirm({
      title: "提示",
      icon: <ExclamationCircleFilled />,
      content: "确认删除？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
          setDataSource(DataSource.filter((dataObj) => dataObj.id !== item.id));
          axios.delete(`http://localhost:5000/roles/${item.id}`);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //编辑权限
  const editRight = (item) => {
   setCheckedId(item.id);
   console.log(checkedId);
   setCheckedKeys(item.rights)
   setIsModalOpen(true);
  };
  const handleOk=()=>{
    setDataSource(DataSource.map(item=>{
      if (item.id===checkedId) {
        return ({
          ...item,
          rights:checkedKeys
        })
      }
      return item
    }))
    axios.patch(`http://localhost:5000/roles/${checkedId}`,{
      rights:checkedKeys
    })
    setIsModalOpen(false)
  }
  const onCheck=(checkedKeysValue)=>{
    console.log(checkedKeysValue);
    setCheckedKeys(checkedKeysValue)
  }
  const handleCancel=()=>{
    setIsModalOpen(false);
  }
      return (
        <>
         <Table
        dataSource={DataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(item)=>item.id}
      />
       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Tree
        checkable
        treeData={treeData}
        checkedKeys={checkedKeys}
        onCheck={onCheck}
        checkStrictly
    />
      </Modal>
        </>
      )
    }