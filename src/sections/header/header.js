import React, { useState } from "react";
import NavLinks from "../../nav_data/nave_data";
import { CaretDown } from "phosphor-react";
import Logo from "../../components/logo/logo";

import styles from "./header_style.module.scss";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [secondaryNavLinks, setSecondaryNavLinks] = useState(null);
  const [secondaryActiveItem, setSecondaryActiveItem] = useState();
  const [primaryActiveItem, setPrimaryActiveItem] = useState(0);

  const setSecondaryNavbar = (e, title, index) => {
    e.preventDefault();
    const secondaryLinks = NavLinks.find((nav) => nav.title === title);

    setSecondaryNavLinks(
      secondaryLinks.links !== undefined ? [...secondaryLinks.links] : null
    );
    setSecondaryActiveItem(0);
    setPrimaryActiveItem(index);
    setIsOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isOpen ? styles["header--blue"] : ""}`}
    >
      <div
        className={`${styles.primary} ${
          secondaryNavLinks ? styles["primary--border"] : ""
        }`}
      >
        <Logo />
        <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
          <span>Menu</span>
          <CaretDown
            size="1.125rem"
            weight="fill"
            className={`${isOpen ? styles.rotate : ""}`}
          />
        </div>

        <nav
          className={`${styles.navigation} ${styles["navigation--small-screen"]}
          ${isOpen ? styles["navigation--shown"] : styles["navigation--hid"]}
           `}
        >
          <ul className={styles.navigation__lists}>
            {NavLinks.map((nav, index) => (
              <li
                key={`${nav.title}`}
                onClick={(e) => {
                  setSecondaryNavbar(e, nav.title, index);
                }}
              >
                <a
                  className={primaryActiveItem === index ? styles.active : ""}
                  href={nav.path}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {secondaryNavLinks && (
        <div className={styles.secondary}>
          <ul className={styles.secondary__lists}>
            {secondaryNavLinks.map((nav, index) => (
              <li
                key={`${nav.title}`}
                onClick={() => setSecondaryActiveItem(index)}
              >
                <a
                  href={nav.path}
                  className={secondaryActiveItem === index ? styles.active : ""}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;

/* 
TODO: show active link
*/
