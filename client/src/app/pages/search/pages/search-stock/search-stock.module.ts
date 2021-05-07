import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchStockComponent} from './search-stock.component';
import {SEARCH_PAGE_STOCK_ENUM} from '../../models/pages.model';
import {SearchStockSummaryComponent} from './search-stock-summary';
import {SharedModule} from '@shared';
import {StockDetailsFeatureModule} from '@stock-details-feature';

const routes: Routes = [
    {
        path: '',
        component: SearchStockComponent,
        children: [
            {
                path: '',
                redirectTo: SEARCH_PAGE_STOCK_ENUM.SUMMARY,
                pathMatch: 'full'
            },
            {
                path: SEARCH_PAGE_STOCK_ENUM.SUMMARY,
                component: SearchStockSummaryComponent
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
        SearchStockSummaryComponent
    ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StockDetailsFeatureModule
  ]
})
export class SearchStockModule {
}
