/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cell from "../../components/cell/cell";
import Link from "../../components/link/link";

import PaymentLogos from "../../components/payment_logo/payment_logo";

import styles from "./shop_style.module.scss";

const Shop = () => {
  return (
    <main className={styles.shop}>
      <Cell
        hasLink
        title="Live"
        weight="bold"
        underline={true}
        content="Buy now"
        cellClassName={`${styles.card} ${styles.live}`}
        subTitle="Fast, fluid and flexible software for music creation and performance."
      />
      <Cell
        hasLink
        title="Push"
        weight="bold"
        underline={true}
        content="Buy now"
        cellClassName={`${styles.card} ${styles.push}`}
        subTitle="Powered by live, push puts all the fundamental elements of music-making at your fingertips."
      />
      <Cell
        hasLink
        weight="bold"
        content="Learn more"
        linkClassName="h4 clr--primary fw--700"
        cellClassName={`${styles.card} ${styles.student}`}
        title="Students and teachers - save up to 40% with out education offers"
      />
      <Cell
        hasLink
        weight="bold"
        content="Learn more"
        title="Max for Live"
        cellClassName={`${styles.card} ${styles["max-for-live"]}`}
        subTitle="Discover new instruments, effects and customizations for Live"
        linkClassName="h4 clr--primary fw--700"
      >
        <p className="h4 fw--700">EUR 149</p>
        <button className={styles.card__button}>Buy now</button>
        <p className="h4 fw--700">EUR 1479</p>
        <button className={styles.card__button}>Buy now</button>
        <a href="#" className="h5 text--underline clr--neutral">
          What is a crossgrade?
        </a>
      </Cell>

      <Cell
        weight="bold"
        title="Making Music"
        cellClassName={`${styles.card} ${styles["making-music"]}`}
        subTitle="74 Creative Strategies for Electronic Music Producers. A book by
          Dennis DeSanits."
      >
        <p className="h4">
          Download for free in the following formats:
          <span className="clr--primary">
            <a href="#">.pdf</a>,<a href="#">.mobi (for Kindle)</a>,
            <a href="#">.epub (for all devices)</a>
          </span>
        </p>
        <Link
          className={`clr--primary h4`}
          content="Read chapters from the book"
        />
        <p className="h4 fw--700">EUR 25</p>
        <button className={styles.card__button}>Buy now</button>
        <span className="h5 fw--700">
          Also available on{" "}
          <a href="#" className="clr--primary">
            Amazon Kindle{" "}
          </a>
          and
          <a href="#" className="clr--primary">
            {" "}
            Apple Books
          </a>
        </span>
        <span className="h5 clr--neutral">
          Published b Albeton, 340 pages, hardcover
        </span>
      </Cell>
      <Cell
        hasLink
        weight="bold"
        title="Packs"
        content="Browse Packs"
        linkClassName="h4 clr--primary"
        cellClassName={`${styles.card} ${styles.packs}`}
        subTitle="Expand your studio with sounds, tools and instruments for Live"
      />
      <Cell
        hasLink
        weight="bold"
        title="Merchandise"
        content="Browse Merchandise"
        linkClassName="h4 clr--primary"
        cellClassName={`${styles.card} ${styles.merchandise}`}
        subTitle="Albeton apparel, hardware accessories more."
      />
      <Cell
        hasLink
        weight="bold"
        content="Learn more"
        title="Payment Method"
        linkClassName="clr--primary h4 display--inline"
        cellClassName={`${styles.card} ${styles["payment-methods"]}`}
        subTitle="We accept payments via Credit Card, PayPal, iDEAL, Google Pay."
      >
        <div className={styles["payment--wrapper"]}>
          <PaymentLogos />
        </div>
      </Cell>
      <Cell
        title="Secure Shopping"
        cellClassName={`${styles.card} ${styles.security}`}
        subTitle="Shopping at the Albeton webshop is safe: Your customer data is
          transferred using a secure connections."
      />
      <Cell
        hasLink
        weight="bold"
        title="Questions"
        content="Ask us a question"
        linkClassName="clr--primary h4"
        cellClassName={`${styles.card} ${styles.question}`}
        subTitle="Don't hesitate to get in touch with us if you have any questions
          before you buy Live or Push"
      />
    </main>
  );
};
export default Shop;
