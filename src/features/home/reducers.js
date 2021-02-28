import produce from "immer";

import * as actionTypes from "./actionTypes";

const initialState = {
  market: [],
  isFetching: false,
};

const home = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
      case actionTypes.FETCHING_MARKET:
        newState.isFetching = true;
        break;
      case actionTypes.FETCHING_MARKET_SUCCESS:
        newState.market = action.payload;
        newState.isFetching = false;
        break;
      case actionTypes.FETCHING_MARKET_ERROR:
        newState.isFetching = false;
        break;
      default:
        newState = state;
        break;
    }
  });

export default home;
