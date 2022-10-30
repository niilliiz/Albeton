import { NhostClient, NhostReactProvider } from "@nhost/react";
// import { NhostApolloProvider } from "@nhost/react-apollo";

import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";
import Packs from "../pages/packs/packs";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import "./layout.scss";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

function Layout() {
  return (
    <NhostReactProvider nhost={nhost}>
      {/* <NhostApolloProvider nhost={nhost}> */}
      <div className="layout">
        <Header />
        {/* <Home /> */}
        {/* <Shop /> */}
        <Packs />
        <Footer />
      </div>
      {/* </NhostApolloProvider> */}
    </NhostReactProvider>
  );
}

export default Layout;
