import { Outlet } from "react-router-dom";
import Toast from "../components/toast/toast";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import styles from "./layout_style.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <Toast />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
