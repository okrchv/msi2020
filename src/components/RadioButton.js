import React from "react";

import { RadioButtonIcon } from "../icons";

import * as styles from "./RadioButton.module.css";

export const RadioButton = ({ children, ...props }) => (
  <label className={styles.root}>
    <div className={styles.radioButton}>
      <RadioButtonIcon className={styles.icon} checked={props.checked} />
      <input {...props} className={styles.input} />
    </div>
    {children}
  </label>
);
