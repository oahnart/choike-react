import { combineReducers } from "redux";

import systemReducer from "../../features/system/reducer";
import homeReducer from "../../features/home/reducers";
import detailMarketReducer from "../../features/home/DetailMarket/reducers";
import arenaReducer from "../../features/arena/reducer";

const rootReducer = combineReducers({
  systemReducer,
  homeReducer,
  detailMarketReducer,
  arenaReducer,
});

export default rootReducer;
