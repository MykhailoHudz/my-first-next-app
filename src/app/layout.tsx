import "./globals.css";
import Link from "next/link";
import styles from "./styles/page.module.scss";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
