import React from "react";

import Link from "../link/link";

import styles from "./cell_style.module.scss";
const Cell = ({
  cellName = "",
  cellClassName = "",
  title = "",
  subTitle = "",
  linkClassName = "h4 fw--700",
  ...otherProps
}) => {
  return (
    <div className={`${styles.cell} ${cellClassName}`} data-cell={cellName}>
      <p className="h2">{title}</p>
      <p className="h4">{subTitle}</p>

      <Link className={linkClassName} {...otherProps} />
    </div>
  );
};
export default Cell;
