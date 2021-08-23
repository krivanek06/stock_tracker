import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailsStatsComponent } from './group-details-stats.component';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {
	HoldingsAllocationGroupChartModule, HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule, HoldingsToSectorChartSeriesPipeModule,
	PortfolioGrowthChartModule
} from "@stock-trading-feature";
import {GenericCardModule, GenericChartModule, GenericListModule, PieChartWrapperModule} from "@shared";

const routes: Routes = [
	{
		path: '',
		component: GroupDetailsStatsComponent,
	},
];

@NgModule({
	declarations: [GroupDetailsStatsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, PortfolioGrowthChartModule, GenericChartModule, HoldingsAllocationGroupChartModule, GenericListModule, PieChartWrapperModule, HoldingsToPortfolioChartSeriesPipeModule, HoldingsToSectorChartSeriesPipeModule, HoldingsTableModule, GenericCardModule,],
})
export class GroupDetailsStatsModule {}
