import React, { Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

export interface RouteProps {
  path: string;
  name: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  layout:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  [x: string]: unknown; // dealing with ...rest
}

const RouteWrapper: React.FC<RouteProps> = ({
  layout: Layout,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Suspense fallback="Loading...">
            <Component {...props} />
          </Suspense>
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
