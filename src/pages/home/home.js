import React from "react";

import { rows } from "../../data/home_data";
import BannerSection from "./sections/banner/banner";
import Row from "./sections/row/row";

import styles from "./home_style.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <BannerSection />
      <main>
        <section className={styles.rows}>
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </section>
        {/* <section>nav</section> */}
      </main>
    </div>
  );
};
export default Home;
