import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { clearUser, getUser } from '../actions/userActions';
import { GithubUser } from '../api/github/api';
import { State, UserState } from '../store';
import { Loader } from './Loader';

interface UserStateProps {
  user?: GithubUser;
  isFetching?: boolean;
}

interface UserDispatchProps {
  onGetUser: () => void;
  onClearUser: () => void;
}

type UserOwnProps = RouteComponentProps<{ login: string }, {}>;

const mapStateToProps = (state: State, ownProps: UserOwnProps): UserStateProps => {
  return {
    user: state.userState.user
      ? state.userState.user
      : state.userListState.userList
        ? state.userListState.userList.find(user => user.login === ownProps.match.params.login)
        : state.userState.user,
    isFetching: state.userState.isFetching
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, any>, ownProps: UserOwnProps): UserDispatchProps => {
  return {
    onGetUser() {
      dispatch(getUser(ownProps.match.params.login));
    },
    onClearUser() {
      dispatch(clearUser());
    }
  };
};

type UserProps = UserState & UserOwnProps & UserDispatchProps;

export class User extends React.PureComponent<UserProps, {}> {
  public componentDidMount(): void {
    if (!this.props.user) {
      this.props.onGetUser();
    }
  }

  public componentWillUnmount(): void {
    this.props.onClearUser();
  }

  public render(): JSX.Element {
    const { user, isFetching, match } = this.props;

    return (
      <div className="text-center">
        <LinkContainer to="/">
          <Button bsStyle="primary" className="m-2" bsSize="large" >Users</Button>
        </LinkContainer>

        <h1>User with login {match.params.login}</h1>

        {user && <div>{user.html_url}</div>}

        {isFetching && <Loader />}
      </div>
    );
  }
}

export const ConnectedUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default ConnectedUser;
