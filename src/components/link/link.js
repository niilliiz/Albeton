import React from "react";
import { CaretRight } from "phosphor-react";

import styles from "./link_style.module.scss";

const Link = ({
  className = "",
  link = "#",
  content,
  size = "12",
  weight = "regular",
  underline = false,
}) => {
  return (
    <a className={`${styles.link} ${className}`} href={link}>
      <p style={{ textDecoration: underline ? "underline" : "none" }}>
        {content}
      </p>
      <CaretRight size={size} weight={weight} />
    </a>
  );
};
export default Link;
