import React from "react";

import Link from "../link/link";

import styles from "./cell_style.module.scss";
const Cell = ({
  title = "",
  cellName = "",
  subTitle = "",
  hasLink = false,
  children = null,
  linkClassName = "",
  cellClassName = "",
  ...otherProps
}) => {
  return (
    <div className={`${styles.cell} ${cellClassName}`} data-cell={cellName}>
      {title && <h2 className="h1">{title}</h2>}
      {subTitle && <h3 className="h4">{subTitle}</h3>}

      {hasLink && <Link className={linkClassName} {...otherProps} />}
      {children}
    </div>
  );
};
export default Cell;
