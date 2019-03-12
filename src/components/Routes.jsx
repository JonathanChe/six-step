import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import About from './About';
import Main from './Main';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
