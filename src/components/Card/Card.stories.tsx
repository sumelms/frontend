import { Meta, Story } from '@storybook/react';
import React from 'react';

import Card, { CardProps } from './index';

export default {
  title: 'Common/Card',
  component: Card,
  args: {
    title: 'Card title',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    isLink: true,
    label: 'Learn more',
    url: 'https://sumelms.com/',
  },
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;
export const CardComponent = Template.bind({});
