import { AccountOverviewDialogModule, UserAccountInfoListModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoaderWrapperModule, PositionCardModule, SharedModule } from '@shared';
import { HallOfFameUsersBestModule } from './hall-of-fame-users-best/hall-of-fame-users-best.module';
import { HallOfFameUsersWorstModule } from './hall-of-fame-users-worst/hall-of-fame-users-worst.module';
import { HallOfFameUsersComponent } from './hall-of-fame-users.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameUsersComponent,
	},
];

@NgModule({
	declarations: [HallOfFameUsersComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		IonicModule,
		UserAccountInfoListModule,
		PositionCardModule,
		AccountOverviewDialogModule,
		LoaderWrapperModule,
		HallOfFameUsersWorstModule,
		HallOfFameUsersBestModule,
		MatDividerModule,
	],
})
export class HallOfFameUsersModule {}
