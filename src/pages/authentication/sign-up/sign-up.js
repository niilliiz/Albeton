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

  const handlePasswordChecking = (e) => {
    const { tooShort } = e.target.validity;
    if (tooShort) {
      setErrors({
        ...errors,
        weakPass: "Weak password. It must contain at least 6 characters.",
      });
    } else {
      setErrors({ ...errors, weakPass: null });
    }

    setField({ ...field, password: e.target.value });
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
          required
          name="name"
          value={name}
          autoComplete="name"
          labelContent="Name *"
          placeholder="Your name"
          helperTextClassName="clr--cyan"
          helperText="So that we know what to call you if we email you"
          onChange={(e) => setField({ ...field, name: e.target.value })}
        />
        <Input
          required
          type="email"
          value={email}
          placeholder="Email"
          name="signUp_email"
          autoComplete="email"
          aria_live="assertive"
          labelContent="Email *"
          helperText={errors.isUsed}
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />
        <Input
          required
          minLength={6}
          type="password"
          value={password}
          aria_live="assertive"
          placeholder="Password"
          name="signUp_password"
          labelContent="Password *"
          autocomplete="new-password"
          helperText={errors.weakPass}
          onChange={handlePasswordChecking}
        />
        <Input
          required
          type="password"
          autoComplete="off"
          aria_live="assertive"
          name="confirm_password"
          value={confirm_password}
          labelContent="Confirm password *"
          placeholder="Confirm the password"
          helperText={errors.notEqualPassword}
          onChange={(e) =>
            setField({ ...field, confirm_password: e.target.value })
          }
        />
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </form>
    </section>
  );
};
export default SignUp;
