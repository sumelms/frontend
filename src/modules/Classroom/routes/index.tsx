import React from 'react';
import { RouteObject } from 'react-router-dom';

import PageLayout from '../../../layouts/Container';
import ClassroomView from '../containers/ClassroomOverview';
import { pageLoader } from './loader';

const routes: RouteObject[] = [
  {
    path: 'classrooms',
    children: [
      {
        element: <PageLayout />,
        loader: pageLoader,
        children: [
          {
            path: ':classroom',
            element: <ClassroomView />,
            handle: {
              crumb: (data: unknown) => <span>Classroom</span>,
            },
          },
        ],
      },
    ],
  },
];

export default routes;
