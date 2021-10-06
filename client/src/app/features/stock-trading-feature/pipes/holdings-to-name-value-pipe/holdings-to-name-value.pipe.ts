import { Pipe, PipeTransform } from '@angular/core';
import { StHolding } from '@core';
import { GenericChartSeries } from '@shared';

@Pipe({
	name: 'holdingsToNameValue',
})
export class HoldingsToNameValuePipe implements PipeTransform {
	transform(holdings: StHolding[]): GenericChartSeries[] {
		return holdings.map((h) => {
			return { name: h.symbol, y: (h.units || 0) * (h?.summary?.marketPrice || 0) } as GenericChartSeries;
		});
	}
}
