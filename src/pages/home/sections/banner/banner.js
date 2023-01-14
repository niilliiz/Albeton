import React from "react";
import Cell from "../../../../components/cell/cell";
import styles from "./banner_style.module.scss";
/**
 * left img: https://ableton-production.imgix.net/uploads/homepage-teasers/392_Year_RoundUp3_xdKVXy1.jpg?auto=format&fit=crop&fm=jpg&h=535&ixjsv=1.1.3&w=803
 * middle img: https://ableton-production.imgix.net/uploads/homepage-teasers/392_Year_RoundUp5_KtMYBl8.jpg?auto=format&fit=crop&fm=jpg&h=306&ixjsv=1.1.3&w=459
 * right img: https://ableton-production.imgix.net/uploads/homepage-teasers/392_Year_RoundUp4_I3ynQcZ.jpg?auto=format&fit=crop&fm=jpg&h=306&ixjsv=1.1.3&w=459
 */

const BannerSection = (props) => {
  return (
    <section role="banner" className={styles.banner}>
      <Cell
        cellClassName={styles.cell__left}
        weight="bold"
        underline={true}
        content="Checkout the roundup"
        title="A Look at Eight Standout Features and Video from 2022"
      />
      <Cell
        cellClassName={styles.cell__middle}
        weight="bold"
        underline={true}
        content="Learn his creative process"
        title='Aril Brikha: Remaking "Groove La Chord" with Live and Note'
      />
      <Cell
        cellClassName={styles.cell__right}
        weight="bold"
        underline={true}
        content="Watch the video"
        title="Made in Ableton Live: Ori Moto"
      />
    </section>
  );
};
export default BannerSection;
