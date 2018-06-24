import * as React from 'react';
import { PureComponent } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { ThunkDispatch } from 'redux-thunk';

import { getNextUserList, getUserList } from '../actions/userListActions';
import { State, UserListState } from '../store';
import { Loader } from './Loader';

interface UserListDispatchProps {
  onReloadUserList: () => void;
  onLoadUserList: () => void;
}

const mapStateToProps = (state: State): UserListState => {
  return {
    userList: state.userListState.userList,
    isFetching: state.userListState.isFetching,
    canFetchMore: state.userListState.canFetchMore
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, any>): UserListDispatchProps => {
  return {
    onReloadUserList() {
      dispatch(getUserList());
    },
    onLoadUserList() {
      dispatch(getNextUserList());
    }
  };
};

type UserListProps = UserListState & UserListDispatchProps;

export class UserList extends PureComponent<UserListProps, {}> {
  public componentDidMount(): void {
    if (!this.props.userList) {
      this.handleReloadUsers();
    }
  }

  public componentWillUnmount(): void {
    // this.props.onLeavePlansContext();
  }

  public render(): JSX.Element {
    const { userList, isFetching, canFetchMore } = this.props;

    return (
      <div className="text-center">
        <h1>User List</h1>

        {userList && (
          <>
            <Button bsStyle="primary" className="m-2" bsSize="large" onClick={this.handleReloadUsers}>Reload Users</Button>
            {userList.map(user => (
              <div key={user.id}>
                <div>{user.login}</div>
                <LinkContainer to={`/user/${user.login}`}>
                  <Button bsStyle="info" bsSize="large">Details</Button>
                </LinkContainer>
              </div>
            ))}
          </>
        )}

        {isFetching && <Loader />}

        {canFetchMore && !isFetching && <Button bsStyle="primary" className="m-2" bsSize="large" onClick={this.handleLoadUsers}>Load More Users</Button>}
      </div>
    );
  }

  private handleReloadUsers = (): void => {
    this.props.onReloadUserList();
  };

  private handleLoadUsers = (): void => {
    this.props.onLoadUserList();
  };
}

export const ConnectedUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default ConnectedUserList;
