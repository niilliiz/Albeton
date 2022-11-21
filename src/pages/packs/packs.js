import React, { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ToastContext } from "../../contexts/toast_context";

import { selectCurrentUser } from "../../store/user/user_selector";
import { addItemsToCart } from "../../store/cart/cart_action";
import { selectCartItems } from "../../store/cart/cart_selector";

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
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const { setToast } = useContext(ToastContext);

  const handleAddItemsToCart = (product) => {
    if (currentUser) {
      const isInCart = cartItems.find((item) => item.id === product.id);
      if (isInCart === undefined) {
        dispatch(
          addItemsToCart(cartItems, {
            id: product.id,
            title: `${product.name} by ${product.by}`,
            description: product.description,
            price: product.price,
            discounted_price: product.discounted_price,
            isFree: product.isFree,
            priceToPay: product.isFree
              ? 0
              : product.discounted_price || product.price,
          })
        );
        navigate("/cart");
      } else {
        setToast({
          type: "warning",
          message: "You've already chosen this item.",
        });
      }
    } else {
      navigate("/auth");
    }
  };

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
      return <span className="h5">Included in Live 11 Suits</span>;
    } else if (product.price != null) {
      return (
        <span
          className={`h4 ${
            product.discounted_price ? "text--lineThrough" : ""
          }`}
        >
          EUR {product.price}
        </span>
      );
    }
    return <span className="h4">Free</span>;
  };

  return (
    <main className={styles.packs}>
      <div className={styles.packs__banner}>
        <h1 className="xh">Plucked Strings by Cinematique Instruments</h1>
        <span className="h2">
          A collection of unique - and highly versatile - stringed
        </span>
        <Link
          className={`${styles.link} h3`}
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
              className={`h4 fw--600 ${
                option.key === filterOption ? "text--underline" : ""
              }`}
              key={option.key}
            >
              {option.key}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.packs__header}>
        <h2 className="h2">
          {filterOption} ({products.length})
        </h2>
      </div>

      <div className={styles.packs__cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles["img--wrapper"]}>
              {product.isNew && (
                <div className={`${styles.label} h5`}>New in Live 11</div>
              )}
              <img src={product.img} alt="Product" loading="lazy" />
            </div>
            <span
              className="h5"
              style={{ color: OPTION_COLOR[product.category] }}
            >
              {product.category}
            </span>
            <div>
              <span className="h4 clr--primary">{product.name}</span>
              <span className={`h5 ${styles.by}`}>
                by <span className="clr--primary">{product.by}</span>
              </span>
            </div>

            <p className={`h5 ${styles.description}`}>{product.description}</p>

            {getPrice(product)}
            {product.discounted_price ? (
              <span
                style={{ color: OPTION_COLOR[product.category] }}
                className={styles.h2}
              >
                EUR {product.discounted_price}
              </span>
            ) : null}
            {!product.isNew && (
              <button
                onClick={() => handleAddItemsToCart(product)}
                className={styles.h2}
              >
                Buy now
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
export default Packs;
