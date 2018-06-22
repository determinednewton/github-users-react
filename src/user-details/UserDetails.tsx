import * as React from 'react';
import { SFC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const User: SFC<RouteComponentProps<{ userId: string }, {}>> = ({ match }) => (
  <>
    <h1>User</h1>
    <div>
      <h3>Id: {match.params.userId}</h3>
    </div>
  </>
);

export default User;
