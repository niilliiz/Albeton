import React, { useState, useMemo } from "react";
import Products from "../../data/products_data";
import Link from "../../components/link/link";

import styles from "./packs_style.module.scss";

const FILTER_OPTIONS = [
  { key: "All" },
  { key: "Sound" },
  { key: "Max for Live" },
  { key: "Software Instruments" },
  { key: "Free" },
];

const OPTION_COLOR = {
  Sound: "#00ffaf",
  "Max for Live": "#ff764d",
  "Software Instruments": "#da77f2",
};

const Packs = () => {
  const [filterOption, setFilterOption] = useState("All");

  const products = useMemo(() => {
    let filtered = null;
    if (filterOption === "All") {
      filtered = [...Products];
    } else if (filterOption === "Free") {
      filtered = Products.filter((product) => product.isFree === true);
    } else {
      filtered = Products.filter(
        (product) => product.category === filterOption
      );
    }
    return filtered;
  }, [filterOption]);

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
        <select name="filter" onChange={(e) => setFilterOption(e.target.value)}>
          {FILTER_OPTIONS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.key}
            </option>
          ))}
        </select>

        <ul>
          {FILTER_OPTIONS.map((option) => (
            <li
              onClick={() => setFilterOption(option.key)}
              className={`${styles.h2} ${
                option.key === filterOption ? styles.underline : ""
              }`}
              key={option.key}
            >
              {option.key}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.packs__header}>
        <h2>
          {filterOption} ({products.length})
        </h2>
      </div>

      <div className={styles.packs__cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {product.isNew && (
              <div className={`${styles.label} ${styles.h3}`}>
                New in Live 11
              </div>
            )}
            <img src={`../../packs/images/${product.img}.jpg`} alt="Product" />
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

            {getPrice(product)}
            {product.discounted_price ? (
              <span
                style={{ color: OPTION_COLOR[product.category] }}
                className={styles.h2}
              >
                EUR {product.discounted_price}
              </span>
            ) : null}
            {!product.isNew && <button className={styles.h2}>Buy now</button>}
          </div>
        ))}
      </div>
    </main>
  );
};
export default Packs;
