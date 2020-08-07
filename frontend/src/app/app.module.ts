import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppNgrxModule} from './app-ngrx.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import {environment} from '../environments/environment';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {AngularFireStorageModule} from '@angular/fire/storage';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

/* scroll */
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {GraphQlModule} from './graph-ql.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

/*----------------*/

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        AppNgrxModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MaterialModule.forRoot(),
        GraphQlModule,
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

        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        MatPasswordStrengthModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
