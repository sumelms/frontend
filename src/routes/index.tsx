/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWrapper, { Props as Route } from '../components/RouteWrapper';
import Auth from '../modules/Auth/routes';
import Dashboard from '../modules/Dashboard/routes';

const routes: Route[] = [...Dashboard, ...Auth];

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
