import { Props as Route } from '@app/routes/RouteWrapper';

import CourseView from '../containers/CourseView';

const routes: Route[] = [
  {
    path: '/courses/:course',
    name: 'Course View',
    component: CourseView,
    exact: true,
    isPrivate: true,
  },
];

export default routes;
