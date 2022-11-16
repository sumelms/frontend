import React from 'react';
import { RouteObject } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

const routes: RouteObject[] = [
  {
    element: <Dashboard />,
    index: true,
  },
];

export default routes;
