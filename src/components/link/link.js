import React from "react";
import { CaretRight } from "phosphor-react";

import styles from "./link_style.module.scss";

const Link = ({ className = "", link = "#", content, size = "12" }) => {
  return (
    <a className={`${styles.link} ${className}`} href={link}>
      <p>{content}</p>
      <CaretRight size={size} />
    </a>
  );
};
export default Link;
