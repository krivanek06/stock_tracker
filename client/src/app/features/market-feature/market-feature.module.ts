import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {
    MarketCalendarEconomicComponent,
    MarketCompanyQuotesTableComponent,
    MarketEarningsTableComponent,
    MarketSectorHeatMapComponent,
    MarketTopTableCryptoComponent
} from './components';
import {MarketChartBuilderComponent, MarketEarningsModalComponent} from './entry-components';


@NgModule({
    declarations: [
        MarketCompanyQuotesTableComponent,
        MarketEarningsTableComponent,
        MarketCalendarEconomicComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent,
        MarketSectorHeatMapComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MarketCompanyQuotesTableComponent,
        MarketEarningsTableComponent,
        MarketCalendarEconomicComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent,
        MarketSectorHeatMapComponent
    ]
})
export class MarketFeatureModule {
}
