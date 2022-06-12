import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupBaseInformationModule, GroupBaseInformationPortfolioModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { GroupDetailsComponent } from './group-details.component';

const routes: Routes = [
	{
		path: '',
		component: GroupDetailsComponent,
		children: [
			{
				path: '',
				redirectTo: 'overview',
				pathMatch: 'full',
			},
			{
				path: 'overview',
				loadChildren: () => import('./group-details-overview/group-details-overview.module').then((m) => m.GroupDetailsOverviewModule),
			},
			{
				path: 'stats',
				loadChildren: () => import('./group-details-stats/group-details-stats.module').then((m) => m.GroupDetailsStatsModule),
			},
		],
	},
];

@NgModule({
	declarations: [GroupDetailsComponent],
	imports: [CommonModule, GroupBaseInformationModule, IonicModule, RouterModule.forChild(routes), GroupBaseInformationPortfolioModule],
})
export class GroupDetailsModule {}
