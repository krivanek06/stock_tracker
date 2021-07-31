import {NgModule} from '@angular/core';
import {
    DetailsDividendComponent,
    DetailsEarningsChartComponent,
    DetailsEsgScoreComponent,
    DetailsFinancialStrengthComponent,
    DetailsFinancialStrengthRatioComponent,
    DetailsGradingHistoryComponent,
    DetailsHoldersComponent,
    DetailsKeyExecutivesComponent,
    DetailsPerShareComponent,
    DetailsRatingComponent,
    DetailsRecommendationChartComponent,
    DetailsStatementSheetComponent,
    DetailsStockPeersComponent,
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
        DetailsStatementSheetComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsEarningsChartComponent,
        DetailsGradingHistoryComponent,
        DetailsStockTrendComponent,
        StockSearchComponent,
        DetailsStockSuggestionChangeComponent,
        TrendItemComponent,
        DetailsHoldersComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent,
        DetailsReportStatementModalComponent,
        DetailsRatingComponent,
        DetailsKeyExecutivesComponent,
        DetailsStockPeersComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementSheetComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsEarningsChartComponent,
        DetailsGradingHistoryComponent,
        DetailsStockTrendComponent,
        StockSearchComponent,
        DetailsStockSuggestionChangeComponent,
        DetailsHoldersComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent,
        DetailsRatingComponent,
        DetailsKeyExecutivesComponent,
        DetailsStockPeersComponent
    ]
})
export class StockDetailsFeatureModule {
}
