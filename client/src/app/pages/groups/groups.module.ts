
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGroupDetailsGuard } from '@group-feature';
import { GroupsComponent } from './groups.component';
import { GROUPS_PAGES } from './model/groups.model';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "@shared";
import {MenuHeaderModule} from "@pages-shared";

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
			}
		],
	},
];

@NgModule({
	declarations: [GroupsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, HeaderModule, MenuHeaderModule,],
})
export class GroupsModule {}
