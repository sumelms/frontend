import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './index';

export default {
  title: 'Layout/Default/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-row min-h-screen">
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  </div>
);

export const SidebarComponent = Template.bind({});
