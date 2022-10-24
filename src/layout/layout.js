import Home from "../pages/home/home";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";

import "./layout.scss";
function Layout() {
  return (
    <div className="layout">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
