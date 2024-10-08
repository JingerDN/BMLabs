import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducer";
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunkMiddleware)
);
export default store;
