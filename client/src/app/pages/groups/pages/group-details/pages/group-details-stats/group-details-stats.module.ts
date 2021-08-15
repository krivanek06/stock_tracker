import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFeatureModule } from '@group-feature';
import { SharedModule } from '@shared';
import { StockDetailsFeatureModule } from '@stock-details-feature';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import { GroupDetailsStatsComponent } from './group-details-stats.component';

const routes: Routes = [
	{
		path: '',
		component: GroupDetailsStatsComponent,
	},
];

@NgModule({
	declarations: [GroupDetailsStatsComponent],
	imports: [SharedModule, GroupFeatureModule, RouterModule.forChild(routes), StockTradingFeatureModule, StockDetailsFeatureModule],
})
export class GroupDetailsStatsModule {}
