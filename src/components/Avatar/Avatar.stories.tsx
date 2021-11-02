import { Meta, Story } from '@storybook/react';
import React from 'react';

import Avatar, { AvatarProps } from './index';

export default {
  title: 'Common/Avatar',
  component: Avatar,
  args: {
    status: 'online',
    url: 'https://avatars.githubusercontent.com/u/41678283?v=4',
    name: 'Camila Moura',
    size: 'md',
  },
} as Meta;

const Template: Story<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const AvatarComponent = Template.bind({});
