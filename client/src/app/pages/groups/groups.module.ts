import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
	{
		path: '',
		component: GroupsComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./pages/groups-overview/groups-overview.module').then((m) => m.GroupsOverviewModule),
			},
			{
				path: ':groupId',
				loadChildren: () => import('./pages/group-details/group-details.module').then((m) => m.GroupDetailsModule),
			},
		],
	},
];

@NgModule({
	declarations: [GroupsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class GroupsModule {}
