import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {GroupDetailsStatsComponent} from './group-details-stats.component';
import {StockTradingFeatureModule} from '@stock-trading-feature';
import {
    GroupDetailsStatsHoldingsChartsContainerComponent,
    GroupDetailsStatsHoldingsTableContainerComponent,
    GroupDetailsStatsPortfolioContainerComponent
} from './containers';
import {StockDetailsFeatureModule} from '@stock-details-feature';


const routes: Routes = [
    {
        path: '',
        component: GroupDetailsStatsComponent
    },
];

@NgModule({
    declarations: [
        GroupDetailsStatsComponent,
        GroupDetailsStatsPortfolioContainerComponent,
        GroupDetailsStatsHoldingsChartsContainerComponent,
        GroupDetailsStatsHoldingsTableContainerComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes),
        StockTradingFeatureModule,
        StockDetailsFeatureModule
    ]
})
export class GroupDetailsStatsModule {
}
