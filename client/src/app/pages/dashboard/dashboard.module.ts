import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {GroupFeatureModule} from '../../features/group-feature/group-feature.module';
import {StockTradingFeatureModule} from '../../features/stock-trading-feature/stock-trading-feature.module';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {PagesSharedModule} from '@pages-shared';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        StockWatchlistModule,
        SharedModule,
        RouterModule.forChild(routes),
        GroupFeatureModule,
        StockTradingFeatureModule,
        StockDetailsFeatureModule,
        PagesSharedModule
    ],
    declarations: [
        DashboardPage
    ]
})
export class DashboardPageModule {
}
