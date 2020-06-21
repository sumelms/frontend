import React, { FunctionComponent, ComponentClass } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../modules/Dashboard/routes";

export interface RouteItem {
  path: string;
  name: string;
  component: ComponentClass | FunctionComponent;
  exact?: boolean;
}

const routes = [...Dashboard];

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.path} component={route.component} exact={route.exact} />
      ))}
    </Switch>
  );
};

export default Routes;
