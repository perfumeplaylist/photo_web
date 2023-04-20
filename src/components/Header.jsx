import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={`${styles.link} ${styles.logo__icon}`}>
            <i className="fa-solid fa-camera"></i>
          </Link>
          <h2 className={styles.logo__title}>PhotoWeb</h2>
        </div>
        <nav>
          <ul className={styles.navbar}>
            <li className={styles.navbar__list}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.navbar__list}>
              <Link to="/pose" className={styles.link}>
                Page
              </Link>
            </li>
            <li className={styles.navbar__list}>
              <Link to="/gallery" className={styles.link}>
                gallery
              </Link>
            </li>
            <li className={styles.navbar__list}>
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
