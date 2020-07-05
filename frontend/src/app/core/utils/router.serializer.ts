import {StoreModule, ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';
import {RouterStateSnapshot as RSsnapshot} from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer as RSS
} from '@ngrx/router-store';
import {RouterStateUrl as RSU} from '../model/appState';


export interface State {
  router: RouterReducerState<RSU>;
}

export class RouterCustomSerializer implements RSS<RSU> {
  serialize(routerState: RSsnapshot): RSU {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: {queryParams}
    } = routerState;
    const {params} = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {url, params, queryParams};
  }
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const routerSelector = createFeatureSelector<RouterReducerState<RSU>>('router');
export const getQueryParams = createSelector(routerSelector, (state) => state.state.queryParams);