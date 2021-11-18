import { CheckIcon } from '@heroicons/react/outline';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Tab from './index';
import TabContent from './TabContent';

export default {
  title: 'Common/Tab',
  component: Tab,
  args: {
    onlyIcons: false,
    activeTab: 'Comunidade',
  },
} as Meta;

const Template: Story = (args) => (
  <div className="w-3/4">
    <Tab active={args.activeTab} onlyIcons={args.onlyIcons}>
      <TabContent name="Apresentação" icon={CheckIcon}>
        <h1>Tab 1</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
      </TabContent>
      <TabContent name="Disciplina">
        <h1>Tab 2</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
      </TabContent>
      <TabContent name="Comunidade">
        <h1>Tab 3</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
      </TabContent>
    </Tab>
  </div>
);

export const TabComponent = Template.bind({});
