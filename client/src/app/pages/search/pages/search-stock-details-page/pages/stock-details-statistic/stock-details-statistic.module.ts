import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MarketCalendarDividendPayoutModule, MarketCalendarSplitHistoryModule, MarketStockNewsModule } from '@market-feature';
import {
	FinancialChartContainerModule,
	GaugeChartModule,
	GenericCardModule,
	GenericChartModule,
	GenericListModule,
	LoaderWrapperModule,
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
		IonicModule,
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
	],
})
export class StockDetailsStatisticModule {}
