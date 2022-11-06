import React from 'react';

import Breadcrumb, { BreadcrumbProps } from '../../../../components/Breadcrumb';
import PresentationHeader, {
  PresentationHeaderProps,
} from '../PresentationHeader/PresentationHeader';

export type ContainerLayoutProps = {
  presentationHeader?: PresentationHeaderProps;
  breadcrumb?: BreadcrumbProps;
  children: React.ReactNode;
};

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  presentationHeader,
  breadcrumb,
  children,
}: ContainerLayoutProps) => {
  return (
    <>
      {presentationHeader && <PresentationHeader {...presentationHeader} />}
      <div className="bg-gray-200 flex-auto h-screen mx-16 p-3">
        <div className="w-full my-3">
          {breadcrumb && <Breadcrumb {...breadcrumb} />}
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
};

export default ContainerLayout;
