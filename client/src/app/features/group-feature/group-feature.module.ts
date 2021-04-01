import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {GroupInfoComponent, GroupInfoListComponent, GroupListMembersInRowComponent, GroupTypesCardComponent} from './components';
import {GroupMemberPositionChangePopOverComponent, GroupTypesModalComponent} from './entry-components';
import {GroupSearchComponent} from './containers';
import {AccountFeatureModule} from '@account-feature';
import {GroupFeatureFacadeService} from './services';


@NgModule({
    declarations: [
        GroupTypesCardComponent,
        GroupInfoListComponent,
        GroupInfoComponent,
        GroupListMembersInRowComponent,
        GroupMemberPositionChangePopOverComponent,
        GroupTypesModalComponent,
        GroupSearchComponent
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
        GroupTypesModalComponent,
        GroupSearchComponent
    ],
    providers: [
        GroupFeatureFacadeService
    ]
})
export class GroupFeatureModule {
}
