import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { SharedMaterialModule, SharedModule } from '@shared';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import {
	GroupBaseInformationComponent,
	GroupCreateFormComponent,
	GroupMembersTableComponent,
	GroupTopUsersInformationComponent,
	GroupUserBaseInformationComponent,
} from './components';
import { GroupCreateModalComponent } from './entry-components';
import { GroupMemberOverviewModalComponent } from './entry-components/group-member-overview-modal/group-member-overview-modal.component';

@NgModule({
	declarations: [
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
		GroupTopUsersInformationComponent,
		GroupMemberOverviewModalComponent,
	],
	imports: [SharedModule, AccountFeatureModule, SharedMaterialModule, StockTradingFeatureModule],
	exports: [
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
		GroupTopUsersInformationComponent,
		GroupMemberOverviewModalComponent,
	],
})
export class GroupFeatureModule {}
