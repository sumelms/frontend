import React from 'react';
import { RouteObject } from 'react-router-dom';

import DefaultLayout from '../../../layouts/Default';
import CourseClassrooms from '../containers/CourseClassrooms';
import CourseClassroomsSubscription from '../containers/CourseClassroomsSubscription';
import CourseMatrix from '../containers/CourseMatrix';
import CourseOverview from '../containers/CourseOverview';

const routes: RouteObject[] = [
  {
    id: 'courses-module',
    element: <DefaultLayout />,
    children: [
      {
        path: '/courses',
        children: [
          {
            path: ':course',
            element: <CourseOverview />,
            index: true,
          },
          {
            path: ':course/classrooms',
            element: <CourseClassrooms />,
          },
          {
            path: ':course/classrooms/subscription',
            element: <CourseClassroomsSubscription />,
          },
          {
            path: ':course/matrix',
            element: <CourseMatrix />,
          },
        ],
      },
    ],
  },
];

export default routes;
