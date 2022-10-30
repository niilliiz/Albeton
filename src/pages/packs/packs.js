import React from "react";
import Products from "../../data/products_data";
import Link from "../../components/link/link";

import styles from "./packs_style.module.scss";

const FILTER_OPTIONS = [
  { key: "All", value: "all" },
  { key: "Sound", value: "sound" },
  { key: "Max for Live", value: "max-for-live" },
  { key: "Software Instruments", value: "software-instruments" },
  { key: "Free", value: "free" },
];

const OPTION_COLOR = {
  Sound: "#00ffaf",
  "Max for Live": "#ff764d",
  "Software Instruments": "#da77f2",
};

const Packs = () => {
  const getPrice = (product) => {
    if (product.isNew) {
      return <span className={styles.h3}>Included in Live 11 Suits</span>;
    } else if (product.price != null) {
      return (
        <span
          className={`${styles.h2} ${
            product.discounted_price ? styles.lineThrough : ""
          }`}
        >
          EUR {product.price}
        </span>
      );
    }
    return <span>Free</span>;
  };

  return (
    <main className={styles.packs}>
      <div className={styles.packs__banner}>
        <h1 className={styles.h1}>
          Plucked Strings by Cinematique Instruments
        </h1>
        <span className={styles.h3}>
          A collection of unique - and highly versatile - stringed
        </span>
        <Link
          className={styles.link}
          content="Learn more"
          size="14"
          underline
        />
      </div>

      <div className={styles.packs__filter}>
        <select name="filter">
          {FILTER_OPTIONS.map((option) => (
            <option value={option.value}>{option.key}</option>
          ))}
        </select>
      </div>
      <div className={styles.packs__cards}>
        {Products.map((product) => (
          <div className={styles.card}>
            <div className={styles.card__info}>
              <img
                src={`../../asset/images/${product.img}.jpg`}
                alt="Product"
              />
              <span
                className={styles.h3}
                style={{ color: OPTION_COLOR[product.category] }}
              >
                {product.category}
              </span>
              <div>
                <span className={`${styles.h2} ${styles.primary}`}>
                  {product.name}
                </span>
                <span className={`${styles.h3} ${styles.by}`}>
                  by <span className={styles.primary}>{product.by}</span>
                </span>
              </div>

              <p className={styles.h3}>{product.description}</p>
            </div>

            <div className={styles.card__footer}>
              {getPrice(product)}
              {product.discounted_price ? (
                <span
                  style={{ color: OPTION_COLOR[product.category] }}
                  className={styles.h2}
                >
                  EUR {product.discounted_price}
                </span>
              ) : null}
              <button className={styles.h2}>Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Packs;
