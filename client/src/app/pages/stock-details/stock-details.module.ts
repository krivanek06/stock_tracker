import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StockDetailsPage} from './stock-details.page';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: StockDetailsPage,
        children: [
            /*{
                path: '',
                redirectTo: 'statistics',
                pathMatch: 'full'
            },*/
            {
                path: 'statistics/:symbol',
                loadChildren: () => import('./pages/stock-details-statistics/stock-details-statistics.module')
                    .then(m => m.StockDetailsStatisticsPageModule)
            },
            {
                path: 'financials/:symbol',
                loadChildren: () => import('./pages/stock-details-financials/stock-details-financials.module')
                    .then(m => m.StockDetailsFinancialsPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        StockDetailsFeatureModule,
        StockDataFeatureModule
    ],
    declarations: [
        StockDetailsPage,
    ]
})
export class StockDetailsPageModule {
}
