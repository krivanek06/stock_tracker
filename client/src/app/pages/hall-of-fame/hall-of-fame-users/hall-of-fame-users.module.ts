import { UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared';
import { HallOfFameUsersComponent } from './hall-of-fame-users.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameUsersComponent,
		children: [
			{
				path: '',
				redirectTo: 'best-users',
				pathMatch: 'full',
			},
			{
				path: 'best-users',
				loadChildren: () => import('./hall-of-fame-users-best/hall-of-fame-users-best.module').then((m) => m.HallOfFameUsersBestModule),
			},
			{
				path: 'worst-users',
				loadChildren: () => import('./hall-of-fame-users-worst/hall-of-fame-users-worst.module').then((m) => m.HallOfFameUsersWorstModule),
			},
		],
	},
];

@NgModule({
	declarations: [HallOfFameUsersComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes), IonicModule, UserAccountInfoListModule],
})
export class HallOfFameUsersModule {}
