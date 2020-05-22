import React from "react";
import * as cx from "classnames";

import { Radio, TagCheckbox, SearchField, Button } from ".";

import * as styles from "./Form.module.css";

export const Form = ({ checked, className }) => {
  const name = "form";

  return (
    <form className={cx(styles.root, className)}>
      <Radio name={name} checked>Random</Radio>
      <Radio name={name}>From categories</Radio>
      <div className={styles.checkboxContainer}>
        <TagCheckbox checked>Animal</TagCheckbox>
        <TagCheckbox>Carer</TagCheckbox>
        <TagCheckbox>Celebrity</TagCheckbox>
        <TagCheckbox>Dev</TagCheckbox>
      </div>
      <Radio name={name}>Search</Radio>
      <div>
        <SearchField placeholder="Free text search..." />
      </div>
      <Button>Get a joke</Button>
    </form>
  );
};
