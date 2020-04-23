import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfilePage from '../../Views/Profiles/ProfilePage';
import SignUpForm from '../../Views/SignUp/SignUp';
import SignIn from '../../Views/Signin/SignIn';
import PrivateRoute from './PrivateRoute';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <SignIn {...props} />} />
      <Route
        exact
        path='/register'
        render={(props) => <SignUpForm {...props} />}
      />
      <PrivateRoute exact path='/profile' component={ProfilePage} />
    </Switch>
  );
};

export default Routes;
