import {NgModule} from '@angular/core';
import {SearchPage} from './search.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {SearchStockComponent} from './pages/search-stock/search-stock.component';
import {SearchGroupComponent} from './pages/search-group/search-group.component';
import {SearchUserComponent} from './pages/search-user/search-user.component';
import {SearchStockDetailsPage} from './pages/search-stock-details/search-stock-details-page.component';
import {DETAILS_PAGES_ENUM} from './pages/search-stock-details/models/DetailsEnum.model';
import {StockDetailsStatisticComponent} from './pages/search-stock-details/pages/stock-details-statistic/stock-details-statistic.component';
import {StockDetailsFinancialComponent} from './pages/search-stock-details/pages/stock-details-financial/stock-details-financial.component';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';


const routes: Routes = [
    {
        path: '',
        component: SearchPage,
        children: [
            {
                path: '',
                redirectTo: 'search-stock'
            },
            {
                path: 'search-stock',
                component: SearchStockComponent
            },
            {
                path: 'search-user',
                component: SearchUserComponent
            },
            {
                path: 'search-group',
                component: SearchGroupComponent
            },
            {
                path: 'search-stock-details/:symbol',
                component: SearchStockDetailsPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'statistics'
                    },
                    {
                        path: DETAILS_PAGES_ENUM.STATISTICS,
                        component: StockDetailsStatisticComponent
                    },
                    {
                        path: DETAILS_PAGES_ENUM.FINANCIAL,
                        component: StockDetailsFinancialComponent
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        StockDetailsFeatureModule,
        StockDataFeatureModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SearchPage,
        SearchStockComponent,
        SearchGroupComponent,
        SearchUserComponent,
        SearchStockDetailsPage,
        StockDetailsFinancialComponent,
        StockDetailsStatisticComponent
    ]
})
export class SearchPageModule {
}
