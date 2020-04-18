import React from 'react';
import SignUpForm from './components/SignUp/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <SignUpForm {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
