import { Pipe, PipeTransform } from '@angular/core';
import { StHolding } from '@core';
import { GenericChartSeriesData } from '@shared';

@Pipe({
	name: 'holdingsToPortfolioChartSeries',
})
export class HoldingsToPortfolioChartSeriesPipe implements PipeTransform {
	transform(holdings: StHolding[], portfolioCash: number): GenericChartSeriesData[] {
		console.log(holdings);
		const portfolioInvested = holdings.map((h) => h.summary.marketPrice * h.units).reduce((a, b) => a + b, 0);
		const totalPortfolio = portfolioInvested + portfolioCash;

		const sectorPairs: GenericChartSeriesData[] = [
			{ name: 'Cash', y: (100 / totalPortfolio) * portfolioCash, sliced: true },
			...holdings.map((h) => {
				const symbolSum = h.units * h.summary.marketPrice;
				return { name: h.symbol, y: (100 / totalPortfolio) * symbolSum } as GenericChartSeriesData;
			}),
		];

		return sectorPairs;
	}
}
