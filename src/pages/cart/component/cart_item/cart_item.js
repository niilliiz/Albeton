import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/cart_context";
import styles from "./cart_item_style.module.scss";
const CartItem = ({ product }) => {
  const { title, description, price, discounted_price, isFree, id } = product;
  const onSale = discounted_price !== null;

  const { removeItemsFromCart } = useContext(CartContext);

  return (
    <div className={styles.cart_item}>
      <div className={`${styles.info}`}>
        <span className={`${styles.h2} ${styles["fw--700"]}`}>{title}</span>
        <p className={styles.h3}>
          {description.substring(0, 100)}
          {description.length > 100 ? "..." : ""}
        </p>
      </div>
      <div className={`${styles.price}`}>
        <div
          className={`${styles.price} ${styles.h2} ${styles.row}  ${styles["fw--700"]}`}
          style={{ display: isFree ? "none" : "flex" }}
        >
          <span className={onSale ? styles["price--discounted"] : ""}>
            EUR {price}
          </span>
          {discounted_price && (
            <span className={` ${styles.secondary}`}>
              EUR {discounted_price}
            </span>
          )}
        </div>
        <button
          className={`${styles.primary} ${styles.h3} ${styles["fw--700"]}`}
          onClick={() => removeItemsFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
