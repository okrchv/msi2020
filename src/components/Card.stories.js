import React from 'react';

import { Card } from '.';

export default {
  title: 'Card',
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  },
};

export const card = () => <Card />;
