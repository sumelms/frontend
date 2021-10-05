import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false,
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const ButtonComponent = Template.bind({});
