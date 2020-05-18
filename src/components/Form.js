import React from 'react';

import {Radio} from '.';

import * as styles from './Form.module.css';

export const Form = () => {
  const name = "form";
  return (
    <div className={styles.radioButtonGroup}>
      <Radio name={name} checked>Random</Radio>
      <Radio name={name}>From categories</Radio>
      <Radio name={name}>Search</Radio>
    </div>
  )
};
