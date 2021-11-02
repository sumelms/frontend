import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './index';

export default {
  title: 'Layout/Default/Header',
  component: Header,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </div>
);

export const HeaderComponent = Template.bind({});
