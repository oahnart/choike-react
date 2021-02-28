import produce from "immer";
import * as actionTypes from "./actionTypes";

const initialState = {
  arena: [],
  isFetching: false,
};
const Arena = (state = initialState, action) =>
  produce(state, (newState) => {
    switch (action.type) {
      case actionTypes.FETCHING_ARENA:
        newState.isFetching = true;
        break;
      case actionTypes.FETCHING_ARENA_SUCCESS:
        newState.arena = action.payload;
        newState.isFetching = false;
        break;
      case actionTypes.FETCHING_ARENA_ERROR:
        newState.isFetching = false;
        break;
      default:
        newState = state;
        break;
    }
  });

export default Arena;
