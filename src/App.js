/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, lazy, Suspense } from "react";
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

import { ToastProvider } from "./contexts/toast_context";

import Layout from "./layout/layout";
import Spinner from "./components/spinner/spinner";

const Home = lazy(() => import("./pages/home/home"));
const Shop = lazy(() => import("./pages/shop/shop"));
const Packs = lazy(() => import("./pages/packs/packs"));
const Authentication = lazy(() =>
  import("./pages/authentication/authentication")
);
const Cart = lazy(() => import("./pages/cart/cart"));

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

  return (
    <Suspense fallback={<Spinner/>}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Suspense>
  );
}

export default App;
