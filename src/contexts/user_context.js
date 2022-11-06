import { createContext, useState, useEffect } from "react";
import {
  onAuthStateListener,
  createUserDocumentFromAuth,
} from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUSer: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
