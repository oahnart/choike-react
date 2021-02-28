import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";
import { Layout, Row } from "antd";
import Login from "./features/login/Login";
import Home from "./features/home/Home";
import Arena from "./features/arena/Arena";
import DetailMarket from "./features/home/DetailMarket/DetailMarket";
import Loading from "./components/loading/Loading";
// import SessionTimeOut from "./components/sessionTimeOut/SessionTimeOut";
import { actionLogout } from "./features/system/actions";
import * as constants from "./utils/constants/constant";
import { store } from "./index";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";

const isViewFullPage = (pathname) => {
  return (
    pathname === constants.routes.LOGIN ||
    pathname === constants.routes.FORGOT_PASSWORD
  );
};

const Logout = () => {
  store.dispatch(actionLogout());
  return <Redirect to="/login" />;
};
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/logout" component={Logout} />
        <Redirect exact from="/" to={constants.routes.HOME} />
        <PrivateRoute exact path={constants.routes.HOME} component={Home} />
        <PrivateRoute exact path={constants.routes.ARENA} component={Arena} />
        <PrivateRoute
          exact
          path={constants.routes.DETAIL_MARKET}
          component={DetailMarket}
        />
        <PublicRoute exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default Routes;

const PublicRoute = ({ component: Component, passProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <div className="app-container">
            <Layout
              style={{ minWidth: "min-content" }}
              className={`${
                isViewFullPage(props.location.pathname) ? "full-page" : ""
              }`}
            >
              <Layout.Content
                className="content-container"
                style={{ minWidth: "min-content" }}
              >
                <Component {...props} {...passProps} />
              </Layout.Content>
            </Layout>
          </div>
        );
      }}
    />
  );
};
const PrivateRoute = ({ component: Component, passProps, ...rest }) => {
  const loggedIn = isAuthenticate();
  return (
    <Route
      {...rest}
      render={(props) => {
        const { role } = store.getState().systemReducer;
        if (!loggedIn) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        if (isRestrict(props.location.pathname, role))
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        return (
          <>
            <Header />
            <Row>
              <Loading />
              {/* <SessionTimeOut /> */}
              <div className="container-content">
                <Component {...props} {...passProps} />
              </div>
            </Row>
            <Footer />
          </>
        );
      }}
    />
  );
};

export function isAuthenticate() {
  return !!Cookie.get(constants.TOKEN);
}

export function isRestrict(pathname, role) {
  return ROLE_TABLE[pathname] && ROLE_TABLE[pathname].indexOf(role) === -1;
}

const ROLE_TABLE = {
  "/home": [constants.Roles.ROLE_USER],
  "/admin": [constants.Roles.ROLE_ADMIN, constants.Roles.ROLE_MANAGER],
};
