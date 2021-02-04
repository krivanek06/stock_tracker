import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsDividendComponent} from './components/details-dividend/details-dividend.component';
import {DetailsValuationComponent} from './components/details-valuation/details-valuation.component';
import {DetailsFinancialStrengthComponent} from './components/details-financial-strength/details-financial-strength.component';
import {DetailsPerShareComponent} from './components/details-per-share/details-per-share.component';
import {DetailsStatementTableComponent} from './components/details-statement-table/details-statement-table.component';
import {DetailsRecommendationChartComponent} from './components/details-recommendation-chart/details-recommendation-chart.component';
import {DetailsFinancialStrengthRatioComponent} from './components/details-financial-strength-ratio/details-financial-strength-ratio.component';
import {DetailsFinancialReportModalComponent} from './entry-components/details-financial-report-modal/details-financial-report-modal.component';
import {DetailsEarningsChartComponent} from './components/details-earnings-chart/details-earnings-chart.component';
import {SharedModule} from '../../shared/shared.module';
import {GradingHistoryComponent} from './components/grading-history/grading-history.component';
import {StockTrendComponent} from './components/stock-trend/stock-trend.component';
import {SymbolLookupModalComponent} from './entry-components/symbol-lookup-modal/symbol-lookup-modal.component';
import {DetailsSummaryContainerComponent} from './containers/details-summary-container/details-summary-container.component';
import {DetailsRevenueEstimateComponent} from './components/details-revenue-estimate/details-revenue-estimate.component';
import {StockSearchComponent} from './containers/stock-search/stock-search.component';
import {SummarySectorChartComponent} from './components/summary-sector-chart/summary-sector-chart.component';
import {StockInfoListChangeComponent} from './components/stock-info-list-change/stock-info-list-change.component';
import {TrendItemComponent} from './components/stock-trend/trend-item/trend-item.component';
import {DetailsOwnershipComponent} from './components/details-ownership/details-ownership.component';
import {DetailsTransactionsComponent} from './components/details-transactions/details-transactions.component';
import {DetailsEsgScoreComponent} from './components/details-esg-score/details-esg-score.component';


@NgModule({
    declarations: [
        DetailsDividendComponent,
        DetailsValuationComponent,
        DetailsFinancialStrengthComponent,
        DetailsPerShareComponent,
        DetailsStatementTableComponent,
        DetailsRecommendationChartComponent,
        DetailsFinancialStrengthRatioComponent,
        DetailsFinancialReportModalComponent,
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
        DetailsFinancialReportModalComponent,
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
        DetailsFinancialReportModalComponent,
        SymbolLookupModalComponent
    ]
})
export class StockDetailsFeatureModule {
}
