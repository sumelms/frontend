import DefaultLayout from '@app/layouts/Default';
import { RouteProps as Route } from 'router';

import Dashboard from '../containers/Dashboard';

const routes: Route[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    layout: DefaultLayout,
    exact: true,
  },
];

export default routes;
