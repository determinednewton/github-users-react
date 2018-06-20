import * as React from 'react';
import { BrowserRouter as Router, match as Match, Route, Switch } from 'react-router-dom';

// import './App.css';
// import logo from './logo.svg';

const Users = () => <h1>Users</h1>;
const User = ({ match }: { match: Match<{userId:string}> }) => (
  <>
    <h1>User</h1>
    <div>
      <h3>Id: {match.params.userId}</h3>
    </div>
  </>
);

const App = () => (
  <Router>
    <Switch>
      {/* TODO lazy load */}
      <Route exact path="/" component={Users} />
      <Route path="/user/:userId(\d+)" component={User} />
    </Switch>
  </Router>
);

export default App;
