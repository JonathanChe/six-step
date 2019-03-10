import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import App from './App';
import About from './About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
