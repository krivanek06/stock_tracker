import {Pipe, PipeTransform} from '@angular/core';
import {GenericChartSeries} from '@shared';
import {StHolding} from '@core';

@Pipe({
    name: 'holdingsToPortfolioChartSeries'
})
export class HoldingsToPortfolioChartSeriesPipe implements PipeTransform {

    transform(holdings: StHolding[], portfolioCash: number): GenericChartSeries[] {
        console.log(holdings);
        const portfolioInvested = holdings.map(h => h.summary.marketPrice * h.units).reduce((a, b) => a + b, 0);
        const totalPortfolio = portfolioInvested + portfolioCash;

        const sectorPairs: GenericChartSeries[] = [
            {name: 'Cash', y: 100 / totalPortfolio * portfolioCash, sliced: true},
            ...holdings.map(h => {
                const symbolSum = h.units * h.summary.marketPrice;
                return {name: h.symbol, y: 100 / totalPortfolio * symbolSum} as GenericChartSeries;
            })];

        return sectorPairs;
    }

}
