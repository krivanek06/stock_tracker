import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SEARCH_PAGE_STOCK_DETAILS_ENUM} from '../../../models/pages.model';
import {SearchStockDetailsPage} from './search-stock-details-page.component';
import {StockDetailsFinancialComponent, StockDetailsStatisticComponent, StockDetailsStrategiesComponent} from './pages';
import {SharedModule} from '@shared';
import {StockDetailsFeatureModule} from '@stock-details-feature';
import {StockTradingStrategyFeatureModule} from '@stock-trading-strategy-feature';

const routes: Routes = [
    {
        path: '',
        component: SearchStockDetailsPage,
        children: [
            {
                path: '',
                redirectTo: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
                pathMatch: 'full'
            },
            {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
                component: StockDetailsStatisticComponent
            },
            {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS,
                component: StockDetailsFinancialComponent
            },
            {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STRATEGIES,
                component: StockDetailsStrategiesComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SearchStockDetailsPage,
        StockDetailsFinancialComponent,
        StockDetailsStatisticComponent,
        StockDetailsStrategiesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        StockDetailsFeatureModule,
        StockTradingStrategyFeatureModule
    ]
})
export class SearchStockDetailsModule {
}
