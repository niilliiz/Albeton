import { NhostClient, NhostReactProvider } from "@nhost/react";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { NhostApolloProvider } from "@nhost/react-apollo";

import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Packs from "./pages/packs/packs";

// const nhost = new NhostClient({
//   subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
//   region: process.env.REACT_APP_NHOST_REGION,
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/packs" element={<Packs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
