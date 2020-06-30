import {createAction, props} from '@ngrx/store';
import {StockTableData, StockWatchListTable} from '../../model/tableModel';

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

// ------------------------
export const createWatchList = createAction(
  '[Stock Tracker] create watchList',
  props<{name: string}>()
);

export const createWatchListSuccess = createAction(
  '[Stock Tracker] create watchList success',
);

export const createWatchListFailure = createAction(
  '[Stock Tracker] create watchList failure',
  props<{error: Error}>()
);

// ------------------------

export const addSymbolToWatchlist = createAction(
  '[Stock Tracker] add symbol to watchlist',
  props<{ stockTableData: StockTableData}>()
);

export const addSymbolToWatchlistSuccess = createAction(
  '[Stock Tracker] add symbol to watchlist success'
);

export const addSymbolToWatchlistFailure = createAction(
  '[Stock Tracker] add symbol to watchlist failure',
  props<{error: Error}>()
);

// ------------------------

export const getStockTableData = createAction(
  '[Stock Tracker] get table data for stock',
  props<{symbol: string}>()
);

export const getStockTableDataSuccess = createAction(
  '[Stock Tracker] get table data for stock success',
  props<{stockTableData: StockTableData}>()
);

export const getStockTableDataFailure = createAction(
  '[Stock Tracker] get table data for stock failure',
  props<{error: Error}>()
);



