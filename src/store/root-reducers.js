import { combineReducers } from "redux";
import { userReducer } from "./user/user_reducer";
import { cartReducer } from "./cart/cart_reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
