import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// FIREBASE CONFIG---------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBRevi83p2EgZAQb0vOFfWsONNigyD6NY0",
  authDomain: "ableton-13655.firebaseapp.com",
  projectId: "ableton-13655",
  storageBucket: "ableton-13655.appspot.com",
  messagingSenderId: "29365955139",
  appId: "1:29365955139:web:eca204da41d10606e9c2f6",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// LOGIN OR SING UP WITH GOOGLE ACCOUNT-------------------------------------
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// CREATING USER DOCUMENT----------------------------------------------------
export const createUserDocumentFromAuth = async (userAuth, metaData = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...metaData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userSnapshot;
};

// CREATE USER WITH EMAIL AND PASSWORD-----------------------------
export const createWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   createUserDocumentFromAuth(user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
};

// SING IN WITH EMAIL AND PASSWORD---------------------------------------
export const singInUserWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// .then((userCredential) => {
//   // Signed in
//   const user = userCredential.user;
//   console.log(user);

//   // ...
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // ..
// });

export const db = getFirestore();
