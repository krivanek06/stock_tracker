import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GroupTypesListComponent} from './components/group-types-list/group-types-list.component';
import {GroupInfoListComponent} from './components/group-info-list/group-info-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';
import {AccountFeatureModule} from '../account-feature/account-feature.module';
import {GroupListMembersInRowComponent} from './components/group-list-members-in-row/group-list-members-in-row.component';
import {GroupMemberPositionChangePopOverComponent} from './entry-components/group-member-position-change-pop-over/group-member-position-change-pop-over.component';


@NgModule({
    declarations: [
        GroupTypesListComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent
    ],
    imports: [
        SharedModule,
        AccountFeatureModule
    ],
    exports: [
        GroupTypesListComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent
    ]
})
export class GroupManagementFeatureModule {
}
