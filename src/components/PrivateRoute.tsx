import { Route, Navigate, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path: string;
}

export default function PrivateRoute({
  component: Component,
  path,
}: PrivateRouteProps) {
  return (
    <Route
      path={path}
      render={(props:any) =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={'/login'}
          />
        )
      }
    />
  );
}
