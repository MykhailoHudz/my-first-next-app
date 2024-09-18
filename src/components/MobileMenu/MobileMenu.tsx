"use client";
import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import { useState } from "react";

function MobileMenu() {
  const [showNavigation, setShowNavigation] = useState(false);

  const menuToggle = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <div className={styles.mobile__navigation}>
      <button className={styles.menu_btn} type="button" onClick={menuToggle}>
        Menu
      </button>
      {showNavigation && (
        <ul className={styles.list}>
          <li>
            <Link onClick={menuToggle} className={styles.link} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={menuToggle}
              className={styles.link}
              href={"/information"}
            >
              Information
            </Link>
          </li>
          <li>
            <Link onClick={menuToggle} className={styles.link} href={"/team"}>
              Team
            </Link>
          </li>
          <li>
            <Link
              onClick={menuToggle}
              className={styles.link}
              href={"/comments"}
            >
              Comments
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileMenu;
