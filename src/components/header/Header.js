import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  ShoppingCartOutlined,
  BellOutlined,
  UserOutlined,
  CalendarOutlined,
  TrophyOutlined,
  FormOutlined,
} from "@ant-design/icons";

import { routes } from "../../utils/constants/constant";
import * as image from "../../assets/index";
import DropdownMenu from "./DropdownMenu";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="wp-header">
      <div className="wp-logo">
        <Link to={routes.HOME}>
          <img className="logo" alt="Lỗi ảnh" src={image.chicken} />
        </Link>
      </div>
      <p className="site-description">Nơi mua bán giao hữu thi đấu</p>
      <div className="header">
        <div className="item-menu">
          <Link
            to={routes.HOME}
            className={`btn4 ${
              props.location.pathname === routes.HOME && "route-selected"
            }`}
          >
            <CalendarOutlined />
            Mua Sắm
          </Link>
        </div>
        <div className="item-menu">
          <Link
            to={routes.ARENA}
            className={`btn4 ${
              props.location.pathname === routes.ARENA && "route-selected"
            }`}
          >
            <TrophyOutlined />
            Thi Đấu
          </Link>
        </div>
        <div className="item-menu">
          <Link to={routes.HOME} className="btn4">
            <FormOutlined />
            Đăng Tin
          </Link>
        </div>
        <div className="item-menu">
          <Link to={routes.HOME} className="btn4">
            <FormOutlined />
            Giao hữu
          </Link>
        </div>
        <div className="item-menu">
          <Link to={routes.HOME} className="btn4">
            <BellOutlined />
            Thông Báo
          </Link>
        </div>
        <div className="item-menu">
          <Link to={routes.HOME} className="btn4">
            <ShoppingCartOutlined />
            Giỏ Hàng
          </Link>
        </div>
        <div className="item-menu">
          <Link to={routes.HOME} className="btn4">
            <UserOutlined />
            <DropdownMenu />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
