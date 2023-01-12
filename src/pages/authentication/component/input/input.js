import React from "react";

import styles from "./input_style.module.scss";

const Input = ({
  value,
  onChange,
  name = "",
  pattern = null,
  type = "text",
  className = "",
  helperText = "",
  required = false,
  minLength = null,
  maxLength = null,
  placeholder = "",
  labelContent = "",
  aria_live = "off",
  autoComplete = "",
  aria_description = "",
  helperTextClassName = "",
}) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <label className={styles.h4} htmlFor={name}>
        {labelContent}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        pattern={pattern}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={aria_description}
      />
      {helperText && (
        <span
          className={`h6 fw--700 clr--secondary ${helperTextClassName}`}
          aria-live={aria_live}
          id={aria_description}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
export default Input;
