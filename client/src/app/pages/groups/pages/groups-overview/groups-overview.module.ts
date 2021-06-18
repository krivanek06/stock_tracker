import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsOverviewComponent} from './groups-overview.component';
import {GroupFeatureModule} from '@group-feature';
import {SharedModule} from '@shared';
import {GroupsOverviewGroupInformationContainerComponent} from './containers';
import {StockTradingFeatureModule} from '@stock-trading-feature';


const routes: Routes = [
    {
        path: '',
        component: GroupsOverviewComponent
    },
];

@NgModule({
    declarations: [
        GroupsOverviewComponent,
        GroupsOverviewGroupInformationContainerComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes),
        StockTradingFeatureModule,
    ]
})
export class GroupsOverviewModule {
}
