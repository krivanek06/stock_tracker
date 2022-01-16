import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { PositionCardModule, SharedModule } from '@shared';
import { HallOfFameGroupsComponent } from './hall-of-fame-groups.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameGroupsComponent,
		children: [
			{
				path: '',
				redirectTo: 'best-groups',
				pathMatch: 'full',
			},
			{
				path: 'best-groups',
				loadChildren: () => import('./hall-of-fame-groups-best/hall-of-fame-groups-best.module').then((m) => m.HallOfFameGroupsBestModule),
			},
			{
				path: 'worst-groups',
				loadChildren: () => import('./hall-of-fame-groups-worst/hall-of-fame-groups-worst.module').then((m) => m.HallOfFameGroupsWorstModule),
			},
		],
	},
];

@NgModule({
	declarations: [HallOfFameGroupsComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes), IonicModule, GroupTopUsersInformationModule, PositionCardModule],
})
export class HallOfFameGroupsModule {}
