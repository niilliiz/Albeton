/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useMemo, useContext } from "react";
import { userSingOut } from "../../utils/firebase";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CaretDown } from "phosphor-react";
import { UserContext } from "../../contexts/user_context";

import NavLinks from "../../data/nav_data";
import Logo from "../../components/logo/logo";
import DisableScroll from "../../components/UI/disable_scroll";
import Toast from "../../components/toast/toast";
import CartIcon from "../../components/cart_icon/cart_icon";

import styles from "./header_style.module.scss";

const Header = () => {
  const headerRef = useRef(null);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(() => window.scrollY);
  const [toast, setToast] = useState({});

  const [secondaryNavLinks, setSecondaryNavLinks] = useState(null);

  const { currentUser } = useContext(UserContext);

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

  const handleSignOut = async () => {
    try {
      await userSingOut();
      setToast({
        message: "Hope to see you again",
        type: "success",
      });
    } catch (error) {
      console.dir("sign out error: " + error);
      setToast({
        message: "Something went wrong!! :(",
        type: "error",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEffect);

    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, [lastScrollTop]);

  console.log(isOpen);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isOpen ? styles["header--bg"] : ""}`}
    >
      <Toast message={toast.message} type={toast.type} />
      <DisableScroll isHidden={isOpen} />
      {/* ---------------PRIMARY NAVBAR-------------- */}
      <div
        className={`${styles.primary} ${
          secondaryNavLinks ? styles["primary--border"] : ""
        }`}
      >
        <Logo onClick={() => setIsOpen(false)} className={styles.logo} />

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
                  onClick={() => setIsOpen(false)}
                  to={nav.path}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.primary__auth}>
            {currentUser ? (
              <span
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
              >
                Sign out
              </span>
            ) : (
              <Link onClick={() => setIsOpen(!isOpen)} to="/auth">
                Login or Register
              </Link>
            )}

            {currentUser && <CartIcon onClick={() => setIsOpen(false)} />}
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
