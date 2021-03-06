import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Index from '../../ui/components/index';
import SignIn from '../../ui/components/sign_in';
import SignUp from '../../ui/components/sign_up';
import Dashboard from '../../ui/components/dashboard/dashboard';
import Statistics from '../../ui/components/dashboard/views/statistics/statistics';
import { NotFound } from '../../ui/pages/not_found/not_found';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <Route path="/home" name="home" component={Index} />
      <Route path="/sign-in" name="signIn" component={SignIn} />
      <Route path="/sign-up" name="signUp" component={SignUp} />
      <Route path="/dashboard" component={Dashboard}>
        <Route path="/dashboard" component={Statistics} />
      </Route>
    </Route>
    <Route name="not-found" path="*" component={NotFound} />
  </Router>
);
