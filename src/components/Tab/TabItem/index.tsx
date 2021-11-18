import React from 'react';

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

export default TabItem;
