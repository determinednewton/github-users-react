import * as React from 'react';
import { SFC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { getUserList } from '../actions/userListActions';
import { GithubUser } from '../api/github/api';
import { State } from '../store';

interface UserListStateProps {
  users?: GithubUser[];
  isFetching?: boolean;
}

interface UserListDispatchProps {
  onGetUserList: (since?: number) => void;
}

const mapStateToProps = (state: State): UserListStateProps => {
  return {
    users: state.userListState.userList,
    isFetching: state.userListState.isFetching
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, any>): UserListDispatchProps => {
  return {
    onGetUserList(since?: number) {
      dispatch(getUserList(since));
    }
  };
};

const UserList: SFC<RouteComponentProps<{ userId: string }, {}>> = () => <ul>User List</ul>;

export const ConnectedUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default ConnectedUserList;
