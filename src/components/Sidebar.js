import React, { useState } from "react";
import cx from "classnames";

import { Button, Card, Type } from ".";
import { SidebarIcon } from "../icons";

import * as styles from "./Sidebar.module.css";

export const Sidebar = ({ className, props }) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <div className={cx(styles.backdrop, {
          [styles.containerHidden]: !isVisible,
        })}
      />
      <header className={styles.header}>
        <Button className={styles.favouriteButton} onClick={() => setVisibility((v) => !v)} variant="empty">
          <SidebarIcon closed={isVisible}/>
        </Button>
        <Type.Title className={styles.headerText}>Favourite</Type.Title>
      </header>
      <div
        className={cx(styles.container, {
          [styles.containerHidden]: !isVisible,
        })}
      >
        <section className={styles.content}>
          <Card variant="small"/>
          <Card variant="small"/>
          <Card variant="small"/>
        </section>
      </div>
    </>
  );
};
