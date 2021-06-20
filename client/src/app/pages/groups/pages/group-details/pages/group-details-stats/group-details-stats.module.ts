import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {GroupDetailsStatsComponent} from './group-details-stats.component';
import {StockTradingFeatureModule} from '@stock-trading-feature';
import {GroupDetailsStatsPortfolioContainerComponent} from './containers';


const routes: Routes = [
    {
        path: '',
        component: GroupDetailsStatsComponent
    },
];

@NgModule({
    declarations: [
        GroupDetailsStatsComponent,
        GroupDetailsStatsPortfolioContainerComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes),
        StockTradingFeatureModule
    ]
})
export class GroupDetailsStatsModule {
}
