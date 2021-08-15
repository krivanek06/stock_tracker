import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { SharedMaterialModule, SharedModule } from '@shared';
import {
	GroupBaseInformationComponent,
	GroupCreateFormComponent,
	GroupMembersTableComponent,
	GroupTopUsersInformationComponent,
	GroupUserBaseInformationComponent,
} from './components';
import { GroupCreateModalComponent } from './entry-components';

@NgModule({
	declarations: [
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
		GroupTopUsersInformationComponent,
	],
	imports: [SharedModule, AccountFeatureModule, SharedMaterialModule],
	exports: [
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
		GroupTopUsersInformationComponent,
	],
})
export class GroupFeatureModule {}
