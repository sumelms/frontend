// Issue https://github.com/storybookjs/storybook/issues/14571
// Issue https://github.com/storybookjs/storybook/issues/1323
// TODO: FIX ME
// @ts-ignore
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  onClick: () => console.log('Clicked'),
  variant: 'primary',
  children: 'Button',
  disabled: false,
};
