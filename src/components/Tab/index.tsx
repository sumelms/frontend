import React, { ReactNode } from 'react';

export interface TabItemProps {
  name: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TabItem: React.FC<TabItemProps> = ({
  name,
  active,
  ...rest
}: TabItemProps) => {
  return (
    <li className="mr-3 text-center last:mr-0">
      <a
        className={
          'font-bold px-4 py-1 rounded block leading-normal ' +
          (active ? 'text-red-600 bg-red-100' : 'text-gray-500 bg-')
        }
        {...rest}
        data-toggle="tab"
        href={`#${name}`}
        role="tablist"
      >
        <i className="flex-auto mb-px text-center"></i>
        {name}
      </a>
    </li>
  );
};

export interface TabContentProps {
  name: string;
  active?: boolean;
  children?: ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({
  children,
  active,
}: TabContentProps) => {
  return (
    <div className={active ? 'block' : 'hidden'} id="link1">
      {children}
    </div>
  );
};

export interface TabProps {
  active: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ active, children }: TabProps) => {
  const [activeTab, setActiveTab] = React.useState(active);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex flex-row flex-wrap mb-0 list-none" role="tablist">
          {React.Children.map<ReactNode, any>(children, ({ props }) => (
            <TabItem
              key={props.name}
              name={props.name}
              active={activeTab === props.name}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(props.name);
              }}
            />
          ))}
        </ul>
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
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
