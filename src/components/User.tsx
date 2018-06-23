import * as React from 'react';
import { SFC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { getUser } from '../actions/userActions';
import { GithubUser } from '../api/github/api';
import { State } from '../store';

interface UserStateProps {
  user?: GithubUser;
  isFetching?: boolean;
}

interface UserDispatchProps {
  onGetUser: (login: string) => void;
}

const mapStateToProps = (state: State): UserStateProps => {
  return {
    user: state.userState.user,
    isFetching: state.userState.isFetching
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, any>): UserDispatchProps => {
  return {
    onGetUser(login: string) {
      dispatch(getUser(login));
    }
  };
};

const User: SFC<RouteComponentProps<{ login: string }, {}>> = ({ match }) => (
  <>
    <h1>User</h1>
    <div>
      <h3>login: {match.params.login}</h3>
    </div>
  </>
);

export const ConnectedUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);


export default ConnectedUser;
