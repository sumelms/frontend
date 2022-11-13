import React, { PropsWithChildren } from 'react';

import Breadcrumb, { BreadcrumbProps } from '../../../../components/Breadcrumb';
import Header, { HeaderItemProps } from './Header';
import Navbar, { NavbarItemsProps } from './Navbar';

export interface LayoutProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  items?: HeaderItemProps[];
  breadcrumb?: BreadcrumbProps;
  menuItems?: NavbarItemsProps[];
}

const Layout: React.FC<LayoutProps> = ({
  title,
  subtitle,
  items,
  breadcrumb,
  menuItems,
  children,
}: LayoutProps) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} items={items} />
      <div className="container flex-col px-5 mx-auto py-7 lg:py-14 lg:px-8 bg-neutral-100">
        {breadcrumb && (
          <div>
            <Breadcrumb {...breadcrumb} />
          </div>
        )}
        {menuItems && (
          <div className="mt-9 mb-11">
            <Navbar items={menuItems} />
          </div>
        )}
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default Layout;
