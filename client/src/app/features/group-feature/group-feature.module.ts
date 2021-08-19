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

@NgModule({
	declarations: [
		GroupCreateFormComponent,
		GroupCreateModalComponent,
		GroupBaseInformationComponent,
		GroupUserBaseInformationComponent,
		GroupMembersTableComponent,
		GroupTopUsersInformationComponent,
	],
	imports: [SharedModule, AccountFeatureModule, SharedMaterialModule, StockTradingFeatureModule],
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
