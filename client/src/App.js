import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUpForm from './Views/SignUp/SignUp';
import SignIn from './Views/Signin/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <SignIn {...props} />} />
          <Route
            exact
            path='/register'
            render={(props) => <SignUpForm {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
