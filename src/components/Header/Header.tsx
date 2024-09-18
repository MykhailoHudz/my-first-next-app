import Link from "next/link";
import styles from "./Header.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link className={styles.link} href={"/"}>
            Home
          </Link>
          <Link className={styles.link} href={"/information"}>
            Information
          </Link>
          <Link className={styles.link} href={"/team"}>
            Team
          </Link>
          <Link className={styles.link} href={"/comments"}>
            Comments
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
