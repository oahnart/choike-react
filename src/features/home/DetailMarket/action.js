import api from "../../../utils/helpers/api";
import * as actionTypes from "./actionTypes";

//api
const getDetailMarkets = (id) => {
  return api({
    method: "get",
    url: `/api/v1/market/${id}`,
  });
};

export const actionGetDetailMarkets = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCHING_DETAIL_MARKET,
    });

    const { data } = await getDetailMarkets(id);

    dispatch({
      type: actionTypes.FETCHING_DETAIL_MARKET_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCHING_DETAIL_MARKET_ERROR,
    });
  }
};
