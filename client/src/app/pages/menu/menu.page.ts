import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {NavigationEnd, Router} from '@angular/router';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {StUserPublicData, User_Roles_Enum} from '../../api/customGraphql.service';
import {MenuController} from '@ionic/angular';


interface MenuPageInterface {
    title: string;
    url: string;
    icon: string;
    disabled: boolean;
    hidden: boolean;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage extends ComponentBase implements OnInit, OnDestroy {
    showOverlay = false;
    user: StUserPublicData;
    selectedNavigation: MenuPageInterface;
    mainPages: MenuPageInterface[] = [];
    otherPages: MenuPageInterface[] = [];

    constructor(private authFeatureService: AuthFeatureService,
                private router: Router,
                private menu: MenuController) {
        super();
    }

    ngOnInit() {
        this.initPages();
        this.watchRouterUrlChange();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    dismissMenu() {
        this.menu.close('main');
    }

    applyOverlay(event: boolean) {
        this.showOverlay = event;
    }

    async logout() {
        await this.authFeatureService.logout();
    }

    private watchRouterUrlChange() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this.destroy$)
        ).subscribe((res: NavigationEnd) => {
            let path = res.url.split('/menu/')[1];
            if (!!path) {
                path = path.split('/')[0];
                let page = this.mainPages.find(s => s.title.toLowerCase() === path.toLowerCase());
                if (!page) {
                    page = this.otherPages.find(s => s.title.toLowerCase() === path.toLowerCase());
                }
                this.selectedNavigation = page;
            }
        });
    }

    private initPages() {
        this.authFeatureService.getUser().pipe(
            filter(x => !!x && !!x.userPrivateData),
            distinctUntilChanged((prev, curr) =>
                prev.nickName === curr.nickName &&       // changed nickname
                prev.photoURL === curr.photoURL &&    // changed photo
                prev.userPrivateData.finnhubKey === curr.userPrivateData.finnhubKey &&
                prev.userPrivateData.roles.length === curr.userPrivateData.roles.length
            ),
            takeUntil(this.destroy$)
        ).subscribe(user => {
            this.user = user;
            this.mainPages = [
                {
                    title: 'Dashboard',
                    url: '/menu/dashboard',
                    icon: 'grid-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Market',
                    url: '/menu/market',
                    icon: 'rocket-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Watchlist',
                    url: '/menu/watchlist',
                    icon: 'stats-chart-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Trading',
                    url: '/menu/trading',
                    icon: 'analytics-outline',
                    disabled: !user.userPrivateData.finnhubKey,
                    hidden: false
                },
                {
                    title: 'Search',
                    url: '/menu/search',
                    icon: 'search-outline',
                    disabled: false,
                    hidden: false
                }
            ];

            this.otherPages = [
                {
                    title: 'Account',
                    url: '/menu/account',
                    icon: 'person-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Groups',
                    url: '/menu/groups',
                    icon: 'people-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Ranking',
                    url: '/menu/ranking',
                    icon: 'medal-outline',
                    disabled: false,
                    hidden: false
                },
                {
                    title: 'Admin',
                    url: '/menu/admin',
                    icon: 'finger-print-outline',
                    disabled: false,
                    hidden: !user.userPrivateData.roles.includes(User_Roles_Enum.RoleAdmin)
                },
                {
                    title: 'About',
                    url: '/menu/about',
                    icon: 'help-circle-outline',
                    disabled: false,
                    hidden: false
                },
            ];
        });
    }
}
