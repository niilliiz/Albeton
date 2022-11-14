import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
const composedEnhancers = composeWithDevTools(
  compose(applyMiddleware(...middleWares))
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
