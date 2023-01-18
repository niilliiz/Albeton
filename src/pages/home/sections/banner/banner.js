import React from "react";
import Cell from "../../../../components/cell/cell";
import styles from "./banner_style.module.scss";

const BannerSection = (props) => {
  return (
    <section role="banner" className={styles.banner}>
      <Cell
        hasLink
        weight="bold"
        underline={true}
        content="Checkout the roundup"
        cellClassName={styles.cell__left}
        title="A Look at Eight Standout Features and Video from 2022"
      />
      <Cell
        hasLink
        weight="bold"
        underline={true}
        content="Learn his creative process"
        cellClassName={styles.cell__middle}
        title='Aril Brikha: Remaking "Groove La Chord" with Live and Note'
      />
      <Cell
        hasLink
        weight="bold"
        underline={true}
        content="Watch the video"
        cellClassName={styles.cell__right}
        title="Made in Ableton Live: Ori Moto"
      />
    </section>
  );
};
export default BannerSection;
