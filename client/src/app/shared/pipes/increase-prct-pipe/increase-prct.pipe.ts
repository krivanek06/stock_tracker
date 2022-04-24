import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'increasePrct',
})
export class IncreasePrctPipe implements PipeTransform {
	transform(final: string | number | null | undefined, initial: string | number | null | undefined): number | null {
		try {
			if (!final || !initial) {
				return null;
			}
			return (Number(final) - Number(initial)) / Math.abs(Number(initial));
		} catch {
			return null;
		}
	}
}
