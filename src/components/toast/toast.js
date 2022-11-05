import React from "react";
import { CheckCircle, X } from "phosphor-react";
import styles from "./toast_style.module.scss";

const STYLES = {
  success: {
    color: "#12b886",
    icon: <CheckCircle size={24} />,
  },
  error: {
    color: "#fa5252",
    icon: <X size={24} />,
  },
};

const Toast = ({ message = "", type = null }) => {
  const element = (
    <div
      className={`${styles.toast} ${type !== null ? styles.showToast : ""}`}
      style={{
        color: STYLES[type]?.color,
      }}
    >
      <span> {message}</span>
      {STYLES[type]?.icon}
    </div>
  );
  return type && element;
};
export default Toast;
