import Course from '@app/modules/Course/routes';
import Dashboard from '@app/modules/Dashboard/routes';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWrapper, { RouteProps as Route } from './RouteWrapper';

export const routes: Route[] = [...Dashboard, ...Course];

const Router: React.FC = () => {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(
          ({ path, layout: Layout, component: Component, ...rest }) => (
            <RouteWrapper
              key={path}
              path={path}
              layout={Layout}
              component={Component}
              {...rest}
            />
          ),
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
