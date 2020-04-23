import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingSpinner from '../LoadingPage/LoadingSpinner';

const PrivateRoute = ({ component: Component }, ...rest) => {
  const isAuthorized = useSelector((state) => state.authReducer.isAuth);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <LoadingSpinner />
        ) : isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
