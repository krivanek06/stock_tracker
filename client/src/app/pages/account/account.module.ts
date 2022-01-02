import { UserAccountFormModule, UserAccountNotActivatedMessageModule, UserAccountResetedInfoModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule } from '@shared';
import { WatchlistModificationContainerModule } from '@stock-watchlist-feature';
import { TicketFormContainerModule, TicketOverviewContainerModule } from '@ticketing-feature';
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
		IonicModule,
		UserAccountFormModule,
		GenericCardModule,
		UserAccountResetedInfoModule,
		WatchlistModificationContainerModule,
		UserAccountNotActivatedMessageModule,
		TicketFormContainerModule,
		TicketOverviewContainerModule,
	],
	declarations: [AccountPage],
})
export class AccountPageModule {}
