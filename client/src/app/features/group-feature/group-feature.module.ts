import {NgModule} from '@angular/core';
import {SharedMaterialModule, SharedModule} from '@shared';
import {
    GroupBaseInformationComponent,
    GroupCreateFormComponent, GroupUserBaseInformationComponent
} from './components';
import {GroupCreateModalComponent, GroupMemberPositionChangePopOverComponent} from './entry-components';
import {GroupSearchComponent} from './containers';
import {AccountFeatureModule} from '@account-feature';


@NgModule({
    declarations: [
        GroupMemberPositionChangePopOverComponent,
        GroupSearchComponent,
        GroupCreateFormComponent,
        GroupCreateModalComponent,
        GroupBaseInformationComponent,
        GroupUserBaseInformationComponent
    ],
    imports: [
        SharedModule,
        AccountFeatureModule,
        SharedMaterialModule
    ],
    exports: [
        GroupMemberPositionChangePopOverComponent,
        GroupSearchComponent,
        GroupCreateFormComponent,
        GroupCreateModalComponent,
        GroupBaseInformationComponent,
        GroupUserBaseInformationComponent
    ]
})
export class GroupFeatureModule {
}

