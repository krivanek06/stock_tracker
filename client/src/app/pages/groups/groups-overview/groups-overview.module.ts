import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateModalModule, GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, SharedModule } from '@shared';
import { GroupsOverviewComponent } from './groups-overview.component';

const routes: Routes = [
	{
		path: '',
		component: GroupsOverviewComponent,
	},
];

@NgModule({
	declarations: [GroupsOverviewComponent],
	imports: [
		CommonModule,
		IonicModule,
		MatTooltipModule,
		GenericCardModule,
		GroupTopUsersInformationModule,
		RouterModule.forChild(routes),
		MatDividerModule,
		GroupCreateModalModule,
		SharedModule,
	],
})
export class GroupsOverviewModule { }