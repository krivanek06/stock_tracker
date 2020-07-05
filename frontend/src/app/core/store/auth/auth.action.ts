import {createAction, props} from '@ngrx/store';


export const getUser = createAction('[Auth] get user');
export const authenticated = createAction('[Auth] authenticated', props<{payload: any}>());
export const notAuthenticated = createAction('[Auth] not authenticated');
export const logout = createAction('[Auth] logout');