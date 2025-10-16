import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }
          >
            Articles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
