import { Props as Route } from "../../../components/RouteWrapper";

import Login from "../containers/Login";
import Register from "../containers/Register";
import ForgotPassword from "../containers/ForgotPassword";
import ChangePassword from "../containers/ChangePassword";

const routes: Route[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    exact: true,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: ForgotPassword,
    exact: true,
  },
  {
    path: "/change-password/:token",
    name: "Change Password",
    component: ChangePassword,
    exact: true,
  },
];

export default routes;
