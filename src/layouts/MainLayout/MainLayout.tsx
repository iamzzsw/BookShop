import React from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  header: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, content, footer }) => {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>{header}</header>
        <main className={styles.content}>{content}</main>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </section>
  );
};

export default MainLayout;
