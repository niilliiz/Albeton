import React, { useState, useContext } from "react";

import { ToastContext } from "../../../contexts/toast_context";

import {
  signInWithGooglePopup,
  singInUserWithEmailAndPass,
} from "../../../utils/firebase";

import Input from "../component/input/input";
import styles from "./sign-in_style.module.scss";

const FIELD = {
  email: "",
  password: "",
};

const SingIn = () => {
  const [field, setField] = useState(FIELD);
  const { email, password } = field;

  const [errors, setErrors] = useState({});

  const { setToast } = useContext(ToastContext);

  const resetField = () => {
    setField(FIELD);
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGooglePopup();
      setToast({
        type: "success",
        message: "You're signed in successfully :)",
      });
    } catch (error) {
      console.dir("Sing in with google error: " + error);

      setToast({
        type: "error",
        message: "Something went wrong :(",
      });
    }
  };

  const nativeLogin = async (e) => {
    e.preventDefault();
    const errors = {};

    try {
      await singInUserWithEmailAndPass(email, password);
      setToast({
        type: "success",
        message: "welcome back! :)",
      });

      resetField();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        errors.noFound = "You should sign up first.";
        setToast({
          type: "error",
          message: "You should sign up first!",
        });
      } else if (error.code === "auth/wrong-password") {
        errors.wrongPassword = "Wrong password.";
        setToast({
          type: "error",
          message: "Wrong password!",
        });
      } else {
        console.dir("Sing in error: " + error);

        setToast({
          type: "error",
          message: "Something went wrong :(",
        });
      }

      setErrors(errors);
    }
  };

  return (
    <section className={styles.login}>
      <h1>Log in</h1>
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
          helperText={errors.noFound}
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />

        <Input
          value={password}
          name="password"
          type="password"
          placeholder="Password"
          labelContent="Password *"
          helperText={errors.wrongPassword}
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
