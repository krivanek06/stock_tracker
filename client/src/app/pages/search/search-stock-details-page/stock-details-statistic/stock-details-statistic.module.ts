import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { MarketCalendarDividendPayoutModule, MarketCalendarSplitHistoryModule, MarketStockNewsModule } from '@market-feature';
import {
	FinancialChartContainerModule,
	GaugeChartModule,
	GenericCardModule,
	GenericChartModule,
	GenericListModule,
	LoaderWrapperModule,
	MatCardWrapperModule,
	ObjectKeyPipeModule,
	ObjNgForPipeModule,
	SplitKeyToTitlecasePipeModule,
	StockSummaryContainerModule,
} from '@shared';
import {
	DetailsDividendModule,
	DetailsEarningsChartModule,
	DetailsEsgScoreModule,
	DetailsFinancialStrengthModule,
	DetailsFinancialStrengthRatioModule,
	DetailsGradingHistoryModule,
	DetailsHoldersModule,
	DetailsKeyExecutivesModule,
	DetailsPerShareModule,
	DetailsRatingModule,
	DetailsRecommendationChartModule,
	DetailsStockPeersModule,
	DetailsStockTrendModule,
	DetailsTransactionsModule,
	DetailsValuationModule,
} from '@stock-details-feature';
import { StockDetailsStatisticComponent } from './stock-details-statistic.component';

const routes: Routes = [
	{
		path: '',
		component: StockDetailsStatisticComponent,
	},
];

@NgModule({
	declarations: [StockDetailsStatisticComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FinancialChartContainerModule,
		GenericCardModule,
		StockSummaryContainerModule,
		DetailsValuationModule,
		DetailsFinancialStrengthModule,
		GenericChartModule,
		DetailsFinancialStrengthRatioModule,
		DetailsPerShareModule,
		DetailsDividendModule,
		MarketCalendarDividendPayoutModule,
		DetailsRatingModule,
		MarketCalendarSplitHistoryModule,
		DetailsRecommendationChartModule,
		DetailsEarningsChartModule,
		GaugeChartModule,
		DetailsEsgScoreModule,
		DetailsStockTrendModule,
		DetailsGradingHistoryModule,
		DetailsHoldersModule,
		DetailsTransactionsModule,
		DetailsKeyExecutivesModule,
		DetailsStockPeersModule,
		GenericListModule,
		ObjNgForPipeModule,
		SplitKeyToTitlecasePipeModule,
		MarketStockNewsModule,
		LoaderWrapperModule,
		ObjectKeyPipeModule,
		MatButtonModule,
		MatIconModule,
		MatCardWrapperModule,
		MatTooltipModule,
	],
})
export class StockDetailsStatisticModule {}
