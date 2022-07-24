import { UserAccountInfoListModule, UserAccountSearchFormModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { GroupMembersTableModule, GroupUserBaseInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule, GenericCardModule, MatCardWrapperModule, TitleValueItemModule } from '@shared';
import {
	PortfolioChangeModule,
	PortfolioIncreaseChartModule,
	PortfolioStateModule,
	TransactionsChartModule,
	TransactionsSummaryModule,
	TransactionsTableModule,
} from '@stock-trading-feature';
import {
	GroupDetailsOverviewInvitationsContainerComponent,
	GroupDetailsOverviewMembersContainerComponent,
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
		GroupDetailsOverviewInvitationsContainerComponent,
	],
	imports: [
		CommonModule,
		FormMatInputWrapperModule,
		MatCardWrapperModule,
		MatCardModule,
		MatDividerModule,
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
		TransactionsSummaryModule,
		RouterModule.forChild(routes),
		TitleValueItemModule,
		MatDialogModule,
	],
	exports: [GroupDetailsOverviewComponent],
})
export class GroupDetailsOverviewModule {}
