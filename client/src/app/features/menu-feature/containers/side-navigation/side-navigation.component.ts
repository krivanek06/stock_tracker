import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService, componentDestroyed, StUserPublicData, UserStorageService, User_Roles_Enum } from '@core';
import { AuthenticationPopoverComponent } from '@login-feature';
import { DialogService } from '@shared';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { MenuPageInfoInterface, MenuPageInterface } from '../../model';

@Component({
	selector: 'app-side-navigation',
	templateUrl: './side-navigation.component.html',
	styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit, OnDestroy {
	@Output() clickedNavigationEmitter: EventEmitter<MenuPageInfoInterface> = new EventEmitter<MenuPageInfoInterface>();
	@Input() user!: StUserPublicData | null;
	@Input() authenticating!: boolean | null;

	selectedNavigation?: MenuPageInterface;
	mainPages: MenuPageInterface[] = [];
	otherPages: MenuPageInterface[] = [];

	constructor(
		private authenticationService: AuthenticationService,
		private userStorageService: UserStorageService,
		private dialog: MatDialog,
		private router: Router
	) {}

	ngOnInit(): void {
		this.initPages();
		this.watchRouterUrlChange();

		const urls = this.router.url.split('/'); // ['', 'menu', 'search']
		if (urls.length >= 3) {
			const currentUrl = urls[2];
			this.selectedNavigation = this.mainPages.find((s) => s.title.toLowerCase() === currentUrl);
			this.clickedNavigationEmitter.emit(this.selectedNavigation);
		}
	}

	ngOnDestroy(): void {}

	clickedRouter(page: MenuPageInterface) {
		this.clickedNavigationEmitter.emit(page);
		this.router.navigateByUrl(page.url);
	}

	async logout() {
		await this.authenticationService.logout();
		DialogService.showNotificationBar('You have been successfully logged out');
	}

	showLoginModal() {
		this.dialog.open(AuthenticationPopoverComponent, { panelClass: 'g-mat-dialog' });
	}

	private watchRouterUrlChange() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((res) => {
				const navigation = res as NavigationEnd;
				let path = navigation.url.split('/menu/')[1];

				if (!!path) {
					path = path.split('/')[0];
					let page = this.mainPages.find((s) => s.title.toLowerCase() === path.toLowerCase());
					if (!page) {
						page = this.otherPages.find((s) => s.title.toLowerCase() === path.toLowerCase());
					}
					this.selectedNavigation = page;
					this.clickedNavigationEmitter.emit(page);
				}
			});
	}

	private initPages() {
		this.userStorageService
			.getUser()
			.pipe(
				/*filter(x => !!x && !!x.userPrivateData),*/
				distinctUntilChanged(
					(prev, curr) =>
						prev?.nickName === curr?.nickName && // changed nickname
						prev?.photoURL === curr?.photoURL && // changed photo
						prev?.userPrivateData.finnhubKey === curr?.userPrivateData?.finnhubKey &&
						prev?.userPrivateData.roles.length === curr?.userPrivateData?.roles?.length
				),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((user: StUserPublicData) => {
				this.mainPages = [
					{
						title: 'Dashboard',
						url: '/menu/dashboard',
						icon: 'grid_view',
						disabled: !user,
						hidden: false,
					},
					{
						title: 'Market',
						url: '/menu/market',
						icon: 'rocket_launch',
						disabled: false,
						hidden: false,
					},
					{
						title: 'Watchlist',
						url: '/menu/watchlist',
						icon: 'assessment',
						disabled: !user,
						hidden: false,
					},
					{
						title: 'Trading',
						url: '/menu/trading',
						icon: 'analytics',
						disabled: !user || !user.userPrivateData.finnhubKey,
						hidden: false,
					},
					{
						title: 'Search',
						url: '/menu/search',
						icon: 'search',
						disabled: false,
						hidden: false,
					},
				];

				this.otherPages = [
					{
						title: 'Account',
						url: '/menu/account',
						icon: 'person',
						disabled: !user,
						hidden: false,
						highlight: user?.userPrivateData && !user?.userPrivateData?.finnhubKey,
						highlightText: 'Trading is not activated yet. Follow the instructions on your profile to active your trading account',
					},
					{
						title: 'Groups',
						url: '/menu/groups',
						icon: 'people',
						disabled: !user || !user.userPrivateData.finnhubKey,
						hidden: false,
					},
					{
						title: 'Hall-of-fame',
						url: '/menu/hall-of-fame',
						icon: 'military_tech',
						disabled: false,
						hidden: false,
					},
					{
						title: 'Admin',
						url: '/menu/admin',
						icon: 'fingerprint',
						disabled: !user,
						hidden: !user || !user.userPrivateData.roles.includes(User_Roles_Enum.RoleAdmin),
					},
					/* {
                     title: 'About',
                     url: '/menu/about',
                     icon: 'help-circle-outline',
                     disabled: false,
                     hidden: false
                 },*/
				];
			});
	}
}
