import { createActionObject } from "../../utils/reducer";
import { CART_ACTION_TYPE } from "./cart_type";

const addCartItem = (cartItems, newItem) => {
  const currentItem = cartItems.find((product) => product.id === newItem.id);

  if (currentItem) {
    return [...cartItems];
  } else {
    return [...cartItems, newItem];
  }
};

const removeCartItem = (cartItems, toRemoveItemId) => {
  const toRemoveIndex = cartItems.findIndex(
    (item) => item.id === toRemoveItemId
  );
  cartItems.splice(toRemoveIndex, 1);
  return cartItems;
};

export const addItemsToCart = (cartItems, toAddItem) => {
  const newCartItems = addCartItem(cartItems, toAddItem);

  return createActionObject(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemsFromCart = (cartItems, toRemoveItemId) => {
  const newCartItems = removeCartItem(cartItems, toRemoveItemId);

  return createActionObject(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
