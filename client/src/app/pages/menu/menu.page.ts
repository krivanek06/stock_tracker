import {Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {NavigationEnd, Router} from '@angular/router';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {filter, takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {StUserPublicData} from '../../api/customGraphql.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage extends ComponentBase implements OnInit {
    user$: Observable<StUserPublicData>;
    selectedNavigation = '';
    mainPages = [
        {
            title: 'Dashboard',
            url: '/menu/dashboard',
            icon: 'grid-outline'
        },
        {
            title: 'Market',
            url: '/menu/market',
            icon: 'rocket-outline'
        },
        {
            title: 'Watchlist',
            url: '/menu/watchlist',
            icon: 'stats-chart-outline'
        },
        {
            title: 'Trading',
            url: '/menu/trading',
            icon: 'analytics-outline'
        },
        {
            title: 'Search',
            url: '/menu/search',
            icon: 'search-outline'
        }
    ];

    otherPages = [
        {
            title: 'Account',
            url: '/menu/account',
            icon: 'person-outline'
        },
        {
            title: 'Groups',
            url: '/menu/groups',
            icon: 'people-outline'
        },
        {
            title: 'Ranking',
            url: '/menu/ranking',
            icon: 'medal-outline'
        },
        {
            title: 'Admin',
            url: '/menu/admin',
            icon: 'finger-print-outline'
        },
        {
            title: 'About',
            url: '/menu/about',
            icon: 'help-circle-outline'
        },
    ];


    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
        super();
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
        this.watchRouterUrlChange();
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
                this.selectedNavigation = path.toLowerCase();
            }
        });
    }

}
