import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';
import React, { ComponentProps } from 'react';

type BreadcrumbItemProps = {
  icon?: React.FC<ComponentProps<'svg'>>;
  linkText: string;
  linkState: string;
};

export type BreadcrumbProps = {
  ariaLabel: string;
  breadcrumbItems: BreadcrumbItemProps[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <FlowbiteBreadcrumb aria-label={props.ariaLabel}>
      {props.breadcrumbItems.map((element, index) => (
        <FlowbiteBreadcrumb.Item
          href="#"
          icon={element.icon}
          key={index.toString()}
        >
          {element.linkText}
        </FlowbiteBreadcrumb.Item>
      ))}
    </FlowbiteBreadcrumb>
  );
};

export default Breadcrumb;
