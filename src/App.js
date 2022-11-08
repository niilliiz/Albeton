import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { UserProvider } from "./contexts/user_context";
import { CartProvider } from "./contexts/cart_context";

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
  return (
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
