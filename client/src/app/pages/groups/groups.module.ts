import {NgModule} from '@angular/core';
import {GroupsReadComponent} from './pages/groups-read/groups-read.component';
import {GroupsEditComponent} from './pages/groups-edit/groups-edit.component';
import {GroupsCreateComponent} from './pages/groups-create/groups-create.component';
import {GroupsComponent} from './groups.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {GroupManagementFeatureModule} from '../../features/group-feature/group-management-feature.module';
import {AccountFeatureModule} from '../../features/account-feature/account-feature.module';


const routes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: '',
                redirectTo: 'create'
            },
            {
                path: 'create',
                component: GroupsCreateComponent
            },
            {
                path: 'edit/:id',
                component: GroupsEditComponent
            },
            {
                path: 'read/:id',
                component: GroupsReadComponent
            }
        ]
    },
];

@NgModule({
    declarations: [
        GroupsReadComponent,
        GroupsEditComponent,
        GroupsCreateComponent,
        GroupsComponent,
    ],
    imports: [
        SharedModule,
        GroupManagementFeatureModule,
        AccountFeatureModule,
        RouterModule.forChild(routes)
    ]
})
export class GroupsModule {
}
