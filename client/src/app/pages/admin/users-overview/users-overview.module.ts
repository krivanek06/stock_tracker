import { UserAccountSearchModule, UserIdentificationInfoModule } from '@account-feature';
import { ApplicationInformationsModule, UserStatusDialogModule } from '@admin-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericChartModule, MatCardWrapperModule, SharedModule } from '@shared';
import { TicketOverviewContainerModule } from '@ticketing-feature';
import { UsersOverviewPage } from './users-overview.page';

const routes: Routes = [
	{
		path: '',
		component: UsersOverviewPage,
	},
];

@NgModule({
	declarations: [UsersOverviewPage],
	imports: [
		CommonModule,
		IonicModule,
		CommonModule,
		GenericCardModule,
		GenericChartModule,
		UserIdentificationInfoModule,
		TicketOverviewContainerModule,
		RouterModule.forChild(routes),
		UserAccountSearchModule,
		SharedModule,
		ApplicationInformationsModule,
		UserStatusDialogModule,
		MatCardWrapperModule,
	],
})
export class UsersOverviewModule {}
