import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart_selector";

import Link from "../../components/link/link";
import PaymentLogos from "../../components/payment_logo/payment_logo";

import styles from "./cart_style.module.scss";
import CartItem from "./component/cart_item/cart_item.js";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <main className={styles.cart}>
      <div className={styles.cart__main}>
        <h1>Cart</h1>
        <div className={styles.cards}>
          {cartItems.map((item) => (
            <CartItem product={item} key={item.id} />
          ))}
        </div>
        <div className={`${styles.footer}`}>
          <div className={`${styles.footer__detail}`}>
            <div className={`${styles.row} ${styles.h2} ${styles["fw--700"]}`}>
              <span>Total</span>
              <span>EUR {cartTotal}</span>
            </div>
          </div>
          <button className={styles.button}>Proceed to Checkout</button>
        </div>
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.payment}>
          <p className={`${styles.h2} ${styles["fw--700"]}`}>
            Payments methods
          </p>
          <span className={styles.h3}>
            We accept payments via Credit Card, PayPal, iDEAL, Google Pay.
            <Link
              className={`${styles["primary"]} ${styles["display--inline"]}`}
              content="Learn more"
            />
          </span>
          <div className={styles["payment--wrapper"]}>
            <PaymentLogos />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Cart;
