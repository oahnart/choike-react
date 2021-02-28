import Cookie from "js-cookie";

import api from "../../utils/helpers/api";
import * as actionTypes from "../../utils/constants/actionTypes";
import * as constants from "../../utils/constants/constant";

//// fet api
const getProfile = (params) => {
  return api({
    method: "get",
    url: "/api/v1/user/me",
  });
};

export const actionLogin = (data) => {
  Cookie.remove(constants.EXPIRED);
  Cookie.remove(constants.JWT);
  Cookie.remove(constants.USER_ROLES);
  // if (users.rememberMe) {
  //   Cookie.set(Constants.LAST_LOGIN, users.username);
  // } else {
  //   Cookie.remove(Constants.LAST_LOGIN);
  // }
  return api({
    method: "post",
    url: "/api/v1/oauth/token",
    noAuth: true,
    data: data,
  });
};

// action
export const actionGetProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCHING_PROFILE,
    });
    const { data } = await getProfile();
    dispatch({
      type: actionTypes.FETCHING_PROFILE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCHING_PROFILE_ERROR,
    });
  }
};

export const actionShowLoading = () => ({
  type: actionTypes.SHOW_LOADING,
});

export const actionHideLoading = () => ({
  type: actionTypes.HIDE_LOADING,
});

export const actionChangeLang = (locale) => ({
  type: actionTypes.CHANGE_LANG,
  payload: locale,
});

export const actionLogout = () => {
  Cookie.remove(constants.JWT);
  Cookie.remove(constants.EXPIRED);
  Cookie.remove(constants.Roles.ROLE_USER);
  return {
    type: actionTypes.SIGN_OUT,
  };
};
