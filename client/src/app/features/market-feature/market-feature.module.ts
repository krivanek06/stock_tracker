import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {
    MarketCalendarDividendPayoutComponent,
    MarketCalendarEarningsComponent,
    MarketCalendarEconomicComponent,
    MarketCalendarIpoComponent,
    MarketCalendarSplitHistoryComponent,
    MarketCompanyQuotesTableComponent,
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
        MarketCalendarDividendPayoutComponent
    ],
    imports: [
        SharedModule
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
        MarketCalendarDividendPayoutComponent
    ]
})
export class MarketFeatureModule {
}
