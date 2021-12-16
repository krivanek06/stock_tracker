import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import { DialogServiceModule } from '@shared';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQlModule } from './graph-ql.module';
// import {
// 	ConfirmationPopOverModule,
// 	FinancialChartModalModule,
// 	InlineInputPopUpModule,
// 	OptionPickerPopOverModule
// } from "./shared/entry-components";

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
// 	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

const MY_DATE_FORMATS = {
	parse: {
		dateInput: 'DD.MM.YYYY',
	},
	display: {
		dateInput: 'DD.MM.YYYY',
		monthYearLabel: 'MMMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		// ReactiveFormsModule,
		// FormsModule,
		GraphQlModule,
		//AngularFireModule.initializeApp(environment.firebase), //  as ModuleWithProviders<AngularFireModule>
		// AngularFirestoreModule,
		//AngularFireAuthModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideStorage(() => getStorage()),
		//provideFirestore(() => getFirestore()),
		//provideStorage(() => getStorage()),
		// AngularFireStorageModule,
		MatDatepickerModule,
		MatNativeDateModule,
		// ReactiveFormsModule,
		// MatTooltipModule,
		// MatProgressBarModule,
		// MatDialogModule,
		// MatSnackBarModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		// TranslateModule.forRoot({
		// 	defaultLanguage: 'en',
		// 	loader: {
		// 		provide: TranslateLoader,
		// 		useFactory: HttpLoaderFactory,
		// 		deps: [HttpClient],
		// 	},
		// }),
		// entry points imports
		DialogServiceModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
		// ConfirmationPopOverModule,
		// FinancialChartModalModule,
		// NumberFormatterPipeModule,
		// InlineInputPopUpModule,
		// OptionPickerPopOverModule
	],
	providers: [
		// StatusBar,
		// SplashScreen,
		// { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		MatDatepickerModule,
		MatNativeDateModule,
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
		// { provide: ErrorHandler, useClass: GlobalErrorHandler },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
