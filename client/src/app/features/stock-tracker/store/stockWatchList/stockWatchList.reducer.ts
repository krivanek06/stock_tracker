import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {StockWatchListTable} from '../../model/tableModel';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {routerSelector} from '../../../../core/utils/router.serializer';
import * as stockWatchListAction from './stockWatchListFirebase.action';



export interface StockWatchList extends EntityState<StockWatchListTable>{

}

/* -------------------------------------------
  ADAPTERS AND REDUCERS
 */
const stockWatchListTableAdapter: EntityAdapter<StockWatchListTable> = createEntityAdapter<StockWatchListTable>();
const initialState: StockWatchList = stockWatchListTableAdapter.getInitialState({});

const stockTrackerReducer = createReducer(
  initialState,
  on(
    stockWatchListAction.getUserWatchListsSuccess,
    (state, {watchLists}) => (stockWatchListTableAdapter.addMany(watchLists, state))
  )
);


export function reducer(state: StockWatchList | undefined, action: Action) {
  return stockTrackerReducer(state, action);
}


/* -------------------------------------------
  SELECTORS
 */

const getStockTrackerState = createFeatureSelector<StockWatchList>('stockTracker');
const getAllEntities = createSelector(getStockTrackerState, (item => item.entities));


export const getAllWatchLists = createSelector(
  getStockTrackerState,
  state => Object.keys(state.entities).map(key => state.entities[key])
);

export const getAllWatchListNames = createSelector(
  getAllWatchLists,
  watchLists => watchLists.map(list => list.name)
);

export const getWatchListById = createSelector(
  getAllEntities,
  routerSelector,
  (entities, router) =>
    router.state && entities[router.state.queryParams.watchList]
);
