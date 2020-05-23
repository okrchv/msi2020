import React from "react";
import { Form as FinalForm } from "react-final-form";

export const Form = ({ initialValues, onSubmit, ...props }) => (
  <FinalForm
    initialValues={initialValues}
    onSubmit={onSubmit}
    destroyOnUnregister
    render={({ handleSubmit }) => <form {...props} onSubmit={handleSubmit} />}
  />
);
