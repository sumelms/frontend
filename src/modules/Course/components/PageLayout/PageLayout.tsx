import React, { PropsWithChildren } from 'react';

import Breadcrumb, { BreadcrumbProps } from '../../../../components/Breadcrumb';
import PageHeader from './PageHeader';
import { PageHeaderItemProps } from './PageHeaderItem';
import PageNavbar, { PageNavbarItemsProps } from './PageNavbar';

export interface PageLayoutProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  items?: PageHeaderItemProps[];
  breadcrumb?: BreadcrumbProps;
  menuItems?: PageNavbarItemsProps[];
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  items,
  breadcrumb,
  menuItems,
  children,
}: PageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} items={items} />
      <div className="container flex-col px-5 mx-auto py-7 lg:py-14 lg:px-8 bg-neutral-100">
        {breadcrumb && (
          <div>
            <Breadcrumb {...breadcrumb} />
          </div>
        )}
        {menuItems && (
          <div className="mt-9 mb-11">
            <PageNavbar items={menuItems} />
          </div>
        )}
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default PageLayout;
