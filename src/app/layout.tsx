import "./globals.css";
import Link from "next/link";
import styles from "./page.module.scss";
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
              <Link href={"/"}>Home Page</Link>
              <Link href={"/information"}>Information Page</Link>
              <Link href={"/team"}>Team Page</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
