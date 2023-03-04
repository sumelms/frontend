import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Common/Button',
  component: Button,
  args: {
    variant: 'primary',
    disabled: false,
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;

export const ButtonComponent = Template.bind({});
