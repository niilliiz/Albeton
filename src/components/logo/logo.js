import React from "react";
import { Link } from "react-router-dom";

import styles from "./logo_style.module.scss";
const Logo = ({
  className = "",
  width = "64",
  height = "50",
  onClick = null,
}) => {
  return (
    <Link to="/" className={`${styles.logo} ${className}`} onClick={onClick}>
      <svg
        role="img"
        className={styles.logo}
        width={width}
        height={height}
        viewBox="0 0 45 21"
      >
        <title id="logo">Ableton Homepage</title>
        <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
      </svg>
    </Link>
  );
};
export default Logo;
