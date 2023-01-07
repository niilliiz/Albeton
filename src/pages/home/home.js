import React from "react";
import Link from "../../components/link/link";
import styles from "./home_style.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <h1 className="xh">
        <span>Note</span>
        <span>Make new idea a habittttttttttttttt</span>
      </h1>
      <Link
        className={`${styles.link} h3`}
        content="Get the app"
        size="14"
        underline
      />
    </main>
  );
};
export default Home;
