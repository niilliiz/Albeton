import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";

import "./layout.scss";
function Layout() {
  return (
    <div className="layout">
      <Header />
      {/* <Home /> */}
      <Shop />
      <Footer />
    </div>
  );
}

export default Layout;
