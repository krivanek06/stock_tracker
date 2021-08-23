
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormMatInputWrapperModule, GenericCardModule} from '@shared';
import {
	GroupDetailsOverviewInvitationsContainerComponent,
	GroupDetailsOverviewMembersContainerComponent,
	GroupDetailsOverviewPortfolioContainerComponent,
	GroupDetailsOverviewTransactionsContainerComponent,
} from './containers';
import { GroupDetailsOverviewComponent } from './group-details-overview.component';
import {IonicModule} from "@ionic/angular";
import {UserAccountInfoListModule, UserAccountSearchFormModule} from "@account-feature";
import {GroupMembersTableModule, GroupUserBaseInformationModule} from "@group-feature";
import {CommonModule} from "@angular/common";
import {
	PortfolioChangeModule,
	PortfolioIncreaseChartModule,
	PortfolioStateModule, TransactionsChartModule,
	TransactionsTableModule
} from "@stock-trading-feature";

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
		CommonModule,
		RouterModule.forChild(routes),
		FormMatInputWrapperModule,
		IonicModule,
		UserAccountSearchFormModule,
		UserAccountInfoListModule,
		GroupUserBaseInformationModule,
		GroupMembersTableModule,
		PortfolioStateModule,
		PortfolioIncreaseChartModule,
		PortfolioChangeModule,
		TransactionsTableModule,
		GenericCardModule,
		TransactionsChartModule,
	],
})
export class GroupDetailsOverviewModule {}
