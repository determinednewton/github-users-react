import * as React from 'react';
import { SFC } from 'react';
import Loadable from 'react-loadable';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { Loader } from './components/Loader';

const NoMatch: SFC<RouteComponentProps<{}, {}>> = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Loadable({
        loader: () => import('./components/UserList'),
        loading: Loader
      })}
    />
    <Route
      path="/user/:login"
      component={Loadable({
        loader: () => import('./components/User'),
        loading: Loader
      })}
    />
    <Route component={NoMatch} />
  </Switch>
);
