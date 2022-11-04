import React from "react";

import SignIn from "./sing-in/sign-in";
import SignUp from "./sign-up/sign-up";
import styles from "./authentication_style.module.scss";
const Authentication = () => {
  return (
    <main className={styles.auth}>
      <SignIn />
      <SignUp />
    </main>
  );
};
export default Authentication;
