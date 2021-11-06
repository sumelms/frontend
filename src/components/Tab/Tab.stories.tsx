import { Meta, Story } from '@storybook/react';
import React from 'react';

import Tab, { TabContent } from './index';

export default {
  title: 'Common/Tab',
  component: Tab,
  args: {},
} as Meta;

const Template: Story = () => (
  <div>
    <Tab active="tab2">
      <TabContent name="tab1">
        <h1>Tab 1</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
      </TabContent>
      <TabContent name="tab2">
        <h1>Tab 2</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          repellendus quae quam quis quisquam molestias provident atque, eum
          laboriosam aut eveniet fugit perspiciatis consequatur voluptatibus ea?
          Quidem totam autem repellat.
        </p>
      </TabContent>
      <TabContent name="tab3">
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
