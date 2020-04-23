import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './components/Routes/Routes';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
