import React from "react";
import Link from "../../components/link/link";

import styles from "./packs_style.module.scss";
const Packs = (props) => {
  return (
    <main className={styles.packs}>
      <h1 className={styles.h1}>Plucked Strings by Cinematique Instruments</h1>
      <span className={styles.h3}>
        A collection of unique - and highly versatile - stringed
      </span>
      <Link className={styles.link} content="Learn more" size="14" underline />
    </main>
  );
};
export default Packs;
