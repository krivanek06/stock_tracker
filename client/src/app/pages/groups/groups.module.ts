import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared';
import { MenuHeaderModule } from 'src/app/features/composed-components-feature';
import { GroupsComponent } from './groups.component';
import { GroupDetailsModule, GroupsOverviewModule } from './pages';

const routes: Routes = [
	{
		path: '',
		component: GroupsComponent,
	},
];

@NgModule({
	declarations: [GroupsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, HeaderModule, MenuHeaderModule, GroupsOverviewModule, GroupDetailsModule],
})
export class GroupsModule {}
