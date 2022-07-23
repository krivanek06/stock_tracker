import { Pipe, PipeTransform } from '@angular/core';
import { MomentService } from '../../services';

@Pipe({
	name: 'isTimeMoreThan',
})
export class IsTimeMoreThanPipe implements PipeTransform {
	transform(date: string, days: number): boolean {
		return MomentService.isMoreThan(date, days);
	}
}
