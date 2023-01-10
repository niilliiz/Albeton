/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useContext } from "react";
import { userSingOut } from "../../utils/firebase";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CaretDown } from "phosphor-react";
import { useSelector } from "react-redux";

import { ToastContext } from "../../contexts/toast_context";
import { useCallback } from "react";
import CartIcon from "../../components/cart_icon/cart_icon";

import NavLinks from "../../data/nav_data";
import Logo from "../../components/logo/logo";
import DisableScroll from "../../components/UI/disable_scroll";
import { selectCurrentUser } from "../../store/user/user_selector";
import { selectCartCount } from "../../store/cart/cart_selector";

import styles from "./header_style.module.scss";

const Header = () => {
  const headerRef = useRef(null);
  const location = useLocation();

  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);

  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(() => window.scrollY);

  const [secondaryNavLinks, setSecondaryNavLinks] = useState(null);

  const { setToast } = useContext(ToastContext);

  const handleScrollEffect = useCallback(() => {
    let currentScrollTop = window.scrollY;
    if (lastScrollTop < currentScrollTop) {
      headerRef.current.classList.add(styles["header--top"]);
    } else {
      headerRef.current.classList.remove(styles["header--top"]);
    }
    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

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

  useEffect(() => {
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

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isOpen ? styles["header--bg"] : ""}`}
    >
      <DisableScroll isHidden={isOpen} />
      {/* --------------- PRIMARY NAVBAR -------------- */}
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

            {currentUser && cartCount > 0 && (
              <CartIcon onClick={() => setIsOpen(false)} />
            )}
          </div>
        </nav>
      </div>
      {/* --------------- SECONDARY NAVBAR IF THERE IS ONE -------------- */}
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
