import React from 'react';

import { HeartIcon, MessageIcon, LinkIcon } from '../icons';
import { Type } from '.';
import { Tag } from '.';

import * as styles from './Card.module.css';

export const Card = () => (
  <div className={styles.root}>
    <div className={styles.actions}>
      <HeartIcon empty />
    </div>
    <div className={styles.main}>
      <div className={styles.icon}><MessageIcon /></div>
      <div className={styles.content}>
        <Type.Small as="header" className={styles.header}>ID:#link{' '}<LinkIcon /></Type.Small>
        <section className={styles.text}>
          No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.
        </section>
        <footer className={styles.footer}>
          <Type.Small>
            Last update:
            <Type.Bold>#link</Type.Bold>
          </Type.Small>
          <Tag>#tag</Tag>
        </footer>
      </div>
    </div>
  </div>
);
