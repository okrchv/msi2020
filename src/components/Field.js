import React from "react";
import { Field } from "react-final-form";

import { TextField, RadioButton, TagCheckbox } from ".";

export const Text = ({ name, ...props }) => (
  <Field
    name={name}
    render={({ input }) => <TextField {...props} {...input} />}
  />
);

export const Radio = ({ name, value, ...props }) => (
  <Field
    type="radio"
    name={name}
    value={value}
    render={({ input }) => <RadioButton {...props} {...input} />}
  />
);

export const Tag = ({ name, value, ...props }) => (
  <Field
    type="checkbox"
    name={name}
    value={value}
    render={({ input }) => <TagCheckbox {...props} {...input} />}
  />
);
