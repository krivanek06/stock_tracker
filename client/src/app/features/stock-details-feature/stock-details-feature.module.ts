import {NgModule} from '@angular/core';
import {
    DetailsDividendComponent,
    DetailsEarningsChartComponent,
    DetailsEsgScoreComponent,
    DetailsFinancialStrengthComponent,
    DetailsFinancialStrengthRatioComponent,
    DetailsGradingHistoryComponent,
    DetailsHoldersComponent,
    DetailsNewsComponent,
    DetailsPerShareComponent,
    DetailsRecommendationChartComponent,
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
        StockSearchComponent,
        DetailsSectorChartComponent,
        DetailsStockSuggestionChangeComponent,
        TrendItemComponent,
        DetailsHoldersComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent,
        DetailsReportStatementModalComponent,
        DetailsNewsComponent
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
        StockSearchComponent,
        DetailsSectorChartComponent,
        DetailsStockSuggestionChangeComponent,
        DetailsHoldersComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent,
        DetailsNewsComponent
    ]
})
export class StockDetailsFeatureModule {
}
