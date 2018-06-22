import * as React from 'react';
import { SFC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const UserList: SFC<RouteComponentProps<{ userId: string }, {}>> = () => <ul>User List</ul>;

export default UserList;
