import {Pipe, PipeTransform} from '@angular/core';
import {GenericChartSeries} from '../models';

@Pipe({
    name: 'chartKeyValueFormatter'
})
export class ChartKeyValueFormatterPipe implements PipeTransform {

    transform(data: any[], keyName: string, valueName: string): GenericChartSeries[] {
        console.log(data.map(d => {
            return {name: d[keyName], y: parseFloat(d[valueName])};
        }));
        return data.map(d => {
            return {name: d[keyName], y: parseFloat(d[valueName])};
        });
    }

}
