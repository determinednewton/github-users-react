import { combineReducers, Reducer } from 'redux';

import { State } from '../store';
import { UserListState, UserState } from './../store';

export const rootReducer: Reducer<State> = combineReducers<State>({
  userListState: (): UserListState => {
    return {};
  },
  userState: (): UserState => {
    return {};
  }
});
