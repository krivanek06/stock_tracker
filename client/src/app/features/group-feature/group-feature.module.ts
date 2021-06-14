import {NgModule} from '@angular/core';
import {SharedMaterialModule, SharedModule} from '@shared';
import {
    GroupCreateFormComponent,
    GroupInfoComponent,
    GroupInfoListComponent,
    GroupListMembersInRowComponent,
    GroupTypesCardComponent
} from './components';
import {GroupCreateModalComponent, GroupMemberPositionChangePopOverComponent} from './entry-components';
import {GroupSearchComponent} from './containers';
import {AccountFeatureModule} from '@account-feature';


@NgModule({
    declarations: [
        GroupTypesCardComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent,
        GroupSearchComponent,
        GroupCreateFormComponent,
        GroupCreateModalComponent
    ],
    imports: [
        SharedModule,
        AccountFeatureModule,
        SharedMaterialModule
    ],
    exports: [
        GroupTypesCardComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent,
        GroupSearchComponent,
        GroupCreateFormComponent,
        GroupCreateModalComponent
    ]
})
export class GroupFeatureModule {
}

