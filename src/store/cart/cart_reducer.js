import { CART_ACTION_TYPE } from "./cart_type";

export const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: [...payload],
      };
    default:
      return state;
  }
};
