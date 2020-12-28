import {NgModule} from '@angular/core';
import {StockDetailsPage} from './stock-details.page';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';
import {SharedModule} from '../../shared/shared.module';
import {StockDetailsFinancialComponent} from './containers/stock-details-financial/stock-details-financial.component';
import {StockDetailsStatisticComponent} from './containers/stock-details-statistic/stock-details-statistic.component';
import {RouterModule, Routes} from '@angular/router';
import {DETAILS_PAGES_ENUM} from './models/DetailsEnum.model';

const routes: Routes = [
    {
        path: '',
        component: StockDetailsPage,
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
        StockDetailsFinancialComponent,
        StockDetailsStatisticComponent
    ]
})
export class StockDetailsPageModule {
}
