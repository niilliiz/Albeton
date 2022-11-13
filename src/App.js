/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  onAuthStateListener,
  createUserDocumentFromAuth,
} from "./utils/firebase";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user_action";

import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Packs from "./pages/packs/packs";
import Authentication from "./pages/authentication/authentication";
import Cart from "./pages/cart/cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/packs" element={<Packs />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
