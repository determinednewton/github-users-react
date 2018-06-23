import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { fetchUserList, GithubUser } from './../api/github/api';
import { State } from './../store';

export const GET_USER_LIST_REQUEST = 'getUserListRequest';
export const GET_USER_LIST_SUCCESS = 'getUserListSuccess';
export const GET_USER_LIST_FAILURE = 'getUserListFailure';

export type GetUserListRequestAction = Action<typeof GET_USER_LIST_REQUEST> & { since?: number };
export type GetUserListSuccessAction = Action<typeof GET_USER_LIST_SUCCESS> & { users: GithubUser[] };
export type GetUserListFailureAction = Action<typeof GET_USER_LIST_FAILURE>;

export const getUserListRequest = (since?: number): GetUserListRequestAction => ({
  type: GET_USER_LIST_REQUEST,
  since
});

export const getUserListSuccess = (users: GithubUser[]): GetUserListSuccessAction => ({
  type: GET_USER_LIST_SUCCESS,
  users
});

export const getUserListFailure = (): GetUserListFailureAction => ({
  type: GET_USER_LIST_FAILURE
});

export const getUserList = (since?: number) => (dispatch: ThunkDispatch<State, any, any>) => {
  dispatch(getUserListRequest(since));

  fetchUserList(since).then(users => dispatch(getUserListSuccess(users)), () => dispatch(getUserListFailure()));
};
