import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SEARCH_PAGE_STOCK_DETAILS_ENUM} from '../../../models/pages.model';
import {SearchStockDetailsPage} from './search-stock-details-page.component';
import {
    StockDetailsFinancialComponent,
    StockDetailsStatisticComponent,
    StockDetailsStrategiesComponent,
    StockDetailsValuationComponent
} from './pages';
import {SharedModule} from '@shared';
import {StockDetailsFeatureModule} from '@stock-details-feature';
import {StockTradingStrategyFeatureModule} from '@stock-trading-strategy-feature';
import {StockValuationFeatureModule} from '@stock-valuation-feature';
import {StockDetailsFinancialModule} from './pages/stock-details-financial/stock-details-financial.module';

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
            },
            {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION,
                component: StockDetailsValuationComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SearchStockDetailsPage,
        StockDetailsStatisticComponent,
        StockDetailsStrategiesComponent,
        StockDetailsValuationComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        StockDetailsFeatureModule,
        StockTradingStrategyFeatureModule,
        StockValuationFeatureModule,
        StockDetailsFinancialModule
    ]
})
export class SearchStockDetailsModule {
}
