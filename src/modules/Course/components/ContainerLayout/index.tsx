import React from 'react';

import Breadcrumb, { BreadcrumbProps } from '../../../../components/Breadcrumb';
import PageHeader, { PageHeaderProps } from '../PageHeader/PageHeader';

export type ContainerLayoutProps = {
  header?: PageHeaderProps;
  breadcrumb?: BreadcrumbProps;
  children: React.ReactNode;
};

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  header,
  breadcrumb,
  children,
}: ContainerLayoutProps) => {
  return (
    <>
      {header && <PageHeader {...header} />}
      <div className="flex-auto px-4 py-3 bg-zinc-200 h-min mx-14">
        <div className="w-full my-3">
          {breadcrumb && <Breadcrumb {...breadcrumb} />}
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default ContainerLayout;
