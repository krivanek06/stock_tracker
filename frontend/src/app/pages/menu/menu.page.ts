import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/model/appState';
import {Observable} from 'rxjs';
import {IUser} from '../../core/model/userModel';
import {user} from '../../core/store/auth/auth.reducer';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    selectedIndex = 0;
    appPages = [
        {
            title: 'Dashboard',
            url: '/menu/dashboard',
            icon: 'grid-outline'
        },
        {
            title: 'Watch list',
            url: '/menu/watchlist',
            icon: 'stats-chart-outline'
        },
        {
            title: 'Simulator',
            url: '/menu/simulator',
            icon: 'trending-up-outline'
        },
        {
            title: 'About',
            url: '/menu/about',
            icon: 'help-circle-outline'
        },
        {
            title: 'Admin',
            url: '/menu/admin',
            icon: 'finger-print-outline'
        },
    ];

    user$: Observable<IUser>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.user$ = this.store.select(user);
        const path = window.location.pathname.split('/menu/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

}
