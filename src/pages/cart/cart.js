import React from "react";
import Link from "../../components/link/link";
import PaymentLogos from "../../components/payment_logo/payment_logo";

import styles from "./cart_style.module.scss";
const Cart = () => {
  return (
    <main className={styles.cart}>
      <div className={styles.cart__main}>
        <h1>Cart</h1>
        <div className={styles.cards}>
          <div className={`${styles.card}`}>
            <div className={`${styles.card__info}`}>
              <span className={`${styles.h2} ${styles["fw--700"]}`}>
                Making Music. 74 Creative Strategies for Electronic Music
                Producers
              </span>
              <p className={styles.h3}>
                A book of solutions to common roadblocks in the music production
                process.
              </p>
            </div>
            <div className={`${styles.card__price}`}>
              <div
                className={`${styles.price} ${styles.h2} ${styles.row}  ${styles["fw--700"]}`}
              >
                <span>EUR 599</span>
                <span
                  className={`${styles["price--discounted"]} ${styles.secondary}`}
                >
                  EUR 499
                </span>
              </div>
              <button
                className={`${styles.primary} ${styles.h3} ${styles["fw--700"]}`}
              >
                Remove
              </button>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <div className={`${styles.card__info}`}>
              <span className={`${styles.h2} ${styles["fw--700"]}`}>
                Making Music. 74 Creative Strategies for Electronic Music
                Producers
              </span>
              <p className={styles.h3}>
                A book of solutions to common roadblocks in the music production
                process.
              </p>
            </div>
            <div className={`${styles.card__price}`}>
              <div
                className={`${styles.price} ${styles.h2} ${styles.row}  ${styles["fw--700"]}`}
              >
                <span>EUR 599</span>
                <span
                  className={`${styles["price--discounted"]} ${styles.secondary}`}
                >
                  EUR 499
                </span>
              </div>
              <button
                className={`${styles.primary} ${styles.h3} ${styles["fw--700"]}`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.footer}`}>
          <div className={`${styles.footer__detail}`}>
            <div className={`${styles.row} ${styles.h2} ${styles["fw--700"]}`}>
              <span>Total</span>
              <span>EUR 1198.00</span>
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
