import React from "react";
import Cell from "../../../../components/cell/cell";
import styles from "./banner_style.module.scss";

const BannerSection = (props) => {
  return (
    <section role="banner" className={styles.banner}>
      <Cell
        cellClassName={styles.cell__left}
        weight="bold"
        underline={true}
        content="Checkout the roundup"
        haveLink
        title="A Look at Eight Standout Features and Video from 2022"
      />
      <Cell
        cellClassName={styles.cell__middle}
        weight="bold"
        underline={true}
        content="Learn his creative process"
        haveLink
        title='Aril Brikha: Remaking "Groove La Chord" with Live and Note'
      />
      <Cell
        cellClassName={styles.cell__right}
        weight="bold"
        underline={true}
        content="Watch the video"
        haveLink
        title="Made in Ableton Live: Ori Moto"
      />
    </section>
  );
};
export default BannerSection;
