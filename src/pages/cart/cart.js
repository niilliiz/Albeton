import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart_selector";

import Link from "../../components/link/link";
import PaymentLogos from "../../components/payment_logo/payment_logo";
import CartItem from "./component/cart_item/cart_item.js";

import styles from "./cart_style.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <main className={styles.cart}>
      <div className={styles.cart__main}>
        <h1 className="h1">Cart</h1>
        {cartItems?.length > 0 ? (
          <>
            <div className={styles.cards}>
              {cartItems.map((item) => (
                <CartItem product={item} key={item.id} />
              ))}
            </div>
            <div className={`${styles.footer}`}>
              <div className={`${styles.footer__detail}`}>
                <div className={`${styles.row} h2 fw--700`}>
                  <span>Total</span>
                  <span>EUR {cartTotal}</span>
                </div>
              </div>
              <button className={styles.button}>Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <div className="fw--700 h3 display--inline">
            <span style={{ marginInlineEnd: "0.5rem" }}>
              Your cart is empty.
            </span>
            <Link
              className="clr--primary"
              content="Start Shopping"
              link="/packs"
              weight="bold"
            />
          </div>
        )}
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.payment}>
          <h2 className="h3">Payments methods</h2>
          <span className="h4">
            We accept payments via Credit Card, PayPal, iDEAL, Google Pay.
            <Link
              className="clr--primary display--inline"
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
