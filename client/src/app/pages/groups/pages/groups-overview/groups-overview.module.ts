import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsOverviewComponent} from './groups-overview.component';
import {GroupFeatureModule} from '@group-feature';
import {SharedModule} from '@shared';
import {GroupsOverviewGroupInformationViewComponent} from './components/groups-overview-group-information-view/groups-overview-group-information-view.component';
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
        GroupsOverviewGroupInformationViewComponent
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
