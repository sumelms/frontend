import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../../layouts/Default';

export interface Props {
  path: string;
  name: string;
  component: any;
  isPrivate?: boolean;
  [x: string]: unknown; // dealing with ...rest
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}: Props) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <DefaultLayout>
          <Suspense fallback="Loading...">
            <Component {...routeProps} />
          </Suspense>
        </DefaultLayout>
      )}
    />
  );
};

export default RouteWrapper;
