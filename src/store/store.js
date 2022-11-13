import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleWares = [logger];
const composedEnhancers = composeWithDevTools(
  compose(applyMiddleware(...middleWares))
);

export const store = createStore(rootReducer, undefined, composedEnhancers);
