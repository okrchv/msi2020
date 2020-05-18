import React from 'react';

import { MessageIcon, HeartIcon, LinkIcon, RadioButtonIcon } from '.';

export default {
  title: 'Icons',
};

export const message = () => <MessageIcon />

export const heart = () => <HeartIcon empty />

export const link = () => <LinkIcon />

export const radioButton = () => <RadioButtonIcon checked/>
