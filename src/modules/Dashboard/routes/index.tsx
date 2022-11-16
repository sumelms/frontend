import React from 'react';
import { RouteObject } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
    index: true,
    handle: {
      crumb: (data: unknown) => <span>Dashboard</span>,
    },
  },
];

export default routes;
