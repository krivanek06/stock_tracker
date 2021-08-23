import {NgModule} from '@angular/core';
import {HoldingsToPortfolioChartSeriesPipe} from "./holdings-to-portfolio-chart-series.pipe";


@NgModule({
    declarations: [HoldingsToPortfolioChartSeriesPipe],
    exports: [HoldingsToPortfolioChartSeriesPipe]
})
export class HoldingsToPortfolioChartSeriesPipeModule {
}
