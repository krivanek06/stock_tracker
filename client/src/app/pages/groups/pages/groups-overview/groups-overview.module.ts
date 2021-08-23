import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule } from '@shared';
import { GroupsOverviewComponent } from './groups-overview.component';

const routes: Routes = [
	{
		path: '',
		component: GroupsOverviewComponent,
	},
];

@NgModule({
	declarations: [GroupsOverviewComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, MatTooltipModule, GenericCardModule, GroupTopUsersInformationModule],
})
export class GroupsOverviewModule {}
