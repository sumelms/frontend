import { Props as Route } from '../../../components/RouteWrapper';
import Dashboard from '../containers/Dashboard';

const routes: Route[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
];

export default routes;
