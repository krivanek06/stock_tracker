import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupDetailsComponent} from './group-details.component';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {GROUPS_PAGES_DETAILS} from '../../model/groups.model';

const routes: Routes = [
    {
        path: '',
        component: GroupDetailsComponent,
        children: [
            {
                path: GROUPS_PAGES_DETAILS.OVERVIEW,
                loadChildren: () => import('./pages/group-details-overview/group-details-overview.module').then(m => m.GroupDetailsOverviewModule)
            },
            {
                path: GROUPS_PAGES_DETAILS.STATS,
                loadChildren: () => import('./pages/group-details-stats/group-details-stats.module').then(m => m.GroupDetailsStatsModule)
            },
            {
                path: '',
                redirectTo: GROUPS_PAGES_DETAILS.OVERVIEW,
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    declarations: [
        GroupDetailsComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        RouterModule.forChild(routes),
    ]
})
export class GroupDetailsModule {
}
