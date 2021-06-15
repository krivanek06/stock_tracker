import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {GroupDetailsStatsComponent} from './group-details-stats.component';


const routes: Routes = [
    {
        path: '',
        component: GroupDetailsStatsComponent
    },
];

@NgModule({
    declarations: [
        GroupDetailsStatsComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes)
    ]
})
export class GroupDetailsStatsModule {
}
