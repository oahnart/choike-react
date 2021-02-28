import produce from "immer";

import * as actionTypes from "./actionTypes";

const initialState = {
  detailMarket: [],
  isFetching: false,
};

const detailMarket = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
      case actionTypes.FETCHING_DETAIL_MARKET:
        newState.isFetching = true;
        break;
      case actionTypes.FETCHING_DETAIL_MARKET_SUCCESS:
        newState.detailMarket = action.payload;
        newState.isFetching = false;
        break;
      case actionTypes.FETCHING_DETAIL_MARKET_ERROR:
        newState.isFetching = false;
        break;
      default:
        newState = state;
        break;
    }
  });

export default detailMarket;
