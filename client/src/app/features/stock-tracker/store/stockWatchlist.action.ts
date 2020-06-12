import {createAction, props} from '@ngrx/store';
import {StockWatchListTable} from '../model/tableModel';

export const getUserWatchLists = createAction(
  '[Stock Tracker] get user watch list '
);

export const getUserWatchListsSuccess = createAction(
  '[Stock Tracker] get user watch list success',
  props<{watchLists: StockWatchListTable[]}>()
);

export const getUserWatchListsFailure = createAction(
  '[Stock Tracker] get user watch list failure',
  props<{error: Error}>()
);
