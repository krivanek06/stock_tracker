import {Auth} from '../../model/appState';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as authAction from './auth.action';

const initialState: Auth = {
  user: undefined,
};

const authReducer = createReducer(
  initialState,
  on(authAction.authenticated, (state, {payload}) => ({...state, user: payload})),
  on(authAction.notAuthenticated, () => (initialState)),
);


export function reducer(state: Auth | undefined, action: Action) {
  return authReducer(state, action);
}

const userState = createFeatureSelector<Auth>('auth');
export const user = createSelector(userState, (state) => state.user);

