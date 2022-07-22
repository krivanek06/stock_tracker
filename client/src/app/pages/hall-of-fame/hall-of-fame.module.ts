import { AccountOverviewDialogModule, UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { GroupTopUsersInformationModule } from '@group-feature';
import { LoaderWrapperModule, PositionCardModule, SharedModule } from '@shared';
import { HallOfFameUsersBestModule } from './hall-of-fame-users/hall-of-fame-users-best/hall-of-fame-users-best.module';
import { HallOfFameUsersWorstModule } from './hall-of-fame-users/hall-of-fame-users-worst/hall-of-fame-users-worst.module';
import { HallOfFamePage } from './hall-of-fame.page';
const routes: Routes = [
	{
		path: '',
		component: HallOfFamePage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		UserAccountInfoListModule,
		PositionCardModule,
		GroupTopUsersInformationModule,
		AccountOverviewDialogModule,
		LoaderWrapperModule,
		HallOfFameUsersWorstModule,
		HallOfFameUsersBestModule,
		MatDividerModule,
	],
	declarations: [HallOfFamePage],
})
export class HallOfFamePageModule {}
