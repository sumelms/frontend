import { Meta, Story } from '@storybook/react';
import React from 'react';

import Header from './index';

export default {
  title: 'Layout/Default/Header',
  component: Header,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
  </div>
);

export const SidebarComponent = Template.bind({});
