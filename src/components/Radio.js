import React from 'react';

import { RadioButtonIcon } from "../icons";

import * as styles from './Radio.module.css';

export const Radio = ({ checked, name, children }) => (
  <label className={styles.root}>
    <div className={styles.radioButton}>
      <RadioButtonIcon className={styles.icon} checked={checked} />
      <input className={styles.input} type="radio" name={name} />
    </div>
    {children}
  </label>
);
