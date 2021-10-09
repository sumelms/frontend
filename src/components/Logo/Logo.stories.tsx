import { Meta, Story } from '@storybook/react';
import React from 'react';

import Logo from './index';

export default {
  title: 'Common/Logo',
  component: Logo,
} as Meta;

const Template: Story = () => (
  <div className="h-32 w-32">
    <Logo />
  </div>
);

export const SidebarComponent = Template.bind({});
