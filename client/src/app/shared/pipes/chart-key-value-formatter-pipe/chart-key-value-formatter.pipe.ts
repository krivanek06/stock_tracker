import { Pipe, PipeTransform } from '@angular/core';
import { GenericChartSeriesData } from '../../models';

@Pipe({
	name: 'chartKeyValueFormatter',
})
export class ChartKeyValueFormatterPipe implements PipeTransform {
	transform(data: any[], keyName: string, valueName: string): GenericChartSeriesData[] {
		/* console.log(data.map(d => {
             return {name: d[keyName], y: parseFloat(d[valueName])};
         }));*/
		return data.map((d) => {
			return { name: d[keyName], y: Math.round((parseFloat(d[valueName]) + Number.EPSILON) * 100) / 100 };
		});
	}
}
