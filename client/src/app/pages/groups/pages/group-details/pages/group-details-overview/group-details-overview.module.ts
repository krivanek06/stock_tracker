import { AccountFeatureModule } from '@account-feature';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFeatureModule } from '@group-feature';
import { FormMatInputWrapperModule, SharedModule } from '@shared';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import {
	GroupDetailsOverviewInvitationsContainerComponent,
	GroupDetailsOverviewMembersContainerComponent,
	GroupDetailsOverviewPortfolioContainerComponent,
	GroupDetailsOverviewTransactionsContainerComponent,
} from './containers';
import { GroupDetailsOverviewComponent } from './group-details-overview.component';

const routes: Routes = [
	{
		path: '',
		component: GroupDetailsOverviewComponent,
	},
];

@NgModule({
	declarations: [
		GroupDetailsOverviewComponent,
		GroupDetailsOverviewMembersContainerComponent,
		GroupDetailsOverviewTransactionsContainerComponent,
		GroupDetailsOverviewPortfolioContainerComponent,
		GroupDetailsOverviewInvitationsContainerComponent,
	],
	imports: [
		SharedModule,
		GroupFeatureModule,
		RouterModule.forChild(routes),
		StockTradingFeatureModule,
		AccountFeatureModule,
		FormMatInputWrapperModule,
	],
})
export class GroupDetailsOverviewModule {}
