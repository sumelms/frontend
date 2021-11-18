import React, { ReactNode } from 'react';

import TabContent from './TabContent';
import TabItem from './TabItem';

export interface TabProps {
  active: string;
  children: ReactNode;
  onlyIcons?: boolean;
}

const Tab: React.FC<TabProps> = ({
  active,
  children,
  onlyIcons = false,
}: TabProps) => {
  const [activeTab, setActiveTab] = React.useState(active);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex flex-row flex-wrap mb-0 list-none" role="tablist">
          {React.Children.map<ReactNode, any>(children, ({ props }) => (
            <TabItem
              key={props.name}
              onlyIcon={onlyIcons}
              {...props}
              active={activeTab === props.name}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(props.name);
              }}
            />
          ))}
        </ul>
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words">
          <div className="flex-auto px-4 py-5">
            <div className="flex-auto">
              {React.Children.map<ReactNode, any>(children, ({ props }) => (
                <TabContent {...props} active={activeTab === props.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
