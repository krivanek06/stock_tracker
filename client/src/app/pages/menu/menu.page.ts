import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService, componentDestroyed, StUserPublicData, UserStorageService, User_Roles_Enum } from '@core';
import { MenuController, PopoverController } from '@ionic/angular';
import { AuthenticationPopoverComponent } from '@login-feature';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface MenuPageInterface {
	title: string;
	url: string;
	icon: string;
	disabled: boolean;
	hidden: boolean;
	highlight?: boolean;
	highlightText?: string;
}

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {
	user$: Observable<StUserPublicData>;
	authenticating$: Observable<boolean>;

	showOverlay = false;
	selectedNavigation: MenuPageInterface;
	mainPages: MenuPageInterface[] = [];
	otherPages: MenuPageInterface[] = [];

	version = environment.version;

	constructor(
		private userStorageService: UserStorageService,
		private authenticationService: AuthenticationService,
		private popoverController: PopoverController,
		private router: Router,
		private route: ActivatedRoute,
		private menu: MenuController
	) {}

	ngOnDestroy(): void {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.authenticating$ = this.userStorageService.getIsAuthenticating();

		this.initPages();
		this.watchRouterUrlChange();
	}

	dismissMenu() {
		this.menu.close('main');
	}

	applyOverlay(event: boolean) {
		this.showOverlay = event;
	}

	clickedRouter(page: MenuPageInterface) {
		this.selectedNavigation = page;
		this.router.navigateByUrl(page.url);
	}

	async showLoginModal() {
		const modal = await this.popoverController.create({
			component: AuthenticationPopoverComponent,
			cssClass: 'custom-popover',
			translucent: true,
		});

		return await modal.present();
	}

	async logout() {
		await this.authenticationService.logout();
	}

	private watchRouterUrlChange() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((res: NavigationEnd) => {
				let path = res.url.split('/menu/')[1];

				if (!!path) {
					path = path.split('/')[0];
					let page = this.mainPages.find((s) => s.title.toLowerCase() === path.toLowerCase());
					if (!page) {
						page = this.otherPages.find((s) => s.title.toLowerCase() === path.toLowerCase());
					}
					this.selectedNavigation = page;
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
			.subscribe((user) => {
				this.mainPages = [
					{
						title: 'Dashboard',
						url: '/menu/dashboard',
						icon: 'grid-outline',
						disabled: !user,
						hidden: false,
					},
					{
						title: 'Market',
						url: '/menu/market',
						icon: 'rocket-outline',
						disabled: false,
						hidden: false,
					},
					{
						title: 'Watchlist',
						url: '/menu/watchlist',
						icon: 'stats-chart-outline',
						disabled: !user,
						hidden: false,
					},
					{
						title: 'Trading',
						url: '/menu/trading',
						icon: 'analytics-outline',
						disabled: !user || !user.userPrivateData.finnhubKey,
						hidden: false,
					},
					{
						title: 'Search',
						url: '/menu/search',
						icon: 'search-outline',
						disabled: false,
						hidden: false,
					},
				];

				this.otherPages = [
					{
						title: 'Account',
						url: '/menu/account',
						icon: 'person-outline',
						disabled: !user,
						hidden: false,
						highlight: user?.userPrivateData && !user?.userPrivateData?.finnhubKey,
						highlightText: 'Trading not activated yet. Follow the instructions on your profile to active your trading account',
					},
					{
						title: 'Groups',
						url: '/menu/groups',
						icon: 'people-outline',
						disabled: false,
						hidden: false,
					},
					/*{
                    title: 'Ranking',
                    url: '/menu/ranking',
                    icon: 'medal-outline',
                    disabled: false,
                    hidden: false
                },*/
					{
						title: 'Admin',
						url: '/menu/admin',
						icon: 'finger-print-outline',
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
