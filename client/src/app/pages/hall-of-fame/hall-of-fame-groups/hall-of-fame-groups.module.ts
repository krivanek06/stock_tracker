import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { HallOfFameGroupsComponent } from './hall-of-fame-groups.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameGroupsComponent,
	},
];

@NgModule({
	declarations: [HallOfFameGroupsComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HallOfFameGroupsModule {}
