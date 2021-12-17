import { UserIdentificationInfoModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericChartModule, HeaderModule } from '@shared';
import { TicketOverviewContainerModule } from '@ticketing-feature';
import { AdminPage } from './admin.page';
import { UsersOverviewPage } from './users-overview/users-overview.page';

const routes: Routes = [
	{
		path: '',
		component: AdminPage,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		IonicModule,
		HeaderModule,
		CommonModule,
		GenericCardModule,
		GenericChartModule,
		UserIdentificationInfoModule,
		TicketOverviewContainerModule,
	],
	declarations: [AdminPage, UsersOverviewPage],
})
export class AdminPageModule {}
