import React from 'react';

import * as styles from './SubmitButton.module.css';

export const SubmitButton = props => (
  <button className={styles.root}>{props.children}</button>
);
