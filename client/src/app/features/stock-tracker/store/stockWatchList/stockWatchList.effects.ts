import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {catchError, combineLatest, filter, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../core/model/appState';
import {FirebaseApiService} from '../../../../core/api/firebase-api.service';
import {StockWatchListTable} from '../../model/tableModel';

import * as fromAuth from '../../../../core/store/auth/auth.reducer';
import * as stockWatchlistAction from './stockWatchListFirebase.action';

@Injectable()
export class StockTrackerEffects {
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private firebaseApiService: FirebaseApiService) {
  }


  getUserWatchLists$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(stockWatchlistAction.getUserWatchLists),
    combineLatest(this.store.select(fromAuth.user)),
    filter(([_, user]) => !!user),
    switchMap(([_, user]) => this.firebaseApiService.getUserWatchLists(user?.uid).get().pipe(
      map(actions => {
        return actions.docs.map(doc => {
          const data: StockWatchListTable = doc.data() as StockWatchListTable;
          data.id = doc.id;
          return data;
        });
      }),
      map(watchLists => stockWatchlistAction.getUserWatchListsSuccess({watchLists})),
      catchError(error => of(stockWatchlistAction.getUserWatchListsFailure({error})))
    ))
  ));




}
