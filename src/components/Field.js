import React from "react";
import { Field, FormSpy } from "react-final-form";

import { TextField, RadioButton, TagCheckbox } from ".";

export const Text = ({ name, validate, ...props }) => (
  <Field
    name={name}
    validate={validate}
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

export const Condition = ({ when, is, children }) => (
  <FormSpy
    subscription={{ values: true }}
    render={({ values }) => values[when] === is && children}
  />
);
