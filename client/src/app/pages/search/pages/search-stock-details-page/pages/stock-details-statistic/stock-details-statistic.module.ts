import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockDetailsStatisticComponent} from "./stock-details-statistic.component";
import {IonicModule} from "@ionic/angular";
import {
    FinancialChartContainerModule,
    GaugeChartModule,
    GenericCardModule,
    GenericChartModule,
    GenericListModule,
    ObjNgForPipeModule,
    SplitKeyToTitlecasePipeModule,
    StockSummaryContainerModule
} from "@shared";
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
    DetailsValuationModule
} from "@stock-details-feature";
import {
    MarketCalendarDividendPayoutModule,
    MarketCalendarSplitHistoryModule,
    MarketStockNewsModule
} from "@market-feature";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {
        path: '',
        component: StockDetailsStatisticComponent,
    }
]


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
        MarketStockNewsModule
    ],
    exports: [StockDetailsStatisticComponent]
})
export class StockDetailsStatisticModule {
}
