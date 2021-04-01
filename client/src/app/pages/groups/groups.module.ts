import {NgModule} from '@angular/core';
import {GroupsReadComponent} from './pages/groups-read/groups-read.component';
import {GroupsEditComponent} from './pages/groups-edit/groups-edit.component';
import {GroupsCreateComponent} from './pages/groups-create/groups-create.component';
import {GroupsComponent} from './groups.component';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {GroupFeatureModule} from '@group-feature';
import {AccountFeatureModule} from '@account-feature';
import {PagesSharedModule} from '@pages-shared';


const routes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: 'create',
                component: GroupsCreateComponent
            },
            {
                path: 'edit/:id',
                component: GroupsEditComponent  // guard to enable only if manager of owner
            },
            {
                path: 'read/:id',
                component: GroupsReadComponent
            },
            {
                path: '',
                redirectTo: 'create',
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    declarations: [
        GroupsEditComponent,
        GroupsCreateComponent,
        GroupsReadComponent,
        GroupsComponent
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
