import React from "react";

import { TagCheckbox } from ".";

export default { title: "TagCheckbox" };

export const tagCheckbox = props => (
  <>
    <TagCheckbox checked>Animal</TagCheckbox>
    <TagCheckbox>Carer</TagCheckbox>
    <TagCheckbox>Celebrity</TagCheckbox>
  </>
);
