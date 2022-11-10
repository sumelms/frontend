import React, { PropsWithChildren } from 'react';

import Breadcrumb, { BreadcrumbProps } from '../../../../components/Breadcrumb';
import PageHeader from './PageHeader';
import { PageHeaderItemProps } from './PageHeaderItem';

export interface PageLayoutProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  items?: PageHeaderItemProps[];
  breadcrumb?: BreadcrumbProps;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  items,
  breadcrumb,
  children,
}: PageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} items={items} />
      <div className="flex-auto px-4 py-3 bg-zinc-200 h-min mx-14">
        <div className="w-full my-3">
          {breadcrumb && <Breadcrumb {...breadcrumb} />}
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default PageLayout;
