import React from 'react';
import { RouteObject } from 'react-router-dom';

import PageLayout from '../../../layouts/Container';
import CourseClassrooms from '../containers/CourseClassrooms';
import CourseClassroomsSubscription from '../containers/CourseClassroomsSubscription';
import CourseMatrix from '../containers/CourseMatrix';
import CourseOverview from '../containers/CourseOverview';
import CoursesList from '../containers/CoursesList';
import { pageLoader } from './loader';

const routes: RouteObject[] = [
  {
    path: 'courses',
    element: <CoursesList />,
  },
  {
    path: 'courses',
    children: [
      {
        element: <PageLayout />,
        loader: pageLoader,
        children: [
          {
            path: ':course',
            element: <CourseOverview />,
            handle: {
              crumb: (data: unknown) => <span>Overview</span>,
            },
          },
          {
            path: ':course/classrooms',
            element: <CourseClassrooms />,
            handle: {
              crumb: (data: unknown) => <span>Classrooms</span>,
            },
          },
          {
            path: ':course/classrooms/subscription',
            element: <CourseClassroomsSubscription />,
            handle: {
              crumb: (data: unknown) => <span>Classroom Subscriptions</span>,
            },
          },
          {
            path: ':course/matrix',
            element: <CourseMatrix />,
            handle: {
              crumb: (data: unknown) => <span>Matrix</span>,
            },
          },
        ],
      },
    ],
  },
];

export default routes;
