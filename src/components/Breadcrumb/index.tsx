import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';
import React from 'react';
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
  return (
    !!route.handle &&
    typeof route.handle === 'object' &&
    'breadcrumb' in route.handle
  );
};

const Breadcrumb: React.FC = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter<RouteWithBreadcrumbHandle>(hasBreadcrumbHandle)
    .map((match) => match.handle.crumb(match.data));

  return (
    <FlowbiteBreadcrumb aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => (
        <FlowbiteBreadcrumb.Item href="#" key={index}>
          {crumb}
        </FlowbiteBreadcrumb.Item>
      ))}
    </FlowbiteBreadcrumb>
  );
};

export default Breadcrumb;
