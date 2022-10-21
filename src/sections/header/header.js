/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import NavLinks from "../../nav_data/nave_data";
import { CaretDown } from "phosphor-react";
import Logo from "../../components/logo/logo";

import styles from "./header_style.module.scss";
const Header = () => {
  const headerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(() => window.scrollY);

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

  const handleScrollEffect = () => {
    let currentScrolTop = window.scrollY;
    if (lastScrollTop < currentScrolTop) {
      headerRef.current.classList.add(styles["header--top"]);
    } else {
      headerRef.current.classList.remove(styles["header--top"]);
    }
    setLastScrollTop(currentScrolTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEffect);
    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, [lastScrollTop]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isOpen ? styles["header--bg"] : ""}`}
    >
      <div
        className={`${styles.primary} ${
          secondaryNavLinks ? styles["primary--border"] : ""
        }`}
      >
        <Logo className={styles.logo} />
        <div
          className={styles.primary__menu}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Menu</span>
          <CaretDown
            size="1.125rem"
            weight="fill"
            className={`${isOpen ? styles.rotate : ""}`}
          />
        </div>

        <nav
          className={`${styles.primary__navigation}
          ${isOpen ? styles["navigation--shown"] : styles["navigation--hid"]}
           `}
        >
          <ul className={styles.list}>
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
          <div className={styles.primary__auth}>
            <a href="/register">Login or Register</a>
          </div>
        </nav>
      </div>
      {/* ---------------SECONDARY NAVBAR IF THERE IS-------------- */}
      {secondaryNavLinks && (
        <nav className={styles.secondary}>
          <ul className={styles.list}>
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
        </nav>
      )}
    </header>
  );
};
export default Header;

/* 
TODO: show active link based on the url
*/
