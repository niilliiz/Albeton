import React from "react";
import Link from "../../components/link/link";

import PaymentLogos from "../../components/payment_logo/payment_logo";

import styles from "./shop_style.module.scss";

const Shop = () => {
  return (
    <main className={styles.shop}>
      <div className={styles.card} data-card="live">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>Live</p>
        <p className={styles.card__h4}>
          Fast, fluid and flexible software for music creation and performance.
        </p>
        <Link
          className={`${styles.card__h5} ${styles["bold--700"]}`}
          weight="bold"
          content="Buy now"
          underline
        />
      </div>
      <div className={styles.card} data-card="push">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>Push</p>
        <p className={styles.card__h4}>
          Powered by live, push puts all the fundamental elements of
          music-making at your fingertips
        </p>
        <Link
          className={`${styles.card__h5} ${styles["bold--700"]}`}
          weight="bold"
          content="Buy now"
          underline
        />
      </div>
      <div data-card="student" className={styles.card}>
        <p className={styles.card__h3}>
          Students and teachers - save up to 40% with out education offers
        </p>
        <Link
          className={`${styles.card__h5} ${styles["clr--primary"]} ${styles["bold--700"]}`}
          content="Learn more"
        />
      </div>
      <div className={styles.card} data-card="max-for-live">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Max for Live
        </p>
        <p className={styles.card__h4}>
          Discover new instruments, effects and customizations for Live
        </p>
        <Link
          className={`${styles.card__h5} ${styles["clr--primary"]} ${styles["bold--700"]}`}
          weight="bold"
          content="Learn more"
        />
        <p className={styles.card__h4}>EUR 149</p>
        <button className={styles.card__button}>Buy now</button>
        <p className={styles.card__h4}>EUR 1479</p>
        <button className={styles.card__button}>Buy now</button>
        <span
          className={`${styles.card__h5} ${styles["text--underline"]} ${styles["clr--neutral"]}`}
        >
          What is a crossgrade?
        </span>
      </div>
      <div className={styles.card} data-card="making-music">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Making Music
        </p>
        <p className={styles.card__h4}>
          74 Creative Strategies for Electronic Music Producers. A book by
          Dennis DeSanits.
        </p>
        <p className={styles.card__h4}>
          Download for free in the following formats:
          <span className={styles["clr--primary"]}>
            .pdf, .mobi (for Kindle), .epub (for all devices)
          </span>
        </p>
        <Link
          className={`${styles["clr--primary"]} ${styles.card__h5} `}
          content="Read chapters from the book"
        />
        <p className={styles.card__h4}>EUR 25</p>
        <button className={styles.card__button}>Buy now</button>
        <span className={`${styles.card__h5} ${styles["bold--700"]}`}>
          Also available on{" "}
          <span className={styles["clr--primary"]}>Amazon Kindle </span> and
          <span className={styles["clr--primary"]}> Apple Books</span>
        </span>
        <span className={`${styles.card__h5} ${styles["clr--neutral"]}`}>
          Published b Albeton, 340 pages, hardcover
        </span>
      </div>
      <div className={styles.card} data-card="packs">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>Packs</p>
        <p className={styles.card__h4}>
          Expand your studio with sounds, tools and instruments for Live
        </p>
        <Link
          className={`${styles.card__h5} ${styles["clr--primary"]}`}
          content="Browse Packs"
        />
      </div>
      <div className={styles.card} data-card="merchandise">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Merchandise
        </p>
        <p className={styles.card__h4}>
          Albeton apparel, hardware accessories more.
        </p>
        <Link
          className={`${styles.card__h5} ${styles["clr--primary"]}`}
          content="Browse Merchandise"
        />
      </div>
      <div className={styles.card} data-card="payment-methods">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Payments methods
        </p>
        <span className={styles.card__h4}>
          We accept payments via Credit Card, PayPal, iDEAL, Google Pay.
          <Link
            className={`${styles["clr--primary"]} ${styles.card__h5} ${styles["display--inline"]}`}
            content="Learn more"
          />
        </span>
        <div className={styles["payment--wrapper"]}>
          <PaymentLogos />
        </div>
      </div>
      <div className={styles.card} data-card="security">
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Secure shopping
        </p>
        <p className={styles.card__h4}>
          Shopping at the Albeton webshop is safe: Your customer data is
          transferred using a secure connections
        </p>
      </div>
      <div data-card="question" className={styles.card}>
        <p className={`${styles.card__h2} ${styles["bold--700"]}`}>
          Questions?
        </p>
        <p className={styles.card__h4}>
          Don't hesitate to get in touch with us if you have any questions
          before you buy Live or Push
        </p>
        <Link
          className={`${styles["clr--primary"]} ${styles.card__h5}`}
          content="Ask us a question"
        />
      </div>
    </main>
  );
};
export default Shop;
