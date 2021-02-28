import api from "../../utils/helpers/api";
import * as actionTypes from "./actionTypes";

//api
const getArena = (params) => {
  return api({
    method: "get",
    url: "/api/v1/arena",
    params,
  });
};

export const actionGetArenas = (params) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCHING_ARENA,
    });
    const { data } = await getArena(params);
    dispatch({
      type: actionTypes.FETCHING_ARENA_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCHING_ARENA_ERROR,
    });
  }
};
