import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';
import {MarketMovementContainerComponent} from './container/market-movement-container/market-movement-container.component';
import {Sp500ChartsContainerComponent} from './container/sp500-charts-container/sp500-charts-container.component';
import {EconomicChartsContainerComponent} from './container/economic-charts-container/economic-charts-container.component';
import {StockDetailsPageModule} from '../stock-details/stock-details.module';

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
        StockDataFeatureModule,
    ],
    declarations: [
        DashboardPage,
        MarketMovementContainerComponent,
        Sp500ChartsContainerComponent,
        EconomicChartsContainerComponent
    ]
})
export class DashboardPageModule {
}
