import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { LanguageService, ThemeService } from '@core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

// https://dmitrymogilko.medium.com/profiling-angular-change-detection-c00605862b9f
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	isLoading$: Observable<boolean>;
	private _showLoaderEvents$: Observable<boolean>;
	private _hideLoaderEvents$: Observable<boolean>;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private themeService: ThemeService,
		private languageService: LanguageService,
		private router: Router,
		private applicationRef: ApplicationRef
	) {
		this.initializeApp();
		// this.initLoadingEvents();
		// monitor change detection
		// this.monitorChangeDetection();
	}

	private initLoadingEvents() {
		this._showLoaderEvents$ = this.router.events.pipe(
			filter((e) => e instanceof ResolveStart),
			mapTo(true)
		);

		this._hideLoaderEvents$ = this.router.events.pipe(
			filter((e) => e instanceof ResolveEnd),
			mapTo(true)
		);

		this.isLoading$ = merge(this._showLoaderEvents$, this._hideLoaderEvents$);
	}

	private monitorChangeDetection() {
		const originalTick = this.applicationRef.tick;
		this.applicationRef.tick = function () {
			const windowPerfomance = window.performance;
			const before = windowPerfomance.now();
			const retValue = originalTick.apply(this, arguments);
			const after = windowPerfomance.now();
			const runTime = after - before;
			window.console.log('CHANGE DETECTION TIME', runTime);
			return retValue;
		};
	}

	private initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			this.themeService.enableDark();
			this.languageService.setInitialLanguage();
		});
	}

	ngOnInit() {}
}
