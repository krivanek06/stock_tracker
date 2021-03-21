import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    GradingHistoryComponent,
    StockInfoListChangeComponent,
    StockTrendComponent,
    SummarySectorChartComponent
} from './components';
import {SymbolLookupModalComponent} from './entry-components';
import {SharedModule} from '../../shared/shared.module';
import {DetailsSummaryContainerComponent, StockSearchComponent} from './containers';
import {TrendItemComponent} from './components/stock-trend/trend-item/trend-item.component';


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
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryContainerComponent,
        DetailsRevenueEstimateComponent,
        StockSearchComponent,
        SummarySectorChartComponent,
        StockInfoListChangeComponent,
        TrendItemComponent,
        DetailsOwnershipComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent
    ],
    imports: [
        CommonModule,
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
        GradingHistoryComponent,
        StockTrendComponent,
        SymbolLookupModalComponent,
        DetailsSummaryContainerComponent,
        DetailsRevenueEstimateComponent,
        StockSearchComponent,
        SummarySectorChartComponent,
        StockInfoListChangeComponent,
        DetailsOwnershipComponent,
        DetailsTransactionsComponent,
        DetailsEsgScoreComponent
    ],
    entryComponents: [
        SymbolLookupModalComponent
    ]
})
export class StockDetailsFeatureModule {
}
