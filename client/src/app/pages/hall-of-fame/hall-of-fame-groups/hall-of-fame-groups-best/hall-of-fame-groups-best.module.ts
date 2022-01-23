import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDisplayModule } from '@hall-of-fame';
import { LoaderWrapperModule } from '@shared';
import { HallOfFameGroupsBestComponent } from './hall-of-fame-groups-best.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameGroupsBestComponent,
	},
];

@NgModule({
	declarations: [HallOfFameGroupsBestComponent],
	imports: [CommonModule, GroupDisplayModule, RouterModule.forChild(routes), LoaderWrapperModule],
})
export class HallOfFameGroupsBestModule {}
