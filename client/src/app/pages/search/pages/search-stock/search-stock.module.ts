import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchStockComponent} from './search-stock.component';
import {SEARCH_PAGE_STOCK_ENUM} from '../../models/pages.model';
import {SearchStockScreenerComponent} from './search-stock-screener';
import {SharedModule} from '@shared';
import {StockDetailsFeatureModule} from '@stock-details-feature';
import {MarketFeatureModule} from '@market-feature';

const routes: Routes = [
    {
        path: '',
        component: SearchStockComponent,
        children: [
            {
                path: '',
                redirectTo: SEARCH_PAGE_STOCK_ENUM.SCREENER,
                pathMatch: 'full'
            },
            {
                path: SEARCH_PAGE_STOCK_ENUM.SCREENER,
                component: SearchStockScreenerComponent
            },
            {
                path: `${SEARCH_PAGE_STOCK_ENUM.DETAILS}/:symbol`,
                loadChildren: () => import('./search-stock-details/search-stock-details.module').then(m => m.SearchStockDetailsModule)
            }
        ]
    }
];

@NgModule({
    declarations: [
        SearchStockScreenerComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        StockDetailsFeatureModule,
        MarketFeatureModule
    ]
})
export class SearchStockModule {
}
