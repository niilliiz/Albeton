import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../../../../store/cart/cart_action";
import { selectCartItems } from "../../../../store/cart/cart_selector";
import styles from "./cart_item_style.module.scss";

const CartItem = ({ product }) => {
  const { title, description, price, discounted_price, isFree, id } = product;
  const onSale = discounted_price !== null;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={styles.cart_item}>
      <div className={`${styles.info}`}>
        <h2 className="h3">{title}</h2>
        <p className="h4">
          {description.substring(0, 120)}
          {description.length > 120 ? "..." : ""}
        </p>
      </div>
      <div className={`${styles["price--wrapper"]}`}>
        <div
          className={`h3 ${styles.price}  ${styles.row}  fw--700`}
          style={{ display: isFree ? "none" : "flex" }}
        >
          <span className={onSale ? styles["price--discounted"] : ""}>
            EUR {price}
          </span>
          {discounted_price && (
            <span className="clr--secondary">EUR {discounted_price}</span>
          )}
        </div>
        <button
          className="clr--primary h4 fw--700"
          onClick={() => dispatch(removeItemsFromCart(cartItems, id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
