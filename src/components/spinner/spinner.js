import React, { memo } from "react";
import styles from "./spinner_style.module.scss";
const Spinner = memo(() => {
  return <div className={styles.loader}></div>;
});
export default Spinner;
