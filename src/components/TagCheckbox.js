import React from "react";
import * as cx from "classnames";

import * as styles from "./TagCheckbox.module.css";

export const TagCheckbox = ({ checked, name, children }) => (
  <label className={cx(styles.root, { [styles.checked]: checked })}>
    <input className={styles.checkbox} type="checkbox" name={name} checked={checked} />
    {children}
  </label>
);
