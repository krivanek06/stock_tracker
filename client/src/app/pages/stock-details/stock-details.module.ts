import {NgModule} from '@angular/core';
import {StockDetailsPage} from './stock-details.page';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';
import {SharedModule} from "../../shared/shared.module";
import {StockDetailsFinancialContainerPage} from './containers/stock-details-financials-container/stock-details-financial-container-page.component';
import {StockDetailsStatisticContainerPage} from './containers/stock-details-statistic-container/stock-details-statistic-container-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: StockDetailsPage
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
        StockDetailsPage,
        StockDetailsFinancialContainerPage,
        StockDetailsStatisticContainerPage
    ]
})
export class StockDetailsPageModule {
}
