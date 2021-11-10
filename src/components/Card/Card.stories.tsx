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
    isExternal: true,
    url: 'https://sumelms.com/',
  },
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;
export const CardDefault = Template.bind({});

export const CardWithImage = (args: CardProps) => <Card {...args} />;

CardWithImage.args = {
  title: 'Card title',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  image: 'https://sumelms.com/img/banner-image.svg',
};

export const CardWithChildren = (args: CardProps) => <Card {...args} />;

CardWithChildren.args = {
  title: 'Card title',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  url: 'https://sumelms.com/',
  isExternal: true,
  image: 'https://sumelms.com/img/banner-image.svg',
  children: (
    <a
      href={'https://sumelms.com/'}
      className="text-lg no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 px-6 py-4"
    >
      Learn More
    </a>
  ),
};
