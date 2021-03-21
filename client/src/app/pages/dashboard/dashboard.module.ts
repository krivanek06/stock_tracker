import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {GroupManagementFeatureModule} from '../../features/group-feature/group-management-feature.module';
import {StockTradingFeatureModule} from '../../features/stock-trading-feature/stock-trading-feature.module';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';

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
        GroupManagementFeatureModule,
        StockTradingFeatureModule,
        StockDetailsFeatureModule
    ],
    declarations: [
        DashboardPage
    ]
})
export class DashboardPageModule {
}
