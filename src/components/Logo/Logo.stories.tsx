import { Meta, Story } from '@storybook/react';
import React from 'react';

import Logo, { LogoProps } from './index';

export default {
  title: 'Common/Logo',
  component: Logo,
  args: {
    format: 'icon',
  },
} as Meta;

const Template: Story<LogoProps> = (args: LogoProps) => (
  <div className="w-1/4">
    <Logo {...args} />
  </div>
);

export const SidebarComponent = Template.bind({});
