import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";
import DefaultLayout from "../../layouts/Default";
import { useAuth } from "../../modules/Auth/contexts/auth";

export interface Props {
  path: string;
  name: string;
  component: any;
  isPrivate?: boolean;
  [x: string]: unknown; // dealing with ...rest
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}: Props) => {
  const { signed } = useAuth();

  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Suspense fallback="Loading...">
            <Component {...routeProps} />
          </Suspense>
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
