import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupStorageService, StUserPublicData, UserStorageService } from '@core';
import { MenuController, NavController } from '@ionic/angular';
import { BREAK_POINTS } from '@shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {
	user$: Observable<StUserPublicData>;
	authenticating$: Observable<boolean>;

	// showOverlay = false;

	activeRoutes$!: Observable<string[]>;
	// isExpanded = true;
	closeScreen$!: Observable<boolean>;
	isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

	constructor(
		private userStorageService: UserStorageService,
		private router: Router,
		private menu: MenuController,
		private navCtrl: NavController,
		private groupStorageService: GroupStorageService,
		private breakpointObserver: BreakpointObserver,
		private cd: ChangeDetectorRef
	) {}

	ngOnDestroy(): void {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.authenticating$ = this.userStorageService.getIsAuthenticating();

		// this.activeRoutes$ = this.menuNavigationService.getRouterSectionsInArray();
		this.closeScreen$ = this.breakpointObserver.observe([BREAK_POINTS.XL_DOWN]).pipe(map((x) => x.matches));

		// need to show sidenav if view is large
		this.closeScreen$.subscribe((isMdDownScreen) => {
			if (!isMdDownScreen && !this.isOpen$.value) {
				this.toggleMatDrawerExpandedView();
			}
		});
	}

	// toggleExpandedView(): void {
	// 	this.isExpanded = !this.isExpanded;

	// 	// needed becuase when isExpanded is false, mat-drawer is still expanded
	// 	this.cd.detectChanges();
	// }

	toggleMatDrawerExpandedView(): void {
		this.isOpen$.next(!this.isOpen$.value);
	}

	// dismissMenu() {
	// 	this.menu.close('main');
	// }

	// applyOverlay(event: boolean) {
	// 	this.showOverlay = event;
	// }

	// clickedRouter(page: MenuPageInterface) {
	// 	this.selectedNavigation = page;
	// 	this.groupStorageService.setActiveGroupId(null);
	// 	//this.router.navigateByUrl(page.url, { replaceUrl: true });
	// 	this.navCtrl.navigateRoot(page.url, { animated: true, animationDirection: 'forward' });
	// }

	// closeOverlay() {
	// 	this.applyOverlay(false);
	// 	this.dismissMenu();
	// }
}
