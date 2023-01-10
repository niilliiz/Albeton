import React from "react";

import Facebook from "../../asset/images/facebook.svg";
import Twitter from "../../asset/images/twitter.svg";
import Youtube from "../../asset/images/youtube.svg";
import Instagram from "../../asset/images/instagram.svg";
import Link from "../../components/link/link";
import Logo from "../../components/logo/logo";

import styles from "./footer_style.module.scss";

const MEDIAS = [
  {
    src: Facebook,
    className: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    src: Twitter,
    className: "twitter",
    link: "https://twitter.com",
  },
  {
    src: Youtube,
    className: "youtube",
    link: "https://www.youtube.com",
  },
  {
    src: Instagram,
    className: "instagram",
    link: "https://www.instagram.com",
  },
];

const FOOTER_NAV = [
  "Contact Us",
  "Press Resources",
  "Legal Info",
  "Privacy Policy",
  "Cookie Settings",
  "Imprint",
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__header}>
        <img
          className={styles.albetonLogo}
          src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg"
          alt="Ableton Logo"
        />
      </div>
      <div className={styles.footer__main}>
        <div data-area="newsletter" className={styles.footer__main__card}>
          <span className="h4 fw--700">Sign up to our newsletter</span>
          <p className="h4">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className={styles.row}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Sign up</button>
          </div>
        </div>
        <div data-area="medias" className={styles.footer__main__card}>
          <Link className="h4" content="Register Live or Push" />
          <Link className="h4" content="About Albeton" />
          <Link className="h4" content="Jobs" />

          <div className={styles.row}>
            {MEDIAS.map((media) => (
              <img
                className={`${styles.mediaLogo} ${styles[media.className]}`}
                src={media.src}
                alt={media.className}
                key={media.className}
              />
            ))}
          </div>
        </div>
        <div data-area="education" className={styles.footer__main__card}>
          <span className="h4 fw--700">Education</span>
          <Link className="h4" content="Offers for students and teachers" />
          <Link className="h4" content="Albeton for Classroom" />
          <Link
            className="h4"
            content="Albeton for Colleges and Universities"
          />
        </div>
        <div data-area="community" className={styles.footer__main__card}>
          <span className="h4 fw--700">Community</span>
          <Link className="h4" content="Find Albeton  User Groups" />
          <Link className="h4" content="Find Certified Training" />
          <Link className="h4" content="Become a Certified Trainer" />
        </div>
        <div data-area="distributors" className={styles.footer__main__card}>
          <span className="h4 fw--700">Distributors</span>
          <Link className="h4" content="Find Distributors" />
          <Link className="h4" content="Try Push in-store" />
        </div>
      </div>

      <div className={styles.footer__footer}>
        <ul className={styles.footer__nav}>
          {FOOTER_NAV.map((nav, index) => (
            <li key={`${nav}-${index + 1}`} className="h5 fw--700">
              <a href="/">{nav}</a>
            </li>
          ))}
        </ul>

        <div className={styles.row}>
          <Logo width="50" />
          <span className="h4 fw--700">Berlin</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
