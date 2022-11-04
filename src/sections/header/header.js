/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavLinks from "../../data/nav_data";
import { CaretDown } from "phosphor-react";
import Logo from "../../components/logo/logo";

import styles from "./header_style.module.scss";
import DisableScroll from "../../components/UI/disable_scroll";
const Header = () => {
  const headerRef = useRef(null);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(() => window.scrollY);

  const [secondaryNavLinks, setSecondaryNavLinks] = useState(null);

  useMemo(() => {
    const current = location.pathname.split("/")[1];
    const currentNav = NavLinks.find(
      (nav) => nav.title.toLowerCase() === current
    );
    if (currentNav?.links?.length > 0) {
      setSecondaryNavLinks(currentNav.links);
    } else {
      setSecondaryNavLinks(null);
    }
  }, [location]);

  const handleScrollEffect = () => {
    let currentScrollTop = window.scrollY;
    if (lastScrollTop < currentScrollTop) {
      headerRef.current.classList.add(styles["header--top"]);
    } else {
      headerRef.current.classList.remove(styles["header--top"]);
    }
    setLastScrollTop(currentScrollTop);
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
      <DisableScroll disable={isOpen} />
      {/* ---------------PRIMARY NAVBAR-------------- */}
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
            {NavLinks.map((nav) => (
              <li
                className={nav.disable ? styles.disabled : ""}
                key={`${nav.title}`}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                  }
                  onClick={() => setIsOpen(!isOpen)}
                  to={nav.path}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.primary__auth}>
            <Link onClick={() => setIsOpen(!isOpen)} to="/auth">
              Login or Register
            </Link>
          </div>
        </nav>
      </div>
      {/* ---------------SECONDARY NAVBAR IF THERE IS-------------- */}
      {secondaryNavLinks && (
        <nav className={styles.secondary}>
          <ul className={styles.list}>
            {secondaryNavLinks.map((nav) => (
              <li key={`${nav.title}`}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
