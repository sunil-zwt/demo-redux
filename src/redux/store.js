import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const midlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  midlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...midlewares));

export default store;
