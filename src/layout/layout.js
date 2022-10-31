import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
