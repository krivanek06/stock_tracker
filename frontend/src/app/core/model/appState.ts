import {RouterReducerState} from '@ngrx/router-store';
import {Params} from '@angular/router';
import {IUser} from './userModel';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: Auth;
  loader: Loading;
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

