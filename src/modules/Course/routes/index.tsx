import { Props as Route } from '@app/routes/RouteWrapper';

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
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course',
    name: 'Course Overview',
    component: CourseOverview,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course/contents',
    name: 'Course Content',
    component: CourseContents,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course/community',
    name: 'Course Community',
    component: CourseCommunity,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course/projects',
    name: 'Course Projects',
    component: CourseProjects,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course/students',
    name: 'Course Students',
    component: CourseStudents,
    exact: true,
    isPrivate: true,
  },
  {
    path: '/courses/:course/activity/:activity',
    name: 'Course Activity',
    component: CourseActivity,
    exact: true,
    isPrivate: true,
  },
];

export default routes;
