import React from "react";
import * as cx from "classnames";

import * as styles from "./TagCheckbox.module.css";

export const TagCheckbox = ({ children, ...props }) => (
  <label className={cx(styles.root, { [styles.checked]: props.checked })}>
    <input {...props} className={styles.checkbox} />
    {children}
  </label>
);
