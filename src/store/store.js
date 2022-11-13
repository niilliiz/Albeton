import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const middleWares = [loggerMiddleware];
const composedEnhancers = composeWithDevTools(
  compose(applyMiddleware(...middleWares))
);

export const store = createStore(rootReducer, undefined, composedEnhancers);

// this is our own redux logger + customized middleware
function loggerMiddleware(storeAPT) {
  //* the middleware itself. it's called by applyMiddleware, receives a storeAPI({dispatch,getState}). this function is called once.
  return function wrapDispatch(next) {
    //* next middleware in the pipeline. this function is also called once
    return function handleAction(action) {
      //* current action. this function will be called every time an action is dispatched
      if (!action.type) {
        return next(action);
      }

      console.log("type", action.type);
      console.log("payload", action.payload);
      console.log("currentState", store.getState());
      next(action);
      console.log("next state: ", store.getState());
    };
  };
}
