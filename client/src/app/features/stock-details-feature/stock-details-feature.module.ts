import {NgModule} from '@angular/core';
import {
    DetailsDividendComponent,
    DetailsEarningsChartComponent,
    DetailsEsgScoreComponent,
    DetailsFinancialStrengthComponent,
    DetailsFinancialStrengthRatioComponent,
    DetailsGradingHistoryComponent,
    DetailsOwnershipComponent,
    DetailsPerShareComponent,
    DetailsRecommendationChartComponent,
    DetailsRevenueEstimateComponent,
    DetailsSectorChartComponent,
    DetailsStatementTableComponent,
    DetailsStockSuggestionChangeComponent,
    DetailsStockTrendComponent,
    DetailsTransactionsComponent,
    DetailsValuationComponent,
    TrendItemComponent
} from './components';
import {StockSearchComponent} from './containers';
import {SharedModule} from '@shared';
import {DetailsReportStatementModalComponent} from './entry-components';


@NgModule({
    declarations: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementTableComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsEarningsChartComponent,
        DetailsGradingHistoryComponent,
        DetailsStockTrendComponent,
        DetailsRevenueEstimateComponent,
        StockSearchComponent,
        DetailsSectorChartComponent,
        DetailsStockSuggestionChangeComponent,
        TrendItemComponent,
        DetailsOwnershipComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent,
        DetailsReportStatementModalComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementTableComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsEarningsChartComponent,
        DetailsGradingHistoryComponent,
        DetailsStockTrendComponent,
        DetailsRevenueEstimateComponent,
        StockSearchComponent,
        DetailsSectorChartComponent,
        DetailsStockSuggestionChangeComponent,
        DetailsOwnershipComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent
    ]
})
export class StockDetailsFeatureModule {
}
