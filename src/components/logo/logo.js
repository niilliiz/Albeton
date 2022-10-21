import React from "react";

import styles from "./logo_style.module.scss";
const Logo = () => {
  return (
    <a href="/">
      <svg
        role="img"
        aria-labelledby="logo"
        className={styles.logo}
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="21"
        viewBox="0 0 45 21"
      >
        <title id="logo">Ableton Homepage</title>
        <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
      </svg>
    </a>
  );
};
export default Logo;
