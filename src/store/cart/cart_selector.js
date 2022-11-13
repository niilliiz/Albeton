// *this is another way to prevent component from rerendering if there is no change in its redux-based state : RESELECT

import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems?.length
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems?.reduce((sum, curr) => (sum += curr.priceToPay), 0)
);
