import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { postRegister } from "./actions";

import "./Login.scss";

const ModalRegister = ({ visibleModal, handleCancel, handleOk }) => {
  const handleFisnish = async (datas) => {
    try {
      const data = {
        email: datas.email,
        name: datas.name,
        username: datas.username,
        password: datas.password,
      };
      const response = await postRegister(data);
      handleOk(datas.email);
      console.log("handleFisnish -> response", response);
    } catch (error) {}
  };

  return (
    <div>
      <Modal
        title="Đăng Kí"
        visible={visibleModal}
        onCancel={handleCancel}
        footer={null}
        className="common-modal"
        style={{ top: 20 }}
      >
        <Form labelAlign="left" onFinish={handleFisnish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalRegister;
