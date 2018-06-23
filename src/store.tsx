import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { GithubUser } from './api/github/api';
import { rootReducer } from './reducers/rootReducer';

export interface UserListState {
  isFetching?: boolean;
  userList?: GithubUser[];
}

export interface UserState {
  isFetching?: boolean;
  user?: GithubUser;
}

export interface State {
  userListState: UserListState;
  userState: UserState;
}

export const configureStore = (
  history: History,
  preloadedState: State = { userListState: {}, userState: {} }
): Store<State> =>
  createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
