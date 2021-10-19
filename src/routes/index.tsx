/* eslint-disable react/jsx-props-no-spreading */
import Course from '@app/modules/Course/routes';
import Dashboard from '@app/modules/Dashboard/routes';
import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWrapper, { Props as Route } from './RouteWrapper';

const routes: Route[] = [...Dashboard, ...Course];

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map(({ path, component: Component, ...rest }) => (
        <RouteWrapper key={path} path={path} component={Component} {...rest} />
      ))}
    </Switch>
  );
};

export default Routes;
