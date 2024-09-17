import Link from "next/link";
import styles from "./HeroSection.module.scss";
import generalStyles from "../../app/styles/page.module.scss";
function HeroSection() {
  return (
    <section className={generalStyles.section}>
      <h1 className={generalStyles.main_title}>Welcome to our Next.js site!</h1>

      <p className={styles.description}>
        The main purpose of this site is to introduce Next.js technologies. Two
        pages have been implemented: an &nbsp;
        {
          <Link className={styles.link} href="/information">
            information page
          </Link>
        }
        &nbsp;and a&nbsp;
        {
          <Link className={styles.link} href="/team">
            team page
          </Link>
        }
        .
      </p>
    </section>
  );
}

export default HeroSection;
