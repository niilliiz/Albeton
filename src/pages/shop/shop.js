import React from "react";
import Link from "../../components/link/link";

import PaymentLogos from "../../components/payment_logo/payment_logo";

import styles from "./shop_style.module.scss";

const Shop = () => {
  return (
    <main className={styles.shop}>
      <div className={styles.card} data-card="live">
        <p className="h1">Live</p>
        <p className="h4">
          Fast, fluid and flexible software for music creation and performance.
        </p>
        <Link
          className="h4 fw--700"
          weight="bold"
          content="Buy now"
          underline
        />
      </div>
      <div className={styles.card} data-card="push">
        <p className="h1">Push</p>
        <p className="h4">
          Powered by live, push puts all the fundamental elements of
          music-making at your fingertips
        </p>
        <Link
          className="h4 fw--700"
          weight="bold"
          content="Buy now"
          underline
        />
      </div>
      <div data-card="student" className={styles.card}>
        <p className="h2">
          Students and teachers - save up to 40% with out education offers
        </p>
        <Link className={`h4 clr--primary fw--700`} content="Learn more" />
      </div>
      <div className={styles.card} data-card="max-for-live">
        <p className="h1">Max for Live</p>
        <p className="h4">
          Discover new instruments, effects and customizations for Live
        </p>
        <Link
          className={`h4 clr--primary fw--700`}
          weight="bold"
          content="Learn more"
        />
        <p className="h4 fw--700">EUR 149</p>
        <button className={styles.card__button}>Buy now</button>
        <p className="h4 fw--700">EUR 1479</p>
        <button className={styles.card__button}>Buy now</button>
        <span className="h5 text--underline clr--neutral">
          What is a crossgrade?
        </span>
      </div>
      <div className={styles.card} data-card="making-music">
        <p className="h1">Making Music</p>
        <p className="h4">
          74 Creative Strategies for Electronic Music Producers. A book by
          Dennis DeSanits.
        </p>
        <p className="h4">
          Download for free in the following formats:
          <span className="clr--primary">
            .pdf, .mobi (for Kindle), .epub (for all devices)
          </span>
        </p>
        <Link
          className={`clr--primary h4`}
          content="Read chapters from the book"
        />
        <p className="h4 fw--700">EUR 25</p>
        <button className={styles.card__button}>Buy now</button>
        <span className="h5 fw--700">
          Also available on <span className="clr--primary">Amazon Kindle </span>{" "}
          and
          <span className="clr--primary"> Apple Books</span>
        </span>
        <span className="h5 clr--neutral">
          Published b Albeton, 340 pages, hardcover
        </span>
      </div>
      <div className={styles.card} data-card="packs">
        <p className="h1">Packs</p>
        <p className="h4">
          Expand your studio with sounds, tools and instruments for Live
        </p>
        <Link className="h4 clr--primary" content="Browse Packs" />
      </div>
      <div className={styles.card} data-card="merchandise">
        <p className="h1">Merchandise</p>
        <p className="h4">Albeton apparel, hardware accessories more.</p>
        <Link className="h4 clr--primary" content="Browse Merchandise" />
      </div>
      <div className={styles.card} data-card="payment-methods">
        <p className="h1">Payments methods</p>
        <span className="h4">
          We accept payments via Credit Card, PayPal, iDEAL, Google Pay.
          <Link
            className="clr--primary h4 display--inline"
            content="Learn more"
          />
        </span>
        <div className={styles["payment--wrapper"]}>
          <PaymentLogos />
        </div>
      </div>
      <div className={styles.card} data-card="security">
        <p className="h1">Secure shopping</p>
        <p className="h4">
          Shopping at the Albeton webshop is safe: Your customer data is
          transferred using a secure connections
        </p>
      </div>
      <div data-card="question" className={styles.card}>
        <p className="h1">Questions?</p>
        <p className="h4">
          Don't hesitate to get in touch with us if you have any questions
          before you buy Live or Push
        </p>
        <Link className={`clr--primary h4`} content="Ask us a question" />
      </div>
    </main>
  );
};
export default Shop;
