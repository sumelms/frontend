import Dashboard from "../containers/Dashboard";
import { RouteItem } from "../../../routes";

const routes: RouteItem[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
];

export default routes;
