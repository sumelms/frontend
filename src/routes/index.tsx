/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../modules/Dashboard/routes';
import RouteWrapper, { Props as Route } from './RouteWrapper';

const routes: Route[] = [...Dashboard];

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
