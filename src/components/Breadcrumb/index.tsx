import type { BreadcrumbItemProps } from 'flowbite-react';
import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';
import React from 'react';
import { HiHome } from 'react-icons/hi';
import { Params, useMatches } from 'react-router-dom';

type RouteWithBreadcrumbHandle = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    crumb: (data: unknown) => React.ReactNode;
  };
};

const hasBreadcrumbHandle = (
  route:
    | {
        handle: unknown;
      }
    | RouteWithBreadcrumbHandle,
): route is RouteWithBreadcrumbHandle => {
  return !!route.handle && typeof route.handle === 'object' && 'crumb' in route.handle;
};

const Breadcrumb: React.FC = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter<RouteWithBreadcrumbHandle>(hasBreadcrumbHandle)
    .map((match) => match.handle.crumb(match.data));
  return (
    <FlowbiteBreadcrumb aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => {
        const props: BreadcrumbItemProps = {
          href: '#',
        };

        if (index === 0) {
          props.icon = HiHome;
        }
        return (
          <FlowbiteBreadcrumb.Item key={index} {...props}>
            {crumb}
          </FlowbiteBreadcrumb.Item>
        );
      })}
    </FlowbiteBreadcrumb>
  );
};

export default Breadcrumb;
