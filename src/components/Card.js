import React from "react";
import * as cx from "classnames";
import { parseISO, formatDistanceToNow } from 'date-fns';

import { HeartIcon, MessageIcon, LinkIcon } from "../icons";
import { Tag, Type, Button } from ".";

import * as styles from "./Card.module.css";

const VARIANT_STYLES = {
  regular: styles.variantRegular,
  small: styles.variantSmall
};

export const Card = ({
  variant = "regular",
  className,
  data,
  favourite,
  onFavourite
}) => {
  const { id, url, value, categories, updated_at } = data;

  return (
    <div className={cx(styles.root, VARIANT_STYLES[variant], className)}>
      <Button className={styles.button} variant="empty" onClick={onFavourite}>
        <HeartIcon empty={!favourite} />
      </Button>
      <div className={styles.main}>
        <div className={styles.icon}>
          <MessageIcon />
        </div>
        <div className={styles.content}>
          <Type.Small as="header" className={styles.header}>
            ID:{" "}
            <a href={url} className={styles.link}>
              {id}
            </a>
            <LinkIcon />
          </Type.Small>
          <section className={styles.text}>{value}</section>
          <footer className={styles.footer}>
            <Type.Small className={styles.footerText}>
              Last update: <Type.Bold>{formatDistanceToNow(parseISO(updated_at))} ago</Type.Bold>
            </Type.Small>
            {categories.map(category => (
              <Tag key={category} className={styles.tag}>
                {category}
              </Tag>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
};
