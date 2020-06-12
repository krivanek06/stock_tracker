import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {StockWatchListTable} from '../model/tableModel';
import {StockTracker} from '../../../core/model/appState';
import {Action, createReducer, on} from '@ngrx/store';

import * as stockWatchListAction from './stockWatchlist.action';

const stockWatchListTableAdapter: EntityAdapter<StockWatchListTable> = createEntityAdapter<StockWatchListTable>();
const initialState: StockTracker = stockWatchListTableAdapter.getInitialState({});

const stockTrackerReducer = createReducer(
  initialState,
  on(
    stockWatchListAction.getUserWatchListsSuccess,
    (state, {watchLists}) => (stockWatchListTableAdapter.addMany(watchLists, state))
  )
);



export function reducer(state: StockTracker | undefined, action: Action) {
  return stockTrackerReducer(state, action);
}
