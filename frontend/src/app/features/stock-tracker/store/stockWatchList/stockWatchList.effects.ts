import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {catchError, filter, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../core/model/appState';
import {FirebaseApiService} from '../../../../core/api/firebase-api.service';
import {StockWatchListTable} from '../../model/tableModel';

import * as fromAuth from '../../../../core/store/auth/auth.reducer';
import * as stockWatchlistAction from './stockWatchList.action';
import {StockApiService} from '../../../../core/api/stock-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class StockWatchList {
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private snackBar: MatSnackBar,
              private stockApiService: StockApiService,
              private stockFirebaseService: FirebaseApiService,
              private firebaseApiService: FirebaseApiService) {
  }


  getUserWatchLists$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(stockWatchlistAction.getUserWatchLists),
    switchMap(() =>
      combineLatest(
        this.store.select(fromAuth.user)
      ).pipe(
        filter(([user]) => !!user),
        switchMap(([user]) => this.firebaseApiService.getUserWatchLists(user?.uid).get().pipe(
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
      ))
  ));

  addSymbolIntoWatchList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(stockWatchlistAction.addSymbolToWatchlist),
    switchMap(action => this.stockApiService.getStockTableData(action.symbol).pipe(
      map(data => {
        return {...data, name: action.name}; // add name into stock data
      }),
      switchMap((data) => this.stockFirebaseService.updateSymbolIntoWatchList(action.watchListId, data)
        .pipe(
          tap(() =>
            this.snackBar.open(`${action.symbol} has been added into ${action.name} watch list`,
              'success',
              {duration: 1500, horizontalPosition: 'right', verticalPosition: 'top'}
            )),
          map(() => stockWatchlistAction.addSymbolToWatchlistSuccess({watchListId: action.watchListId, data})),
          catchError((error) => of(stockWatchlistAction.addSymbolToWatchlistFailure({error})))
        ))
    ))
  ));


  createWatchList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(stockWatchlistAction.createWatchList),
    switchMap(action =>
      combineLatest(
        of(action.name),
        this.store.select(fromAuth.user)
      ).pipe(
        map(([name, user]) => {
          const data: StockWatchListTable = {
            name,
            stocks: [],
            timestamp: new Date().getTime(),
            userId: user.uid
          };
          return data;
        }),
        switchMap(data => this.stockFirebaseService.createWatchList(data).pipe(
          map(res => {
            return {...data, id: res.id};
          }),
          tap(() =>
            this.snackBar.open('New watch list has been created',
              'success',
              {duration: 1500, horizontalPosition: 'right', verticalPosition: 'top'}
            )),
          map((watchList) => stockWatchlistAction.createWatchListSuccess({watchList})),
          catchError(error => of(stockWatchlistAction.createWatchListFailure({error})))
        ))
      ))
  ));


}
