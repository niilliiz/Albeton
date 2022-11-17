import { createContext, useEffect, useReducer, useState } from "react";

export const ToastContext = createContext({
  toast: {},
  setToast: () => null,
});

const INITIAL_STATE = {
  message: "",
  type: "",
};

const toastReducer = (state, action) => {
  const { type, toast } = action;

  switch (type) {
    case "add":
      return {
        ...state,
        ...toast,
      };

    case "clear":
      return {
        ...state,
        ...toast,
      };

    default:
      return new Error("Unhandled Toast Type!");
  }
};

export const ToastProvider = ({ children }) => {
  const [toast, dispatch] = useReducer(toastReducer, INITIAL_STATE);
  const [counter, setCounter] = useState(0);

  const setToast = (toast) => {
    setCounter(counter + 1);
    dispatch({ type: "add", toast });
  };

  const value = { toast, setToast };

  useEffect(() => {
    setTimeout(
      () => dispatch({ type: "clear", toast: { message: "", type: "" } }),
      5000
    );
  }, [counter]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
