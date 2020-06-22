import Dashboard from "../containers/Dashboard";

import { Props as Route } from "../../../components/RouteWrapper";

const routes: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
];

export default routes;
