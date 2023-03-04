import React from 'react';
import type { RouteObject } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';
import Classroom from '../modules/Classroom/routes';
import Course from '../modules/Course/routes';
import Dashboard from '../modules/Dashboard/routes';

// LOAD THE MODULE ROUTES HERE
const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    handle: {
      crumb: (data: unknown) => <span>Home</span>,
    },
    children: [...Dashboard, ...Course, ...Classroom],
  },
];

export default routes;
