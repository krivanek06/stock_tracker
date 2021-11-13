import { Pipe, PipeTransform } from '@angular/core';
import { StHolding } from '@core';
import { GenericChartSeriesData } from '@shared';

@Pipe({
	name: 'holdingsToNameValue',
})
export class HoldingsToNameValuePipe implements PipeTransform {
	transform(holdings: StHolding[]): GenericChartSeriesData[] {
		return holdings.map((h) => {
			return { name: h.symbol, y: (h.units || 0) * (h?.summary?.marketPrice || 0) } as GenericChartSeriesData;
		});
	}
}
