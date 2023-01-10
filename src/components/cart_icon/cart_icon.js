import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart_selector";

import styles from "./cart_icon_style.module.scss";
const CartIcon = ({ onClick }) => {
  const cartCount = useSelector(selectCartCount);
  return (
    <Link to="/cart" className={styles.cartIcon}>
      <span className={styles.cart} onClick={onClick}>
        <span>Cart</span>
        {cartCount > 0 && (
          <span className={styles.cart__count}>{cartCount}</span>
        )}
      </span>
    </Link>
  );
};
export default CartIcon;
