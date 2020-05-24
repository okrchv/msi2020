import React from "react";

import * as styles from "./TextField.module.css";

export const TextField = props => (
  <input {...props} className={styles.root} type="text" />
);
