import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GROUPS_PAGES_DETAILS } from '../../model/groups.model';
import { GroupDetailsComponent } from './group-details.component';
import {CommonModule} from "@angular/common";
import {GroupBaseInformationModule} from "@group-feature";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
	{
		path: '',
		component: GroupDetailsComponent,
		children: [
			{
				path: '',
				redirectTo: GROUPS_PAGES_DETAILS.OVERVIEW,
				pathMatch: 'full',
			},
			{
				path: GROUPS_PAGES_DETAILS.OVERVIEW,
				loadChildren: () => import('./pages/group-details-overview/group-details-overview.module').then((m) => m.GroupDetailsOverviewModule),
			},
			{
				path: GROUPS_PAGES_DETAILS.STATS,
				loadChildren: () => import('./pages/group-details-stats/group-details-stats.module').then((m) => m.GroupDetailsStatsModule),
			},
		],
	},
];

@NgModule({
	declarations: [GroupDetailsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), GroupBaseInformationModule, IonicModule],
})
export class GroupDetailsModule {}
