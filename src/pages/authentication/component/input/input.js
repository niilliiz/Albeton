import React from "react";

import styles from "./input_style.module.scss";

const Input = ({
  className = "",
  required = false,
  value,
  onChange,
  type = "text",
  name = "",
  placeholder = "",
  labelContent = "",
  helperText = "",
  helperTextClassName = "",
}) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <label className={styles.h4} htmlFor={name}>
        {labelContent}
      </label>
      <input
        required={required}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {helperText && (
        <span className={`h6 fw--700 clr--secondary ${helperTextClassName}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};
export default Input;
