import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { SharedMaterialModule, SharedModule } from '@shared';
import { GroupBaseInformationComponent, GroupCreateFormComponent, GroupMembersTableComponent, GroupUserBaseInformationComponent } from './components';
import { GroupSearchComponent } from './containers';
import { GroupCreateModalComponent, GroupMemberPositionChangePopOverComponent } from './entry-components';

@NgModule({
	declarations: [
		GroupMemberPositionChangePopOverComponent,
		GroupSearchComponent,
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
	],
	imports: [SharedModule, AccountFeatureModule, SharedMaterialModule],
	exports: [
		GroupMemberPositionChangePopOverComponent,
		GroupSearchComponent,
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
	],
})
export class GroupFeatureModule {}
