import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';
import {AuthGuard} from '../../features/auth-feature/guards/auth.guard';

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
                canActivate: [AuthGuard],
                loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
            },
            {
                path: 'watchlist',
                canActivate: [AuthGuard],
                loadChildren: () => import('../watchlist/watchlist.module').then(m => m.WatchlistPageModule)
            },
            {
                path: 'stock-details/:symbol',
                canActivate: [AuthGuard],
                loadChildren: () => import('../stock-details/stock-details.module').then(m => m.StockDetailsPageModule)
            },
            {
                path: 'trading',
                loadChildren: () => import('../trading/trading.module').then( m => m.TradingPageModule)
            },
            {
                path: 'market',
                loadChildren: () => import('../market/market.module').then( m => m.MarketPageModule)
            },
            {
                path: 'ranking',
                loadChildren: () => import('../ranking/ranking.module').then( m => m.RankingPageModule)
            },
            {
                path: 'about',
                canActivate: [AuthGuard],
                loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
            },
            {
                path: 'admin',
                canActivate: [AuthGuard],
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
