import React, { useEffect } from "react";
import { Dropdown, Avatar, Menu } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { actionGetProfile } from "../../features/system/actions";
import "./Header.scss";

const DropdownMenu = (props) => {
  console.log(props.profile);

  useEffect(() => {
    _fetProfile();
  }, []);

  const _fetProfile = () => {
    props.actionGetProfile();
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="#" className="flex-user">
          <Avatar icon={<UserOutlined />} size="large" />
          <div>
            <div>{props.profile.name}</div>
            <div>{props.profile.email}</div>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#" className="style-flex-user">
          <Avatar icon={<UserOutlined />} />
          <div>đóng góp ý kiến</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">
          <Avatar icon={<UserOutlined />} />
          <div>Trợ giúp hỗ trợ</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">
          <Avatar icon={<UserOutlined />} />
          <div>Đăng xuất</div>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <span>Cá nhân</span>
    </Dropdown>
  );
};

export default connect(
  (state) => ({
    profile: state.systemReducer.profile,
  }),
  {
    actionGetProfile,
  }
)(DropdownMenu);
