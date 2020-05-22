import React from 'react';
import * as cx from 'classnames';

import { HeartIcon, MessageIcon, LinkIcon } from '../icons';
import { Tag, Type, Button } from '.';

import * as styles from './Card.module.css';

const VARIANT_STYLES = {
  regular: styles.variantRegular,
  small: styles.variantSmall,
}

export const Card = ({ variant = "regular", favourite, className }) => {
  return (
  <div className={cx(styles.root, VARIANT_STYLES[variant], className)}>
    <Button className={styles.button} variant="empty">
      <HeartIcon empty={!favourite} />
    </Button>
    <div className={styles.main}>
      <div className={styles.icon}><MessageIcon /></div>
      <div className={styles.content}>
        <Type.Small as="header" className={styles.header}>ID:#link{' '}<LinkIcon /></Type.Small>
        <section className={styles.text}>
          No one truly knows who's Chuck Norris' real father.
        </section>
        <footer className={styles.footer}>
          <Type.Small className={styles.footerText}>
            Last update:
            <Type.Bold>#link</Type.Bold>
          </Type.Small>
          <Tag className={styles.tag}>#tag</Tag>
        </footer>
      </div>
    </div>
  </div>
)
};
