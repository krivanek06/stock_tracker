import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'replaceChar',
})
export class ReplaceCharPipe implements PipeTransform {
	transform(value: string, character: string, replaceWith = ' '): string {
		if (typeof value === 'string') {
			const re = new RegExp(character, 'g');
			const modifiedValue = value.replace(re, replaceWith);
			return modifiedValue;
		}

		return value;
	}
}
