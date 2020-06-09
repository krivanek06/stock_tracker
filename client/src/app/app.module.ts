import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppNgrxModule} from './app-ngrx.module';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material.module';
import {environment} from '../environments/environment';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {LoginComponent} from './core/components/login/login.component';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import * as fromLoader from './core/store/loading/loader.reducer';
import * as fromAuth from './core/store/auth/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './core/store/auth/auth.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterCustomSerializer} from './core/utils/router.serializer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppNgrxModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MaterialModule.forRoot(),
    MatPasswordStrengthModule.forRoot(),

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

    // Firebase
    AngularFireModule.initializeApp(environment.firebase), //  as ModuleWithProviders<AngularFireModule>
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      null,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthSuccess: true,
        toastMessageOnAuthError: true,
        authGuardLoggedInURL: 'dashboard'
      }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
