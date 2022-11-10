import { createContext, useReducer } from "react";
import { createActionObject } from "../utils/reducer";

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemsToCart: () => null,
  removeItemsFromCart: () => null,
});

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

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      return new Error("Unhandled Cart Type");
  }
};

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const addItemsToCart = (toAddItem) => {
    const newCartItems = addCartItem(cartItems, toAddItem);

    updateCartItemsReducer(newCartItems);
  };
  const removeItemsFromCart = (toRemoveItemId) => {
    const newCartItems = removeCartItem(cartItems, toRemoveItemId);
    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.length;
    const newCartTotal = newCartItems.reduce(
      (sum, curr) => (sum += curr.priceToPay),
      0
    );

    dispatch(
      createActionObject("SET_CART_ITEMS", {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const value = {
    addItemsToCart,
    removeItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
