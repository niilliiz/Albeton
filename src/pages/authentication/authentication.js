import React from "react";

import SignIn from "./sing-in/sign-in";
import SingOut from "./sign-out/sign-out";
import styles from "./authentication_style.module.scss";
const Authentication = () => {
  return (
    <main className={styles.auth}>
      <SignIn />
      <SingOut />
    </main>
  );
};
export default Authentication;
