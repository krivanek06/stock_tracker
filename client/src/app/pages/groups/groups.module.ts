import {NgModule} from '@angular/core';
import {GroupsReadComponent} from './pages/groups-read/groups-read.component';
import {GroupsEditComponent} from './pages/groups-edit/groups-edit.component';
import {GroupsComponent} from './groups.component';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {GroupFeatureModule} from '@group-feature';
import {AccountFeatureModule} from '@account-feature';
import {PagesSharedModule} from '@pages-shared';
import {GROUPS_PAGES} from './model/groups.enum';
import {GroupsOverviewComponent} from './pages/groups-overview/groups-overview.component';


const routes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: GROUPS_PAGES.OVERVIEW,
                component: GroupsOverviewComponent
            },
            {
                path: '',
                redirectTo: GROUPS_PAGES.OVERVIEW,
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    declarations: [
        GroupsEditComponent,
        GroupsReadComponent,
        GroupsComponent,
        GroupsOverviewComponent
    ],
    imports: [
        SharedModule,
        GroupFeatureModule,
        AccountFeatureModule,
        RouterModule.forChild(routes),
        PagesSharedModule
    ]
})
export class GroupsModule {
}
