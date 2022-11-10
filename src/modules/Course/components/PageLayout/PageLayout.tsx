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
      <div className="container flex-col px-5 mx-auto py-7 lg:py-14 lg:px-10 bg-neutral-100">
        <div>{breadcrumb && <Breadcrumb {...breadcrumb} />}</div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default PageLayout;
