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
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppNgrxModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MaterialModule.forRoot(),
    MatPasswordStrengthModule.forRoot(),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase), //  as ModuleWithProviders<AngularFireModule>
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      null,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthError: true,
        authGuardLoggedInURL: 'login',
      }
    ),

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
