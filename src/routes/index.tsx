import { RouteObject } from 'react-router-dom';

import Course from '../modules/Course/routes';
import Dashboard from '../modules/Dashboard/routes';

// LOAD THE MODULE ROUTES HERE
const routes: RouteObject[] = [...Dashboard, ...Course];

export default routes;
