import { Pipe, PipeTransform } from '@angular/core';
import { StHolding } from '@core';
import { GenericChartSeries } from '@shared';

@Pipe({
	name: 'holdingsToSectorChartSeries',
})
export class HoldingsToSectorChartSeriesPipe implements PipeTransform {
	transform(holdings: StHolding[]): GenericChartSeries[] {
		// from holdings creates -> [{name: 'Technology', y: 5}, {name: 'Cruise', y: 2} ... ]
		const helper = [];
		let sectorPairs: GenericChartSeries[] = [];
		holdings
			.filter((h) => h?.summary?.sector) // you may own etf or mutual fund which have no sector
			.map((s) => s.summary)
			.forEach((stock) => {
				const sector = stock.sector.split(' ')[0];
				helper[sector] = helper[sector] + 1 || 1;
			});
		let isFirst = true;
		for (const [key, value] of Object.entries(helper)) {
			sectorPairs = [...sectorPairs, { name: key, y: value, sliced: isFirst }];
			isFirst = false;
		}

		return sectorPairs;
	}
}
