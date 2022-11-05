/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";

import Input from "../component/input/input";
import {
  createWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import Toast from "../../../components/toast/toast";

import styles from "./sign-up_style.module.scss";
import { useMemo } from "react";

const FIELD = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const [field, setField] = useState(FIELD);
  const [toast, setToast] = useState({});

  const { email, password, confirm_password, name } = field;

  const [errors, setErrors] = useState({});

  useMemo(() => {
    if (password !== confirm_password) {
      setErrors({ ...errors, notEqualPassword: "Password is not the same" });
    } else {
      setErrors({ ...errors, notEqualPassword: null });
    }
  }, [confirm_password]);

  useMemo(() => {
    if (password.length > 0 && password.length < 6) {
      setErrors({
        ...errors,
        weakPass: "Weak password. it must be at least 6 characters",
      });
    } else {
      setErrors({ ...errors, weakPass: null });
    }
  }, [password]);

  const resetField = () => {
    setField(FIELD);
  };

  const nativeRegister = async (e) => {
    e.preventDefault();

    const errors = {};
    if (password !== confirm_password) return;

    try {
      const { user } = await createWithEmailAndPass(email, password);
      await createUserDocumentFromAuth(user, {
        displayName: name,
      });
      setToast({
        type: "success",
        message: "You're signed up successfully :)",
      });
      resetField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        errors.isUsed = "Email has already been registered";
      }
      if (error.code === "auth/weak-password") {
        errors.weakPass = "Password should be at least 6 characters";
      } else {
        setToast({
          type: "error",
          message: "Something went wrong :(",
        });
      }

      setErrors(errors);
    }
  };

  return (
    <section className={styles.register}>
      <Toast message={toast.message} type={toast.type} />

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
          helperText={errors.isUsed}
          labelContent="Email *"
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />
        <Input
          value={password}
          name="password"
          type="password"
          helperText={errors.weakPass}
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
          helperText={errors.notEqualPassword}
        />
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </form>
    </section>
  );
};
export default SignUp;
