import {RouterReducerState} from '@ngrx/router-store';
import {Params} from '@angular/router';
import {IUser} from './userModel';
import {StockWatchListTable} from '../../features/stock-tracker/model/tableModel';
import {EntityState} from '@ngrx/entity';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: Auth;
  loader: Loading;
  stockTracker: StockTracker;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface Auth {
  user: IUser;
}


export interface Loading {
  loading: boolean;
}

export interface StockTracker extends EntityState<StockWatchListTable>{

}
