/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";

import Input from "../component/input/input";
import {
  createWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";

import styles from "./sign-out_style.module.scss";
import { useMemo } from "react";

const FIELD = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignOut = () => {
  const [field, setField] = useState(FIELD);
  const [showWarning, setShowWarning] = useState(false);
  const { email, password, confirm_password, name } = field;

  const [errors, setErrors] = useState({});

  useMemo(() => {
    if (password !== confirm_password) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [confirm_password]);

  const nativeRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) return;

    try {
      const { user } = await createWithEmailAndPass(email, password);
      await createUserDocumentFromAuth(user, {
        displayName: name,
      });
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <section className={styles.register}>
      <h2 className={styles.h2}>Sing Up</h2>
      <strong>New Customer? Please create an account.</strong>
      <p>
        Your account lets you authorize and download Live plus your included
        library content.
      </p>
      <form action="submit" onSubmit={nativeRegister}>
        <Input
          value={name}
          name="name"
          placeholder="Your name"
          labelContent="Name *"
          onChange={(e) => setField({ ...field, name: e.target.value })}
          element={
            <h4 className={`${styles.h4} ${styles.cyan}`}>
              So that we know what to call you if we email you
            </h4>
          }
        />
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
          type="password"
          placeholder="Password"
          labelContent="Password *"
          onChange={(e) => setField({ ...field, password: e.target.value })}
        />
        <Input
          value={confirm_password}
          name="confirm_password"
          type="password"
          placeholder="Confirm the password"
          labelContent="Confirm password *"
          onChange={(e) =>
            setField({ ...field, confirm_password: e.target.value })
          }
          element={
            showWarning && (
              <span className={`${styles.h4} ${styles.warning}`}>
                Password is not the same
              </span>
            )
          }
        />
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </form>
    </section>
  );
};
export default SignOut;
