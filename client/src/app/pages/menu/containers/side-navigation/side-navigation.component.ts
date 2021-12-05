import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService, componentDestroyed, StUserPublicData, UserStorageService, User_Roles_Enum } from '@core';
import { PopoverController } from '@ionic/angular';
import { AuthenticationPopoverComponent } from '@login-feature';
import { DialogService } from '@shared';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { environment } from './../../../../../environments/environment.prod';

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
	selector: 'app-side-navigation',
	templateUrl: './side-navigation.component.html',
	styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit, OnDestroy {
	@Output() closeEmitter: EventEmitter<void> = new EventEmitter<void>();

	@Input() showMenuButton!: boolean;
	@Input() user: StUserPublicData;
	@Input() authenticating: boolean;

	selectedNavigation: MenuPageInterface;
	mainPages: MenuPageInterface[] = [];
	otherPages: MenuPageInterface[] = [];

	version = environment.version;

	constructor(
		private authenticationService: AuthenticationService,
		private userStorageService: UserStorageService,
		private popoverController: PopoverController,
		private router: Router
	) {}

	ngOnInit(): void {
		this.initPages();
		this.selectedNavigation = this.mainPages.find((s) => s.title.toLowerCase() === 'market');
		this.watchRouterUrlChange();
	}

	ngOnDestroy(): void {}

	clickedRouter(page: MenuPageInterface) {
		// this.selectedNavigation = page;
		// this.groupStorageService.setActiveGroupId(null);
		// //this.router.navigateByUrl(page.url, { replaceUrl: true });
		// this.navCtrl.navigateRoot(page.url, { animated: true, animationDirection: 'forward' });
		this.router.navigateByUrl(page.url);
	}

	dismissMenu() {
		this.closeEmitter.emit();
	}

	async logout() {
		await this.authenticationService.logout();
		DialogService.showNotificationBar('You have been successfully logged out');
	}

	async showLoginModal() {
		const modal = await this.popoverController.create({
			component: AuthenticationPopoverComponent,
			cssClass: 'custom-popover',
			translucent: true,
		});

		return await modal.present();
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
