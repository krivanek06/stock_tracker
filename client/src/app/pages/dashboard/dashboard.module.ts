import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '@stock-watchlist-feature';
import {SharedModule} from 'src/app/shared/shared.module';
import {GroupFeatureModule} from '@group-feature';
import {StockTradingFeatureModule} from '@stock-trading-feature';
import {StockDetailsFeatureModule} from '@stock-details-feature';
import {PagesSharedModule} from '@pages-shared';
import {DashboardTransactionsComponent} from './dashboard-transactions/dashboard-transactions.component';
import {DashboardHoldingsAllocationComponent} from './dashboard-holdings-allocation/dashboard-holdings-allocation.component';
import {DashboardHoldingsTableComponent} from './dashboard-holdings-table/dashboard-holdings-table.component';
import {DashboardPortfolioChangeChartsComponent} from './dashboard-portfolio-change-charts/dashboard-portfolio-change-charts.component';
import {DashboardPortfolioChangeComponent} from './dashboard-portfolio-change/dashboard-portfolio-change.component';
import {DashboardPortfolioStateComponent} from './dashboard-portfolio-state/dashboard-portfolio-state.component';

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
        DashboardPage,
        DashboardTransactionsComponent,
        DashboardHoldingsAllocationComponent,
        DashboardHoldingsTableComponent,
        DashboardPortfolioChangeChartsComponent,
        DashboardPortfolioChangeComponent,
        DashboardPortfolioStateComponent
    ]
})
export class DashboardPageModule {
}
