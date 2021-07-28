import {NgModule} from '@angular/core';
import {
    DetailsDividendComponent,
    DetailsDividendPayoutComponent,
    DetailsEarningsChartComponent,
    DetailsEsgScoreComponent,
    DetailsFinancialStrengthComponent,
    DetailsFinancialStrengthRatioComponent,
    DetailsGradingHistoryComponent,
    DetailsHoldersComponent,
    DetailsKeyExecutivesComponent,
    DetailsNewsComponent,
    DetailsPerShareComponent,
    DetailsRatingComponent,
    DetailsRecommendationChartComponent,
    DetailsSplitHistoryComponent,
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
        DetailsNewsComponent,
        DetailsRatingComponent,
        DetailsDividendPayoutComponent,
        DetailsKeyExecutivesComponent,
        DetailsSplitHistoryComponent,
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
        DetailsNewsComponent,
        DetailsRatingComponent,
        DetailsDividendPayoutComponent,
        DetailsKeyExecutivesComponent,
        DetailsSplitHistoryComponent,
        DetailsStockPeersComponent
    ]
})
export class StockDetailsFeatureModule {
}
