import DefaultLayout from '../../../layouts/Default';
import { RouteProps as Route } from '../../../router/RouteWrapper';
import CourseClassrooms from '../containers/CourseClassrooms';
import CourseClassroomsSubscription from '../containers/CourseClassroomsSubscription';
import CourseMatrix from '../containers/CourseMatrix';
import CourseOverview from '../containers/CourseOverview';

const routes: Route[] = [
  {
    path: '/course/:course',
    name: 'Course Overview',
    component: CourseOverview,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/course/:course/classrooms',
    name: 'Course Classrooms',
    component: CourseClassrooms,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/course/:course/classrooms/subscription',
    name: 'Course Classrooms Subscription',
    component: CourseClassroomsSubscription,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/course/:course/matrix',
    name: 'Course Matrix',
    component: CourseMatrix,
    layout: DefaultLayout,
    exact: true,
  },
];

export default routes;
