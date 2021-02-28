import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./monitorReducer";
import loggerMiddleware from "./logger";
import rootReducer from "./rootReducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  const composeEnhancersDevtool =
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "MyApp",
          actionsBlacklist: ["REDUX_STORAGE_SAVE"],
        })
      : compose;

  const composedEnhancers = composeEnhancersDevtool(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
