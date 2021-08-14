import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { SharedMaterialModule, SharedModule } from '@shared';
import { GroupBaseInformationComponent, GroupCreateFormComponent, GroupMembersTableComponent, GroupUserBaseInformationComponent } from './components';
import { GroupSearchComponent } from './containers';
import { GroupCreateModalComponent } from './entry-components';

@NgModule({
	declarations: [
		GroupSearchComponent,
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
	],
	imports: [SharedModule, AccountFeatureModule, SharedMaterialModule],
	exports: [
		GroupSearchComponent,
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
	],
})
export class GroupFeatureModule {}
