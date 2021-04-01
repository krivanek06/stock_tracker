import {NgModule} from '@angular/core';
import {
    DetailsDividendComponent,
    DetailsEarningsChartComponent,
    DetailsEsgScoreComponent,
    DetailsFinancialStrengthComponent,
    DetailsFinancialStrengthRatioComponent,
    DetailsOwnershipComponent,
    DetailsPerShareComponent,
    DetailsRecommendationChartComponent,
    DetailsRevenueEstimateComponent,
    DetailsStatementTableComponent,
    DetailsTransactionsComponent,
    DetailsValuationComponent,
    DetailsGradingHistoryComponent,
    DetailsStockSuggestionChangeComponent,
    DetailsStockTrendComponent,
    DetailsSectorChartComponent,
    TrendItemComponent
} from './components';
import {StockSearchComponent} from './containers';
import {SharedModule} from '@shared';


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
        DetailsEsgScoreComponent
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
