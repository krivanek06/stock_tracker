import { Pipe, PipeTransform } from '@angular/core';
import { StHolding } from '@core';
import { GenericChartSeriesData } from '@shared';

@Pipe({
	name: 'holdingsToSectorChartSeries',
})
export class HoldingsToSectorChartSeriesPipe implements PipeTransform {
	transform(holdings: StHolding[]): GenericChartSeriesData[] {
		// from holdings creates -> [{name: 'Technology', y: 5}, {name: 'Cruise', y: 2} ... ]
		const helper: any = {};
		let sectorPairs: GenericChartSeriesData[] = [];
		holdings
			.filter((h) => h?.summary?.sector) // you may own etf or mutual fund which have no sector
			.map((s) => s.summary)
			.forEach((stock) => {
				if (stock && stock.sector) {
					const sector = stock.sector.split(' ')[0];
					helper[sector] = helper[sector] + 1 || 1;
				}
			});
		let isFirst = true;
		for (const [key, value] of Object.entries(helper)) {
			sectorPairs = [...sectorPairs, { name: key, y: value || null, sliced: isFirst } as GenericChartSeriesData];
			isFirst = false;
		}

		return sectorPairs;
	}
}
