import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HallOfFamePage } from './hall-of-fame.page';
const routes: Routes = [
	{
		path: '',
		component: HallOfFamePage,
		children: [
			{
				path: '',
				redirectTo: 'users',
				pathMatch: 'full',
			},
			{
				path: 'users',
				loadChildren: () => import('./hall-of-fame-users/hall-of-fame-users.module').then((m) => m.HallOfFameUsersModule),
			},
			{
				path: 'groups',
				loadChildren: () => import('./hall-of-fame-groups/hall-of-fame-groups.module').then((m) => m.HallOfFameGroupsModule),
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
	declarations: [HallOfFamePage],
})
export class HallOfFamePageModule {}
