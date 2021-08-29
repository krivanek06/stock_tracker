import { UserIdentificationInfoModule } from '@account-feature';
import { AdminFeatureModule } from '@admin-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericChartModule } from '@shared';
import { TicketOverviewContainerModule } from '@ticketing-feature';
import { UsersOverviewPage } from './users-overview.page';

const routes: Routes = [
	{
		path: '',
		component: UsersOverviewPage,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		AdminFeatureModule,
		CommonModule,
		IonicModule,
		GenericCardModule,
		GenericChartModule,
		UserIdentificationInfoModule,
		TicketOverviewContainerModule,
	],
	declarations: [UsersOverviewPage],
})
export class UsersOverviewPageModule {}
