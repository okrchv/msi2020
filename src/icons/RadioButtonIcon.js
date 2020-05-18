import React from "react";

export const RadioButtonIcon = ({ checked, ...props }) => {
  const color = checked ? "#333333" : "#ABABAB";

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2" />
      {checked && <circle cx="10" cy="10" r="5" fill="#333333" />}
    </svg>
  );
};
