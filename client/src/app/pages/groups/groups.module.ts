import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGroupDetailsGuard } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { MenuHeaderModule } from '@pages-shared';
import { HeaderModule } from '@shared';
import { GroupsComponent } from './groups.component';
import { GROUPS_PAGES } from './model/groups.model';

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
				path: `${GROUPS_PAGES.DETAILS}/:groupId`,
				loadChildren: () => import('./pages/group-details/group-details.module').then((m) => m.GroupDetailsModule),
				resolve: {
					groupDetails: ResolveGroupDetailsGuard,
				},
			},
			// {
			// 	path: '',
			// 	redirectTo: GROUPS_PAGES.OVERVIEW,
			// 	pathMatch: 'full',
			// },
		],
	},
];

@NgModule({
	declarations: [GroupsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, HeaderModule, MenuHeaderModule],
})
export class GroupsModule {}
