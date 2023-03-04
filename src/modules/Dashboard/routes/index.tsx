import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

const routes: RouteObject[] = [
  {
    element: <Dashboard />,
    index: true,
  },
];

export default routes;
