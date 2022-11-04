import React from "react";
import styles from "./input_style.module.scss";
const Input = ({
  className = "",
  required = true,
  value,
  onChange,
  type,
  name,
  placeholder,
  labelContent,
  element = null,
  helperText = "",
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
        <span className={`${styles.h4} ${styles.warning}`}>{helperText}</span>
      )}
      {element && element}
    </div>
  );
};
export default Input;
