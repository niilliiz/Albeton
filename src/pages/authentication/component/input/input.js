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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {element && element}
    </div>
  );
};
export default Input;
