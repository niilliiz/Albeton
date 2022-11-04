import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  singInUserWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import Input from "../component/input/input";
import styles from "./sign-in_style.module.scss";

const FIELD = {
  email: "",
  password: "",
};

const SingIn = () => {
  const [field, setField] = useState(FIELD);
  // const [password, setPassword] = useState("");

  const { email, password } = field;

  const [errors, setErrors] = useState({});

  const googleLogin = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const nativeLogin = async (e) => {
    e.preventDefault();
    const errors = {};

    try {
      const response = await singInUserWithEmailAndPass(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.login}>
      <h2 className={styles.h2}>Log in</h2>
      <strong>Why do I need to log in?</strong>
      <p>
        To use any version of Live (including Live Lite or our free trial) you
        need an Ableton account. It takes less than a minute to create one, and
        even less to log in if you already have one.
      </p>
      <form action="submit" onSubmit={nativeLogin}>
        <Input
          value={email}
          name="email"
          type="email"
          placeholder="Email"
          labelContent="Email *"
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />

        <Input
          value={password}
          name="password"
          placeholder="Password"
          labelContent="Password *"
          onChange={(e) => setField({ ...field, password: e.target.value })}
        />

        <button onSubmit={nativeLogin} className={styles.button}>
          Log in
        </button>
      </form>
      <form>
        <div>
          <label className={styles.h4}>
            Or You can Login with your Google account
          </label>
          <button
            onClick={googleLogin}
            type="submit"
            className={`${styles.button} ${styles["button--google"]}`}
          >
            Google
          </button>
        </div>
      </form>
    </section>
  );
};
export default SingIn;
