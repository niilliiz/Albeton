import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";

import { CaretRight } from "phosphor-react";

import styles from "./link_style.module.scss";

const Link = memo(
  ({
    className = "",
    link = "#",
    content,
    size = "12",
    weight = "regular",
    underline = false,
  }) => {
    return (
      <RouterLink className={`${styles.link} ${className}`} to={link}>
        <p style={{ textDecoration: underline ? "underline" : "none" }}>
          {content}
        </p>
        <CaretRight size={size} weight={weight} />
      </RouterLink>
    );
  }
);
export default Link;
