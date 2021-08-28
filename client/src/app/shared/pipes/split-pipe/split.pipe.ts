import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'split',
})
export class SplitPipe implements PipeTransform {
	transform(text: string, by: string | string[], index: number = 0) {
		if (typeof by === 'string') {
			return text.split(by)[index];
		}
		by.forEach((splitOperator) => {
			text = text.split(splitOperator)[index];
		});
		return text;
	}
}
