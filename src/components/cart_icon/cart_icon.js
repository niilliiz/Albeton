import React from "react";
import { ShoppingCartSimple } from "phosphor-react";

import styles from "./cart_icon_style.module.scss";
import { Link } from "react-router-dom";
const CartIcon = ({ onClick = null }) => {
  return (
    <Link to="/cart" className={styles.cart}>
      <div className={styles.cart__responsive}>
        <ShoppingCartSimple
          className={styles["icon--small"]}
          size={24}
          onClick={onClick}
        />
        <ShoppingCartSimple size={24} className={styles["icon--large"]} />
      </div>
    </Link>
  );
};
export default CartIcon;
