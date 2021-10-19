import { Meta, Story } from '@storybook/react';
import React from 'react';

import Container, { ContainerProps } from './index';

export default {
  title: 'Common/Containers',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args: ContainerProps) => (
  <Container {...args}>This is just a container</Container>
);

export const ContainerComponent = Template.bind({});
