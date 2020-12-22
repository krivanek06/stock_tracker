import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GroupTypesListComponent} from './components/group-types-list/group-types-list.component';
import {GroupInfoListComponent} from './components/group-info-list/group-info-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';
import {AccountFeatureModule} from '../account-feature/account-feature.module';


@NgModule({
    declarations: [
        GroupTypesListComponent,
        GroupInfoListComponent,
        GroupInfoComponent
    ],
    imports: [
        SharedModule,
        AccountFeatureModule
    ],
    exports: [
        GroupTypesListComponent,
        GroupInfoListComponent,
        GroupInfoComponent
    ]
})
export class GroupManagementFeatureModule {
}
