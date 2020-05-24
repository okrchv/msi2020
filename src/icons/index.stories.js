import React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";

import {
  MessageIcon,
  HeartIcon,
  LinkIcon,
  RadioButtonIcon,
  SidebarIcon
} from ".";

export default {
  title: "Icons"
};

export const message = () => <MessageIcon />;

export const heart = () => <HeartIcon empty={boolean("Empty", false)} />;

export const link = () => <LinkIcon />;

export const radioButton = () => (
  <RadioButtonIcon checked={boolean("Checked", false)} />
);

export const sidebar = () => <SidebarIcon closed={boolean("Closed", false)} />;
