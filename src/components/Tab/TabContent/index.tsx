import React, { ReactNode } from 'react';

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

export default TabContent;
