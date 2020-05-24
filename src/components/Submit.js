import React from "react";
import { FormSpy } from "react-final-form";

import { Button } from ".";

export const Submit = props => (
  <FormSpy
    subscription={{ hasValidationErrors: true, submitting: true }}
    render={({ hasValidationErrors, submitting }) => (
      <Button
        type="submit"
        variant="submit"
        disabled={hasValidationErrors || submitting}
        {...props}
      />
    )}
  />
);
