import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectKeyPipe',
})
export class ObjectKeyPipePipe implements PipeTransform {
	transform(objectValue: any, key: string): any | null {
		return objectValue[key];
	}
}
