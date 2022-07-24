import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StUserPublicData, UserStorageService } from '@core';
import { MenuPageInfoInterface } from '@menu-feature';
import { BREAK_POINTS } from '@shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {
	user$!: Observable<StUserPublicData>;
	authenticating$!: Observable<boolean>;
	closeScreen$!: Observable<boolean>;
	isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	activePage?: MenuPageInfoInterface;

	constructor(private userStorageService: UserStorageService, private breakpointObserver: BreakpointObserver) {}

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

	toggleMatDrawerExpandedView(): void {
		this.isOpen$.next(!this.isOpen$.value);
	}

	changeHeaderInfo(page: MenuPageInfoInterface): void {
		console.log(page);
		this.activePage = page;
	}
}
