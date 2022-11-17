import React, { useContext } from "react";
import { ToastContext } from "../../contexts/toast_context";
import { CheckCircle, Warning, X } from "phosphor-react";
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
  warning: {
    color: "#fbfa61",
    icon: <Warning size={24} />,
  },
};

const Toast = () => {
  const { toast } = useContext(ToastContext);
  const { message, type } = toast;
  const element = (
    <div
      className={`${styles.toast} ${type !== null ? styles.showToast : ""}`}
      style={{
        color: STYLES[type]?.color,
      }}
    >
      {STYLES[type]?.icon}
      <span> {message}</span>
    </div>
  );
  return type && message && element;
};

export default Toast;
