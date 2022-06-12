import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'splitKeyToTitlecase',
})
export class SplitKeyToTitlecasePipe implements PipeTransform {
	/**
	 * Transform 'ebitPerShare' -> 'Ebit per share'
	 */
	transform(value: string): string {
		if (!value) {
			return 'Undefined key';
		}

		const math = value.match(/[A-Z]*[^A-Z]+/g);

		if (!math) {
			return 'Undefined key';
		}
		return math.join(' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
	}
}
