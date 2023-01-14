import React from "react";

import styles from "./home_style.module.scss";
import BannerSection from "./sections/banner/banner";

const Home = () => {
  return (
    <main className={styles.home}>
      <BannerSection />
      <section>row *4</section>
      <section>nav</section>
    </main>
  );
};
export default Home;
