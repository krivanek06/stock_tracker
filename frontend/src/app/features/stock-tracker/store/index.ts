import * as fromStockWatchList from './stockWatchList/stockWatchList.reducer';
import {AppState} from '../../../core/model/appState';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface StockTrackerModuleState {
  stockWatchList: fromStockWatchList.StockWatchListState;
}


export interface StockTrackerState extends AppState {
  stockTrackerModule: StockTrackerModuleState;
}

/*
  REDUCERS
 */

export const reducers = {
  stockWatchList: fromStockWatchList.reducer,
};

export const selectStockTrackerModuleState = createFeatureSelector<StockTrackerModuleState>('stockTrackerModule');
export const selectStockWatchListState = createSelector(
  selectStockTrackerModuleState,
  (state) => state.stockWatchList
);
