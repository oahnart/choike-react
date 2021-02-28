import Cookie from "js-cookie";
import produce from "immer";

import * as actionTypes from "../../utils/constants/actionTypes";
import * as constants from "../../utils/constants/constant";

const initialState = {
  isLoading: false,
  locale: "vi",
  role: Cookie.get(constants.USER_ROLES) || constants.Roles.ROLE_USER,
  profile: {},
};

const system = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
      case actionTypes.HIDE_LOADING:
        newState.isLoading = false;
        break;
      case actionTypes.SHOW_LOADING:
        newState.isLoading = true;
        break;

      case actionTypes.CHANGE_LANG:
        newState.locale = action.payload;
        break;

      case actionTypes.FETCHING_PROFILE:
        newState.isLoading = true;
        break;
      case actionTypes.FETCHING_PROFILE_SUCCESS:
        newState.profile = action.payload;
        newState.isLoading = false;
        break;
      case actionTypes.FETCHING_PROFILE_ERROR:
        newState.isLoading = false;
        break;
      default:
        newState = state;
        break;
    }
  });

export default system;
