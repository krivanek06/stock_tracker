import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsOverviewCardComponent} from './components/card/details-overview-card/details-overview-card.component';
import {DetailsDividendCardComponent} from './components/card/details-dividend-card/details-dividend-card.component';
import {DetailsValuationCardComponent} from './components/card/details-valuation-card/details-valuation-card.component';
import {DetailsFinancialStrengthCardComponent} from './components/card/details-financial-strength-card/details-financial-strength-card.component';
import {DetailsPerShareCardComponent} from './components/card/details-per-share-card/details-per-share-card.component';
import {DetailsIncomeStatementCardComponent} from './components/card/details-income-statement-card/details-income-statement-card.component';
import {DetailsCashFlowCardComponent} from './components/card/details-cash-flow-card/details-cash-flow-card.component';
import {DetailsBalanceSheetCardComponent} from './components/card/details-balance-sheet-card/details-balance-sheet-card.component';
import {DetailsRecommendationChartCardComponent} from './components/card/details-recommendation-chart-card/details-recommendation-chart-card.component';
import {DetailsRevenueGrowthSliderCardComponent} from './components/card/details-revenue-growth-slider-card/details-revenue-growth-slider-card.component';
import {DetialsFinancialStrengthRatioCardComponent} from './components/card/detials-financial-strength-ratio-card/detials-financial-strength-ratio-card.component';
import {DetailsFinancialReportNamesCardComponent} from './components/card/details-financial-report-names-card/details-financial-report-names-card.component';
import {DetailsFinancialReportModalComponent} from './components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {DetailsSummaryModalComponent} from './components/modal/details-summary-modal/details-summary-modal.component';
import {DetailsEarningsPerShareChartCardComponent} from './components/card/details-earnings-per-share-chart-card/details-earnings-per-share-chart-card.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        DetailsOverviewCardComponent,
        DetailsDividendCardComponent,
        DetailsValuationCardComponent,
        DetailsFinancialStrengthCardComponent,
        DetailsPerShareCardComponent,
        DetailsIncomeStatementCardComponent,
        DetailsCashFlowCardComponent,
        DetailsBalanceSheetCardComponent,
        DetailsRecommendationChartCardComponent,
        DetailsRevenueGrowthSliderCardComponent,
        DetialsFinancialStrengthRatioCardComponent,
        DetailsFinancialReportNamesCardComponent,
        DetailsFinancialReportModalComponent,
        DetailsSummaryModalComponent,
        DetailsEarningsPerShareChartCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        DetailsOverviewCardComponent,
        DetailsDividendCardComponent,
        DetailsValuationCardComponent,
        DetailsFinancialStrengthCardComponent,
        DetailsPerShareCardComponent,
        DetailsIncomeStatementCardComponent,
        DetailsCashFlowCardComponent,
        DetailsBalanceSheetCardComponent,
        DetailsRecommendationChartCardComponent,
        DetailsRevenueGrowthSliderCardComponent,
        DetialsFinancialStrengthRatioCardComponent,
        DetailsFinancialReportNamesCardComponent,
        DetailsFinancialReportModalComponent,
        DetailsSummaryModalComponent,
        DetailsEarningsPerShareChartCardComponent
    ],
    entryComponents: [
        DetailsSummaryModalComponent,
        DetailsFinancialReportModalComponent
    ]
})
export class StockDetailsFeatureModule {
}
