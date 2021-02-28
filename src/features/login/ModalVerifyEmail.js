import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { verifyEmail } from "./actions";
import Cookie from "js-cookie";

import * as constants from "../../utils/constants/constant";
import "./Login.scss";

const ModalVerifyEmail = ({ visibleModal, handleCancel, emailVerify }) => {
  const handleFisnishEmail = async (datas) => {
    try {
      const dataDTO = {
        email: emailVerify,
        verificationCode: datas.verificationcode,
      };
      const headers = {
        ["X-Device-Identifier"]: "56643566756",
      };
      const { data } = await verifyEmail(headers, dataDTO);
      // set token into cookie
      Cookie.set(constants.TOKEN, data.data.accessToken);
      Cookie.set(constants.REFRESH_TOKEN, data.data.refreshToken);
      window.location.href = "#/";
      handleCancel();
    } catch (error) {}
  };

  return (
    <Modal
      title="Verify Email"
      visible={visibleModal}
      onCancel={handleCancel}
      footer={null}
      className="common-modal"
      style={{ top: 20 }}
    >
      <Form onFinish={handleFisnishEmail} labelAlign="left">
        <Form.Item
          label="VerificationCode"
          name="verificationcode"
          rules={[
            {
              required: true,
              message: "Please input your verificationcode!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalVerifyEmail;
