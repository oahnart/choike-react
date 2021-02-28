import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import cookie from "js-cookie";
import { Button, Form, Input, Checkbox } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postLogin } from "./actions";
import injectIntl from "../../utils/helpers/intl";
import { showErrorMessage } from "../../utils/helpers/helpers";
import { actionChangeLang } from "../system/actions";
import ModalRegister from "./ModalRegister";
import { routes, TOKEN, REFRESH_TOKEN } from "../../utils/constants/constant";
import * as image from "../../assets";

import ModalVerifyEmail from "./ModalVerifyEmail";
import "./Login.scss";

let intervalTimer = null;

const Login = (props) => {
  const { t } = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalVerify, setVisibleModalverify] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [emailVerify, setEmailVerify] = useState("");

  useEffect(() => {
    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  const _handleVisibleModal = () => {
    setVisibleModal(true);
  };

  const _handleCancel = () => {
    setVisibleModal(false);
  };

  const _handleOk = (email) => {
    setVisibleModal(false);
    setVisibleModalverify(true);
    setEmailVerify(email);
  };

  const handleFinish = async (datas) => {
    try {
      const headers = {
        ["X-Device-Identifier"]: "5662149225562",
      };
      const { data } = await postLogin(headers, datas);
      if (data.code === 200001) {
        setEmailVerify(data.data.email);
        setVisibleModalverify(true);
      } else {
        cookie.set(TOKEN, data.data.accessToken);
        cookie.set(REFRESH_TOKEN, data.data.refreshToken);
        window.location.href = "#/";
      }
    } catch (error) {
      const { data } = error;
      showErrorMessage(data.code);
    }
  };
  return (
    <>
      <ModalVerifyEmail
        visibleModal={visibleModalVerify}
        handleCancel={() => setVisibleModalverify(false)}
        emailVerify={emailVerify}
      />
      <div className="login-container">
        <div className="header-left">
          <span>
            <span
              className={`${props.locale === "en" ? "active" : "normal"}`}
              onClick={() => {
                props.actionChangeLang("en");
              }}
            >
              EN
            </span>
            &nbsp;|&nbsp;
            <span
              className={`${props.locale === "vi" ? "active" : "normal"}`}
              onClick={() => {
                props.actionChangeLang("vi");
              }}
            >
              VI
            </span>
          </span>
        </div>
        <div className="block-logo">
          <img src={image.chicken} alt="" className="logo-vmsart" />
        </div>
        <div className="err-msg">{errMsg}</div>
        <Form
          colon={false}
          hideRequiredMark
          onFinish={handleFinish}
          className="login-form"
        >
          <Form.Item
            label={t("IDS_DM_USERNAME")}
            labelAlign="left"
            name="username"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="IDS_DM_USERNAME_REQUIRED" />,
              },
            ]}
          >
            <Input
              placeholder={t("IDS_DM_USERNAME")}
              onChange={() => setErrMsg("")}
            />
          </Form.Item>
          <Form.Item
            label={t("IDS_DM_PASSWORD")}
            labelAlign="left"
            name="password"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="IDS_DM_PASSWORD_REQUIRED" />,
              },
            ]}
          >
            <Input
              type="password"
              placeholder={t("IDS_DM_PASSWORD")}
              onChange={() => setErrMsg("")}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <>
            <div
              className="fogot-password"
              onClick={() => {
                props.history.push(routes.FORGOT_PASSWORD);
              }}
            >
              <span>
                <FormattedMessage id="IDS_DM_FORGOT_PASSWORD" />
              </span>
            </div>
            <div className="btn-action">
              <Button type="primary" htmlType="submit" className="login-btn">
                <FormattedMessage id="IDS_DM_LOGIN" />
              </Button>
            </div>

            <div className="btn-action">
              <Button
                type="primary"
                className="register-btn"
                onClick={_handleVisibleModal}
              >
                <FormattedMessage id="IDS_DM_REGISTER" />
              </Button>
            </div>
            <div className="btn-action">
              <Button type="primary" className="loginFB-btn">
                <FormattedMessage id="IDS_DM_LOGIN_FB" />
              </Button>
            </div>
            <ModalRegister
              visibleModal={visibleModal}
              setVisibleModal={setVisibleModal}
              handleCancel={_handleCancel}
              handleOk={_handleOk}
            />
          </>
        </Form>
      </div>
    </>
  );
};
export default connect(
  (state) => ({
    locale: state.systemReducer.locale,
  }),
  { actionChangeLang }
)(withRouter(injectIntl(Login)));
