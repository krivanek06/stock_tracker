import {
	UserAccountButtonsModule,
	UserAccountFormModule,
	UserAccountNotActivatedMessageModule,
	UserAccountResetedInfoModule,
} from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { GenericCardModule } from '@shared';
import { WatchlistManagerModalModule } from '@stock-watchlist-feature';
import { TicketOverviewContainerModule } from '@ticketing-feature';
import { TicketFormDialogModule } from 'src/app/features/util-feature/ticketing-feature/entry-points';
import { AccountPage } from './account.page';

const routes: Routes = [
	{
		path: '',
		component: AccountPage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		UserAccountFormModule,
		GenericCardModule,
		UserAccountResetedInfoModule,
		UserAccountNotActivatedMessageModule,
		TicketFormDialogModule,
		TicketOverviewContainerModule,
		UserAccountButtonsModule,
		WatchlistManagerModalModule,
		MatDialogModule,
		MatIconModule,
	],
	declarations: [AccountPage],
})
export class AccountPageModule {}
