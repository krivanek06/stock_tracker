import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';
import {LoggedInGuard} from 'ngx-auth-firebaseui';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
            },
            {
                path: 'watchlist',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../watchlist/watchlist.module').then(m => m.WatchlistPageModule)
            },
            {
                path: 'stock-details/:symbol',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../stock-details/stock-details.module').then(m => m.StockDetailsPageModule)
            },
            {
                path: 'simulator',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../simulator/simulator.module').then(m => m.SimulatorPageModule)
            },
            {
                path: 'about',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
            },
            {
                path: 'admin',
                canActivate: [LoggedInGuard],
                loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
