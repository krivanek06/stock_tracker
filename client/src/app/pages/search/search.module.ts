import {NgModule} from '@angular/core';
import {SearchPage} from './search.page';
import {SharedModule} from '../../shared/shared.module';
import {SearchStockComponent} from './pages/search-stock/search-stock.component';
import {SearchGroupComponent} from './pages/search-group/search-group.component';
import {SearchUserComponent} from './pages/search-user/search-user.component';
import {SearchStockDetailsPage} from './pages/search-stock/search-stock-details/search-stock-details-page.component';
import {StockDetailsStatisticComponent} from './pages/search-stock/search-stock-details/pages/stock-details-statistic/stock-details-statistic.component';
import {StockDetailsFinancialComponent} from './pages/search-stock/search-stock-details/pages/stock-details-financial/stock-details-financial.component';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {SearchStockSummaryComponent} from './pages/search-stock/search-stock-summary/search-stock-summary.component';
import {SearchPageRoutingModule} from './search-routing.module.ts.module';
import {AccountFeatureModule} from '../../features/account-feature/account-feature.module';
import {GroupManagementFeatureModule} from '../../features/group-feature/group-management-feature.module';




@NgModule({
    imports: [
        SharedModule,
        StockDetailsFeatureModule,
        SearchPageRoutingModule,
        AccountFeatureModule,
        GroupManagementFeatureModule
    ],
    declarations: [
        SearchPage,
        SearchStockComponent,
        SearchGroupComponent,
        SearchUserComponent,
        SearchStockDetailsPage,
        StockDetailsFinancialComponent,
        StockDetailsStatisticComponent,
        SearchStockSummaryComponent
    ]
})
export class SearchPageModule {
}
