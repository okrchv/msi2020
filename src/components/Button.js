import React from "react";
import * as cx from "classnames";

import * as styles from "./Button.module.css";

const VARIANT_STYLES = {
  submit: styles.variantSubmit,
  empty: styles.variantEmpty,
};

export const Button = ({ variant = "submit", className, ...props }) => (
  <button
    className={cx(styles.root, VARIANT_STYLES[variant], className)}
    {...props}
  />
);
