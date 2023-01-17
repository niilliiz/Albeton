import React from "react";

import Link from "../link/link";

import styles from "./cell_style.module.scss";
const Cell = ({
  cellName = "",
  cellClassName = "",
  title = "",
  subTitle = "",
  linkClassName = "",
  ...otherProps
}) => {
  return (
    <div className={`${styles.cell} ${cellClassName}`} data-cell={cellName}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>

      <Link className={linkClassName} {...otherProps} />
    </div>
  );
};
export default Cell;
