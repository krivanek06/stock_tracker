import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'increasePrct',
})
export class IncreasePrctPipe implements PipeTransform {
	transform(final: number, initial: number): number | null {
		if (!final || !initial) {
			return null;
		}
		return (final - initial) / Math.abs(initial);
	}
}
