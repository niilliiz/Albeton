import React, { useState } from "react";
import NavLinks from "../../nav_data/nave_data";
import { CaretDown } from "phosphor-react";
import Logo from "../../components/logo/logo";

import styles from "./header_style.module.scss";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles["header--blue"] : ""}`}
    >
      <div className={styles.primary}>
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
            {NavLinks.map((nav) => (
              <li key={`${nav.title}`}>
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* <div className={styles.header__secondary}></div> */}
    </header>
  );
};
export default Header;
