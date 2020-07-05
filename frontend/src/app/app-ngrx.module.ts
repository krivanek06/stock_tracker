import {NgModule} from '@angular/core';
import { RouterCustomSerializer } from './core/utils/router.serializer';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthEffects} from './core/store/auth/auth.effects';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';

import * as fromLoader from './core/store/loading/loader.reducer';
import * as fromAuth from './core/store/auth/auth.reducer';


@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
      loader: fromLoader.reducer,
      auth: fromAuth.reducer
    }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: RouterCustomSerializer
    }),
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    StoreRouterConnectingModule
  ]
})
export class AppNgrxModule { }
