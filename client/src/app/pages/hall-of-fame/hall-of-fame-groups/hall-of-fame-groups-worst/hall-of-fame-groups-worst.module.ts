import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDisplayModule } from '@hall-of-fame';
import { HallOfFameGroupsWorstComponent } from './hall-of-fame-groups-worst.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameGroupsWorstComponent,
	},
];

@NgModule({
	declarations: [HallOfFameGroupsWorstComponent],
	imports: [CommonModule, GroupDisplayModule, RouterModule.forChild(routes)],
})
export class HallOfFameGroupsWorstModule {}
