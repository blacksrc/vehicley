import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
