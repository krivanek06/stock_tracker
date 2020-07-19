import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppState} from '../../model/appState';
import {Action, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as authAction from './auth.action';
import {FirebaseApiService} from '../../api/firebase-api.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
                private router: Router,
                private store: Store<AppState>,
                private afAuth: AngularFireAuth,
                private firebaseApiService: FirebaseApiService) {
    }


    getUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(authAction.getUser),
        switchMap(() => this.afAuth.authState.pipe(
            switchMap(auth => this.firebaseApiService.getUserDoc(auth.uid).valueChanges().pipe(
                map(payload => authAction.authenticated({payload})),
                tap(() => this.router.navigate(['/menu/stock-details/MSFT'])),
            )),
            catchError(() => of(authAction.logout()))
        ))
    ));


    logout$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(authAction.logout),
        tap(() => this.afAuth.signOut()),
        tap(() => this.router.navigate(['/login'])),
        map(() => authAction.notAuthenticated()),
    ));


}
