import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GroupTypesCardComponent} from './components/group-types-card/group-types-card.component';
import {GroupInfoListComponent} from './components/group-info-list/group-info-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';
import {AccountFeatureModule} from '../account-feature/account-feature.module';
import {GroupListMembersInRowComponent} from './components/group-list-members-in-row/group-list-members-in-row.component';
import {GroupMemberPositionChangePopOverComponent} from './entry-components/group-member-position-change-pop-over/group-member-position-change-pop-over.component';
import {GroupTypesModalComponent} from './entry-components/group-types-modal/group-types-modal.component';


@NgModule({
    declarations: [
        GroupTypesCardComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent,
        GroupTypesModalComponent
    ],
    imports: [
        SharedModule,
        AccountFeatureModule
    ],
    exports: [
        GroupTypesCardComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent,
        GroupTypesModalComponent
    ]
})
export class GroupManagementFeatureModule {
}
