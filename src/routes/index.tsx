import React from 'react';
import { RouteObject } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';
import Course from '../modules/Course/routes';
import Dashboard from '../modules/Dashboard/routes';

// LOAD THE MODULE ROUTES HERE
const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [...Dashboard, ...Course],
  },
];

export default routes;
