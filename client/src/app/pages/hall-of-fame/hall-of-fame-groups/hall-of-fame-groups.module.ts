import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { LoaderWrapperModule, PositionCardModule, SharedModule } from '@shared';
import { HallOfFameGroupsBestModule } from './hall-of-fame-groups-best/hall-of-fame-groups-best.module';
import { HallOfFameGroupsWorstModule } from './hall-of-fame-groups-worst/hall-of-fame-groups-worst.module';
import { HallOfFameGroupsComponent } from './hall-of-fame-groups.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameGroupsComponent,
	},
];

@NgModule({
	declarations: [HallOfFameGroupsComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		IonicModule,
		GroupTopUsersInformationModule,
		PositionCardModule,
		LoaderWrapperModule,
		HallOfFameGroupsWorstModule,
		HallOfFameGroupsBestModule,
	],
})
export class HallOfFameGroupsModule {}
