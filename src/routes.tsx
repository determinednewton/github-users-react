import * as React from 'react';
import { SFC } from 'react';
import Loadable from 'react-loadable';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

// import './App.css';
// import logo from './logo.svg';

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
        loader: () => import('./user-list/UserList'),
        loading: () => <div>loading User List</div>
      })}
    />
    <Route
      path="/user/:userId(\d+)"
      component={Loadable({
        loader: () => import('./user-details/UserDetails'),
        loading: () => <div>loading User Details</div>
      })}
    />
    <Route component={NoMatch} />
  </Switch>
);
