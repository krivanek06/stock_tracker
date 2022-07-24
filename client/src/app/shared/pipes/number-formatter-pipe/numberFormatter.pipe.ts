import { Pipe, PipeTransform } from '@angular/core';
import { stFormatLargeNumber } from '../../utils';

@Pipe({
	name: 'numberFormatter',
})
export class NumberFormatterPipe implements PipeTransform {
	transform(value?: string | number | null | unknown, isPercent: boolean = false, showDollarSign: boolean = false): string {
		return stFormatLargeNumber(value, isPercent, showDollarSign);
	}
}
