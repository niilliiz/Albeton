/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";

import Input from "../component/input/input";
import {
  createWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";

import { ToastContext } from "../../../contexts/toast_context";
import styles from "./sign-up_style.module.scss";

const FIELD = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const [field, setField] = useState(FIELD);

  const { email, password, confirm_password, name } = field;

  const [errors, setErrors] = useState({});

  const { setToast } = useContext(ToastContext);

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
        message: "congrats! You registered successfully! :)",
      });
      resetField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        errors.isUsed = "Email has already been registered";
        setToast({
          type: "error",
          message: "Email has already been registered",
        });
      } else if (error.code === "auth/weak-password") {
        errors.weakPass = "Password should be at least 6 characters";
      } else {
        console.dir("sign up error: " + error);

        setToast({
          type: "error",
          message: "Something went wrong :(",
        });
      }

      setErrors(errors);
    }
  };

  useEffect(() => {
    if (password !== confirm_password) {
      setErrors({
        ...errors,
        notEqualPassword: "Passwords don't match. Try again!",
      });
    } else {
      setErrors({ ...errors, notEqualPassword: null });
    }
  }, [confirm_password]);

  useEffect(() => {
    if (password.length > 0 && password.length < 6) {
      setErrors({
        ...errors,
        weakPass: "Weak password. It must contain at least 6 characters.",
      });
    } else {
      setErrors({ ...errors, weakPass: null });
    }
  }, [password]);

  return (
    <section className={styles.register}>
      <h1>Sing Up</h1>
      <strong>New Customer? Please create an account.</strong>
      <p>
        Your account lets you authorize and download Live plus your included
        library content.
      </p>
      <form action="submit" onSubmit={nativeRegister}>
        <Input
          value={name}
          required
          name="name"
          placeholder="Your name"
          labelContent="Name *"
          onChange={(e) => setField({ ...field, name: e.target.value })}
          helperText="So that we know what to call you if we email you"
          helperTextClassName="clr--cyan"
        />
        <Input
          value={email}
          name="signUp_email"
          type="email"
          required
          placeholder="Email"
          helperText={errors.isUsed}
          labelContent="Email *"
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />
        <Input
          value={password}
          name="signUp_password"
          type="password"
          required
          helperText={errors.weakPass}
          placeholder="Password"
          labelContent="Password *"
          onChange={(e) => setField({ ...field, password: e.target.value })}
        />
        <Input
          value={confirm_password}
          name="confirm_password"
          type="password"
          required
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
