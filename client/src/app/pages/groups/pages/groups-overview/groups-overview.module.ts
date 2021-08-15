import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFeatureModule } from '@group-feature';
import { SharedModule } from '@shared';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import { GroupsOverviewComponent } from './groups-overview.component';

const routes: Routes = [
	{
		path: '',
		component: GroupsOverviewComponent,
	},
];

@NgModule({
	declarations: [GroupsOverviewComponent],
	imports: [SharedModule, GroupFeatureModule, RouterModule.forChild(routes), StockTradingFeatureModule],
})
export class GroupsOverviewModule {}
