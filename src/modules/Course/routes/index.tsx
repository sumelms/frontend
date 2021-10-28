import DefaultLayout from '@app/layouts/Default';
import { RouteProps as Route } from 'router';

import CourseActivity from '../containers/CourseActivity';
import CourseCommunity from '../containers/CourseCommunity';
import CourseContents from '../containers/CourseContents';
import CourseOverview from '../containers/CourseOverview';
import CourseProjects from '../containers/CourseProjects';
import CourseStudents from '../containers/CourseStudents';
import MyCourses from '../containers/MyCourses';

const routes: Route[] = [
  {
    path: '/courses/my',
    name: 'My Courses',
    component: MyCourses,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course',
    name: 'Course Overview',
    component: CourseOverview,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course/contents',
    name: 'Course Content',
    component: CourseContents,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course/community',
    name: 'Course Community',
    component: CourseCommunity,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course/projects',
    name: 'Course Projects',
    component: CourseProjects,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course/students',
    name: 'Course Students',
    component: CourseStudents,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/courses/:course/activity/:activity',
    name: 'Course Activity',
    component: CourseActivity,
    layout: DefaultLayout,
    exact: true,
  },
];

export default routes;
