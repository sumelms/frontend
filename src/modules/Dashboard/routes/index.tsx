import React from 'react';
import { RouteObject } from 'react-router-dom';

import DefaultLayout from '../../../layouts/Default';
import Dashboard from '../containers/Dashboard';

const routes: RouteObject[] = [
  {
    id: 'dashboard-module',
    element: <DefaultLayout />,
    children: [
      {
        id: 'dashboard',
        path: '/',
        element: <Dashboard />,
        index: true,
      },
    ],
  },
];

export default routes;
