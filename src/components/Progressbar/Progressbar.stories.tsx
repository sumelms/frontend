import { Meta, Story } from '@storybook/react';
import React from 'react';

import Progressbar, { ProgressProps } from './index';

export default {
  title: 'Common/Progressbar',
  component: Progressbar,
  args: {
    amount: 80,
    bgColorClass: 'bg-green-400',
  },
} as Meta;

const Template: Story<ProgressProps> = (args: ProgressProps) => (
  <div className="block w-3/4 p-4 m-auto">
    <Progressbar {...args} />
  </div>
);

export const ProgressbarComponent = Template.bind({});
