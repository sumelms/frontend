import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserDropdown, { UserDropdownProps } from './index';

export default {
  title: 'Layout/Default/Header/UserDropdown',
  component: UserDropdown,
  args: {
    user: {
      name: 'Ricardo Lüders',
      avatar: 'https://avatars.githubusercontent.com/u/191027?v=4',
      role: 'admin',
    },
  } as UserDropdownProps,
} as Meta;

const Template: Story<UserDropdownProps> = (args: UserDropdownProps) => {
  return (
    <div className="relative flex flex-row-reverse w-3/4 p-4 m-auto">
      <BrowserRouter>
        <UserDropdown user={args.user} />
      </BrowserRouter>
    </div>
  );
};

export const DropdownComponent = Template.bind({});
