import { Pipe, PipeTransform } from '@angular/core';
import { Series } from '@core';

@Pipe({
	name: 'convertToSeries',
})
export class ConvertToSeriesPipe implements PipeTransform {
	transform(data: string | string[] | (number | null | undefined)[] | null | undefined, name: string): Series[] {
		return [{ name, data }] as Series[];
	}
}
