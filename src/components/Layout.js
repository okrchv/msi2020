import React from "react";

import { Type, Sidebar } from ".";

import * as styles from "./Layout.module.css";

export const Layout = ({ children }) => (
  <main className={styles.root}>
    <div className={styles.pageWrapper}>
      <div className={styles.page}>
        <header className={styles.header}>
          <Type.Title>MSI 2020</Type.Title>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
    <aside className={styles.sidebar}>
      <Sidebar />
    </aside>
  </main>
);
