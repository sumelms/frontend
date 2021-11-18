import React, { ReactNode } from 'react';

export interface TabItemProps {
  name: string;
  active: boolean;
  icon?: React.ComponentType<any>;
  onlyIcon?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TabItem: React.FC<TabItemProps> = ({
  name,
  active,
  icon: Icon,
  onlyIcon = false,
  ...rest
}: TabItemProps) => {
  return (
    <li className="flex-auto mr-3 text-center last:mr-0">
      <a
        className={
          'font-bold py-1 rounded-lg flex place-items-center justify-center leading-normal ' +
          (active ? 'text-red-600 bg-red-100' : 'text-gray-500')
        }
        {...rest}
        data-toggle="tab"
        href={`#${name}`}
        role="tablist"
      >
        {Icon ? (
          <i className="mr-1 text-center flex-automb-px">
            <Icon className="h-8 w-8" />
          </i>
        ) : (
          ''
        )}
        {onlyIcon && Icon ? '' : name}
      </a>
    </li>
  );
};

export interface TabContentProps {
  name: string;
  active?: boolean;
  icon?: React.ComponentType<any>;
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
