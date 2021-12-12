import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
	transform(value: unknown): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array' | null {
		try {
			if (value instanceof Array) {
				return 'array';
			}
			return typeof value;
		} catch (e) {
			return null;
		}
	}
}
