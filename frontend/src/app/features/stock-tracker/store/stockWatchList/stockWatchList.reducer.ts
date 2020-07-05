import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {StockWatchListTable} from '../../model/tableModel';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {routerSelector} from '../../../../core/utils/router.serializer';
import * as stockWatchListAction from './stockWatchList.action';
import {selectStockWatchListState} from '../index';



export interface StockWatchListState extends EntityState<StockWatchListTable>{

}

/* -------------------------------------------
  ADAPTERS AND REDUCERS
 */
const stockWatchListTableAdapter: EntityAdapter<StockWatchListTable> = createEntityAdapter<StockWatchListTable>();
const initialState: StockWatchListState = stockWatchListTableAdapter.getInitialState({});

const stockTrackerReducer = createReducer(
  initialState,
  on(
    stockWatchListAction.getUserWatchListsSuccess,
    (state, {watchLists}) => (stockWatchListTableAdapter.addMany(watchLists, state))
  ),
  on(
    stockWatchListAction.createWatchListSuccess,
    (state, {watchList}) => stockWatchListTableAdapter.addOne(watchList, state)
  ),
  on(
    stockWatchListAction.addSymbolToWatchlistSuccess,
    (state, {watchListId, data}) =>
      stockWatchListTableAdapter.updateOne({
        id: watchListId,
        changes: {
          ...state,
          stocks: [...state.entities[watchListId].stocks, data]
        }
      }, state)
  )
);


export function reducer(state: StockWatchListState | undefined, action: Action) {
  return stockTrackerReducer(state, action);
}


/* -------------------------------------------
  SELECTORS
 */

const getAllEntities = createSelector(selectStockWatchListState, (item => item.entities));


export const getAllWatchLists = createSelector(
  selectStockWatchListState,
  state => Object.keys(state.entities).map(key => state.entities[key])
);

export const getWatchListById = createSelector(
  getAllEntities,
  routerSelector,
  (entities, router) =>
    router.state && entities[router.state.queryParams.watchList]
);
