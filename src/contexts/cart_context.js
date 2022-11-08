import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const value = { cartItems, setCartItems };

  console.log(cartItems);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/**
 * 1- title(${name} by ${by})
 * 2-descriptio
 * 3-price
 * 4-discounted_pirce
 * 5-id
 */
