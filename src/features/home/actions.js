import api from "../../utils/helpers/api";
import * as actionsType from "./actionTypes";
// api
const getMarkets = (params) => {
  return api({
    method: "get",
    url: "/api/v1/market",
    params,
  });
};
export const actionGetMarkets = (params) => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.FETCHING_MARKET,
    });
    const { data } = await getMarkets(params);
    dispatch({
      type: actionsType.FETCHING_MARKET_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionsType.FETCHING_MARKET_ERROR,
    });
  }
};
