
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as LoaderAction from './loader.action';
import {Loading} from '../../model/appState';

const initialState: Loading = {
  loading: false,
};

// Reducer
export const loaderReducer = createReducer(
  initialState,
  on(LoaderAction.loadingStart, (state) => ({...state, loading: true})),
  on(LoaderAction.loadingFinished, (state) => ({...state, loading: false}))
);


export function reducer(state: Loading | undefined, action: Action) {
  return loaderReducer(state, action);
}



// Selectors
export const getLoadingState = createFeatureSelector<Loading>('loader');
export const isLoading = createSelector(getLoadingState, (state) => state.loading);


