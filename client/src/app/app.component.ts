import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { ThemeService } from '@core';
import { DialogService } from '@shared';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

// https://dmitrymogilko.medium.com/profiling-angular-change-detection-c00605862b9f
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	isLoading$!: Observable<boolean>;
	private _showLoaderEvents$!: Observable<boolean>;
	private _hideLoaderEvents$!: Observable<boolean>;

	constructor(
		// private platform: Platform,
		// private splashScreen: SplashScreen,
		// private statusBar: StatusBar,
		private themeService: ThemeService,
		// private languageService: LanguageService,
		private router: Router,
		private applicationRef: ApplicationRef,
		private updates: SwUpdate,
		ionicDialogService: DialogService
	) {
		this.initializeApp();
		// this.initLoadingEvents();
		// monitor change detection
		// this.monitorChangeDetection();
		this.monitorSoftwareUpdate(); // needed to reload app if new version is available for service workers
	}

	private monitorSoftwareUpdate(): void {
		this.updates.available.subscribe((event) => {
			console.log('current version is', event.current);
			console.log('available version is', event.available);
		});
		this.updates.activated.subscribe((event) => {
			console.log('old version was', event.previous);
			console.log('new version is', event.current);
		});

		this.updates.available.subscribe((event) => {
			this.updates.activateUpdate().then(() => {
				document.location.reload();
				console.log('The app is updating right now');
			});
		});
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
			const retValue = originalTick.apply(this, []);
			const after = windowPerfomance.now();
			const runTime = after - before;
			window.console.log('CHANGE DETECTION TIME', runTime);
			return retValue;
		};
	}

	private initializeApp() {
		this.themeService.enableDark();

		// this.platform.ready().then(() => {
		// 	this.statusBar.styleDefault();
		// 	this.splashScreen.hide();

		// 	this.languageService.setInitialLanguage();
		// });
	}

	ngOnInit() {}
}
