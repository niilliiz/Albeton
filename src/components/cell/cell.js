import React from "react";

import Link from "../link/link";

import styles from "./cell_style.module.scss";
const Cell = ({
  cellName = "",
  cellClassName = "",
  title = "",
  subTitle = "",
  haveLink = false,
  linkClassName = "",
  ...otherProps
}) => {
  return (
    <div className={`${styles.cell} ${cellClassName}`} data-cell={cellName}>
      {title && <h2>{title}</h2>}
      {subTitle && <h3>{subTitle}</h3>}

      {haveLink && <Link className={linkClassName} {...otherProps} />}
    </div>
  );
};
export default Cell;
