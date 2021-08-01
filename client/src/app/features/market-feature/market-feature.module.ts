import {NgModule} from '@angular/core';
import {FormLockInputModule, FormMatInputLockWrapperModule, FormMatInputWrapperModule, SharedModule} from '@shared';
import {
    MarketCalendarDividendPayoutComponent,
    MarketCalendarEarningsComponent,
    MarketCalendarEconomicComponent,
    MarketCalendarIpoComponent,
    MarketCalendarSplitHistoryComponent,
    MarketCompanyQuotesTableComponent,
    MarketSearchFormComponent,
    MarketSearchFormResultComponent,
    MarketSearchTableComponent,
    MarketSectorHeatMapComponent,
    MarketStockNewsComponent,
    MarketTopTableCryptoComponent
} from './components';
import {MarketChartBuilderComponent} from './entry-components';


@NgModule({
    declarations: [
        MarketCompanyQuotesTableComponent,
        MarketCalendarEconomicComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent,
        MarketSectorHeatMapComponent,
        MarketStockNewsComponent,
        MarketCalendarIpoComponent,
        MarketCalendarEarningsComponent,
        MarketCalendarSplitHistoryComponent,
        MarketCalendarDividendPayoutComponent,
        MarketSearchFormComponent,
        MarketSearchFormResultComponent,
        MarketSearchTableComponent
    ],
    imports: [
        SharedModule,
        FormMatInputWrapperModule,
        FormLockInputModule,
        FormMatInputLockWrapperModule
    ],
    exports: [
        MarketCompanyQuotesTableComponent,
        MarketCalendarEconomicComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent,
        MarketSectorHeatMapComponent,
        MarketStockNewsComponent,
        MarketCalendarIpoComponent,
        MarketCalendarEarningsComponent,
        MarketCalendarSplitHistoryComponent,
        MarketCalendarDividendPayoutComponent,
        MarketSearchTableComponent,
        MarketSearchFormResultComponent,
        MarketSearchFormComponent
    ]
})
export class MarketFeatureModule {
}
