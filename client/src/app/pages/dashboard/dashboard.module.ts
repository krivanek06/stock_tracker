import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {MarketMovementContainerComponent} from './container/market-movement-container/market-movement-container.component';
import {Sp500ChartsContainerComponent} from './container/sp500-charts-container/sp500-charts-container.component';
import {EconomicChartsContainerComponent} from './container/economic-charts-container/economic-charts-container.component';
import {DashboardNewsComponent} from './container/dashboard-news/dashboard-news.component';
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
        DashboardPage,
        MarketMovementContainerComponent,
        Sp500ChartsContainerComponent,
        EconomicChartsContainerComponent,
        DashboardNewsComponent
    ]
})
export class DashboardPageModule {
}
